import { type GetProductsRepository } from '../../../../data/protocols';
import { GetProductsFromDB } from '../../../../data/useCases/getProducts/GetProducts';
import { productsResponseMock } from '../../../mocks/products';

interface SutTypes {
  sut: GetProductsFromDB
  repositoryStub: jest.Mocked<GetProductsRepository>
}

const category = 'test';
const engine = 'ALL';
const query = 'test query';

const makeSut = (): SutTypes => {
  const repositoryStub: jest.Mocked<GetProductsRepository> = {
    getAll: jest.fn().mockResolvedValue(productsResponseMock)
  };
  const sut = new GetProductsFromDB(repositoryStub);
  return { sut, repositoryStub };
};

describe('GetProductsFromDB', () => {
  it('should call the getAll method of the repository with the correct parameters', async () => {
    const { sut, repositoryStub } = makeSut();
    await sut.execute(category, engine, query);
    expect(repositoryStub.getAll).toHaveBeenCalledWith(category, engine, query);
  });

  it('should call the getAll method of the repository the query parameter as undefined', async () => {
    const category = 'test';
    const engine = 'ALL';
    const { sut, repositoryStub } = makeSut();

    await sut.execute(category, engine);
    expect(repositoryStub.getAll).toHaveBeenCalledWith(category, engine, undefined);
  });

  it('should return the product data returned by the repository', async () => {
    const { sut } = makeSut();
    const result = await sut.execute(category, engine, query);
    expect(result).toEqual(productsResponseMock);
  });

  it('should throw an error when the repository throws an error', async () => {
    const { sut, repositoryStub } = makeSut();
    repositoryStub.getAll.mockRejectedValueOnce(new Error());
    const promise = sut.execute(category, engine, query);
    await expect(promise).rejects.toThrow();
  });
});
