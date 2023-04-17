import { type GetProducts } from '../../../domain/useCases/GetProducts';
import { type Controller, type HttpRequest, type HttpResponse } from '../../protocols';

export class GetAllProductsController implements Controller {
  constructor(
    private readonly getProducts: GetProducts) {
  }

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { category } = request.params;
    const { query } = request.query;
    const products = await this.getProducts.execute(category, 'ALL', query);

    return {
      statusCode: 200,
      body: products
    }
  }
}
