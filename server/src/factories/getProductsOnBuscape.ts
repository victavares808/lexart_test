import { type Controller } from '../presentation/protocols/Controller';
import {
  GetProductsFromBuscapeController
} from '../presentation/controllers/getProductsFromBuscape/GetProductsFromBuscapeController';
import { BuscapeCrawlerProvider } from '../infra/providers/buscapeCrawler/BuscapeCrawlerProvider';
import { AddProductsOnDB } from '../data/useCases/addProducts/AddProducts';
import { PrismaProductsRepository } from '../infra/database/repositories/PrismaProductsRepository';
import { GetProductsFromDB } from '../data/useCases/getProducts/GetProducts';

export const makeGetProductsOnBuscapeController = (): Controller => {
  const buscapeRepository = new PrismaProductsRepository();
  const addProductOnDB = new AddProductsOnDB(buscapeRepository);
  const crawler = new BuscapeCrawlerProvider(addProductOnDB);

  const getProductsFromDB = new GetProductsFromDB(buscapeRepository);

  return new GetProductsFromBuscapeController(crawler, getProductsFromDB);
};
