import { type AddProductsOnDB } from '../../../data/useCases/addProducts/AddProducts';
import { MercadoLivreApiProvider } from '../../../infra/providers/MercadoLivreApiProvider/MercadoLivreApiProvider';

// make a mock of the fetch api

interface SutTypes {
  sut: MercadoLivreApiProvider
  addProductsStub: jest.Mocked<AddProductsOnDB>
}
const makeSut = (): SutTypes => {
  const addProductsStub: jest.Mocked<AddProductsOnDB> = {
    execute: jest.fn()
  } as any
  const sut = new MercadoLivreApiProvider(addProductsStub);
  return { sut, addProductsStub };
};

describe('MercadoLivreApiProvider', () => {
  test('should call addProducts with correct values', async () => {
    const { sut, addProductsStub } = makeSut();
    const addSpy = jest.spyOn(addProductsStub, 'execute');
    await sut.getProducts('cell phones');

    expect(addSpy).toHaveBeenCalledWith(expect.arrayContaining([
      expect.objectContaining({
        name: expect.any(String),
        image: expect.any(String),
        price: expect.any(Number),
        link: expect.any(String),
        category: 'cell phones',
        engine: 'MLB'
      })
    ]));
  });
});
