import puppeteer, { executablePath } from 'puppeteer';
import { type AddProductsOnDB } from '../../../data/useCases/addProducts/AddProducts';
import { BuscapeCrawlerProvider } from '../../../infra/providers/buscapeCrawler/BuscapeCrawlerProvider';
import { productsToAddMock } from '../../mocks/products';

interface SutTypes {
  sut: BuscapeCrawlerProvider
  addProductRepositoryStub: jest.Mocked<AddProductsOnDB>
}

const baseProductsInfoMock = [
  {
    name: 'Product 1',
    link: 'any_link',
    price: 'R$ 10,00',
    image: 'any_image'
  },
  {
    name: 'Product 2',
    link: 'any_link',
    price: 'R$ 20,00',
    image: 'any_image'
  }
]

const makeSut = (): SutTypes => {
  const addProductRepositoryStub: jest.Mocked<AddProductsOnDB> = {
    execute: jest.fn()
  } as any;
  const sut = new BuscapeCrawlerProvider(addProductRepositoryStub);
  return { sut, addProductRepositoryStub };
}

describe('BuscapeCrawlerProvider', () => {
  describe('getProducts', () => {
    it('should call puppeteer to launch a new browser and get the page', async () => {
      const { sut } = makeSut();
      const puppeteerLaunchSpy = jest.spyOn(puppeteer, 'launch').mockResolvedValueOnce({
        newPage: jest.fn().mockResolvedValueOnce({
          goto: jest.fn(),
          evaluate: jest.fn().mockReturnValue(baseProductsInfoMock)
        }),
        close: jest.fn()
      } as any);
      await sut.getProducts('any_category');
      expect(puppeteerLaunchSpy).toHaveBeenCalledWith({
        executablePath: executablePath(),
        args: ['--no-sandbox']
      });
    })

    it('should get the products information from the page', async () => {
      const { sut } = makeSut();

      const evaluateMock = jest.fn().mockReturnValue(baseProductsInfoMock);
      const gotoMock = jest.fn();

      jest.spyOn(puppeteer, 'launch').mockResolvedValueOnce({
        newPage: jest.fn().mockResolvedValueOnce({
          goto: gotoMock,
          evaluate: evaluateMock
        }),
        close: jest.fn()
      } as any);

      await sut.getProducts('any_category');
      expect(gotoMock).toHaveBeenCalledWith('https://www.buscape.com.br/any_category');
      expect(evaluateMock).toHaveBeenCalled();
    })

    it('should call addProducts.execute passing the products information, the category and engine', async () => {
      const { sut, addProductRepositoryStub } = makeSut();
      const evaluateMock = jest.fn().mockReturnValue(baseProductsInfoMock);

      jest.spyOn(puppeteer, 'launch').mockResolvedValueOnce({
        newPage: jest.fn().mockResolvedValueOnce({
          goto: jest.fn(),
          evaluate: evaluateMock
        }),
        close: jest.fn()
      } as any);

      await sut.getProducts('any_category');
      expect(addProductRepositoryStub.execute).toHaveBeenCalledWith(productsToAddMock);
    })

    it('should throw if addProducts.execute throws', async () => {
      const { sut, addProductRepositoryStub } = makeSut();
      addProductRepositoryStub.execute.mockRejectedValueOnce(new Error());

      jest.spyOn(puppeteer, 'launch').mockResolvedValueOnce({
        newPage: jest.fn().mockResolvedValueOnce({
          goto: jest.fn(),
          evaluate: jest.fn().mockReturnValue(baseProductsInfoMock)
        }),
        close: jest.fn()
      } as any);

      const promise = sut.getProducts('any_category');
      await expect(promise).rejects.toThrow();
    })

    it('should throw if puppeteer throws', async () => {
      const { sut } = makeSut();
      jest.spyOn(puppeteer, 'launch').mockRejectedValueOnce(new Error());
      const promise = sut.getProducts('any_category');
      await expect(promise).rejects.toThrow();
    })
  })
})
