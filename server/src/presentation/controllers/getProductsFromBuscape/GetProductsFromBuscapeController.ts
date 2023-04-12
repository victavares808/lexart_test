import { type Controller } from '../../protocols/Controller';
import { type Crawler } from '../../../providers/Crawler';
import { type HttpRequest, type HttpResponse } from '../../protocols';

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
