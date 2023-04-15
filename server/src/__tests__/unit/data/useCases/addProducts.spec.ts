import { type AddProductRepository } from '../../../../data/protocols';
import { AddProductsOnDB } from '../../../../data/useCases/addProducts/AddProducts';
import { productsToAddMock } from '../../../mocks/products';

interface SutTypes {
  sut: AddProductsOnDB
  addProductRepositoryStub: jest.Mocked<AddProductRepository>
}

const makeSut = (): SutTypes => {
  const addProductRepositoryStub: jest.Mocked<AddProductRepository> = {
    addMany: jest.fn()
  }
  const sut = new AddProductsOnDB(addProductRepositoryStub);
  return { sut, addProductRepositoryStub };
}

describe('AddProductsOnDB use case', () => {
  it('Should call add many with the correct values', async () => {
    const { sut, addProductRepositoryStub } = makeSut();
    await sut.execute(productsToAddMock);
    expect(addProductRepositoryStub.addMany).toHaveBeenCalledWith(productsToAddMock);
  });

  it('should throw an error repository throws', async () => {
    const { sut, addProductRepositoryStub } = makeSut();
    addProductRepositoryStub.addMany.mockRejectedValueOnce(new Error(''));
    const promise = sut.execute(productsToAddMock);
    await expect(promise).rejects.toThrow();
  });
});
