import { type Controller } from '../presentation/protocols/Controller';
import {
  GetProductsFromBuscapeController
} from '../presentation/controllers/getProductsFromBuscape/GetProductsFromBuscapeController';
import { BuscapeCrawlerProvider } from '../infra/providers/buscapeCrawler/BuscapeCrawlerProvider';
import { AddProductsOnDB } from '../data/useCases/addProducts/AddProducts';
import {
  BuscapeProductsRepository
} from '../infra/database/repositories/BuscapeProductsRepository';
import { GetProductsFromDB } from '../data/useCases/getProducts/GetProducts';

export const makeGetProductsOnBuscapeController = (): Controller => {
  const buscapeRepository = new BuscapeProductsRepository();
  const addProductOnDB = new AddProductsOnDB(buscapeRepository);
  const crawler = new BuscapeCrawlerProvider(addProductOnDB);

  const getProductsFromDB = new GetProductsFromDB(buscapeRepository);

  return new GetProductsFromBuscapeController(crawler, getProductsFromDB);
};
