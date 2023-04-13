import { type Controller } from '../presentation/protocols';
import {
  GetProductsFromMercadoLivreController
} from '../presentation/controllers/getProductsFromMercadoLivre/GetProductsFromMercadoLivreController';
import {
  MercadoLivreApiProvider
} from '../infra/providers/MercadoLivreApiProvider/MercadoLivreApiProvider';
import { GetProductsFromDB } from '../data/useCases/getProducts/GetProducts';
import { PrismaProductsRepository } from '../infra/database/repositories/PrismaProductsRepository';
import { AddProductsOnDB } from '../data/useCases/addProducts/AddProducts';

export const makeGetProductsOnMercadoLivreController = (): Controller => {
  const repository = new PrismaProductsRepository()

  const getProductsFromDB = new GetProductsFromDB(repository)
  const addProductsOnDB = new AddProductsOnDB(repository)
  const apiProvider = new MercadoLivreApiProvider(addProductsOnDB)

  return new GetProductsFromMercadoLivreController(apiProvider, getProductsFromDB)
}
