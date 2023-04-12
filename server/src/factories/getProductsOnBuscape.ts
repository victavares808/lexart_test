import { type Controller } from '../presentation/protocols/Controller';
import {
  GetProductsFromBuscapeController
} from '../presentation/controllers/getProductsFromBuscape/GetProductsFromBuscapeController';
import { BuscapeCrawlerProvider } from '../providers/buscapeCrawler/BuscapeCrawlerProvider';

export const makeGetProductsOnBuscapeController = (): Controller => {
  const crawler = new BuscapeCrawlerProvider();
  return new GetProductsFromBuscapeController(crawler);
};
