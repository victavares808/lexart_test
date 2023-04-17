import { type GetProducts } from '../../../domain/useCases/GetProducts';
import { GetAllProductsController } from '../../../presentation/controllers/getAllProducts/GetAllProductsController';
import { productsResponseMock } from '../../mocks/products';

interface SutTypes {
  sut: GetAllProductsController
  getProducts: jest.Mocked<GetProducts>
}

const makeSut = (): SutTypes => {
  const getProducts: jest.Mocked<GetProducts> = {
    execute: jest.fn().mockResolvedValue(productsResponseMock)
  }
  const sut = new GetAllProductsController(getProducts);
  return { sut, getProducts };
};

describe('GetAllProductsController', () => {
  it('should call getProducts with the correct params', async () => {
    const { sut, getProducts } = makeSut();
    const category = 'electronics';
    const query = 'laptop';
    await sut.handle({ params: { category }, query: { query } });
    expect(getProducts.execute).toHaveBeenCalledWith(category, 'ALL', query);
  });

  it('should return 200 and an empty array if getProducts returns an empty array', async () => {
    const { sut, getProducts } = makeSut();
    getProducts.execute.mockResolvedValueOnce([]);

    const response = await sut.handle({ params: { category: 'electronics' }, query: '' });
    expect(response).toEqual({ statusCode: 200, body: [] });
  });
});
