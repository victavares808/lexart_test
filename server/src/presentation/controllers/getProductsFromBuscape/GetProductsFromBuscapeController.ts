import { type Controller, type HttpRequest, type HttpResponse } from '../../protocols';
import { type Crawler } from '../../../infra/protocols';
import { type GetProducts } from '../../../domain/useCases/GetProducts';

export class GetProductsFromBuscapeController implements Controller {
  constructor (private readonly crawler: Crawler, private readonly getProducts: GetProducts) {
  }

  async handle (request: HttpRequest): Promise<HttpResponse> {
    const { category } = request.body;

    const products = await this.getProducts.execute();

    if (products.length === 0) {
      await this.crawler.getProducts(category);
      const products = await this.getProducts.execute();
      return {
        statusCode: 200,
        body: products
      }
    }

    return {
      statusCode: 200,
      body: products
    };
  }
}
