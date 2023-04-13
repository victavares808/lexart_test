import { type Controller, type HttpRequest, type HttpResponse } from '../../protocols';
import { type Crawler } from '../../../infra/protocols/Crawler';

export class GetProductsFromBuscapeController implements Controller {
  constructor (private readonly crawler: Crawler) {
  }

  async handle (request: HttpRequest): Promise<HttpResponse> {
    const { product } = request.body;
    const products = await this.crawler.getProducts(product);
    return {
      statusCode: 200,
      body: products
    };
  }
}
