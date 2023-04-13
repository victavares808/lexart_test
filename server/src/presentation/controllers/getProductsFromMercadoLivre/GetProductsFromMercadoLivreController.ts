import { type GetProducts } from '../../../domain/useCases/GetProducts';
import {
  type MercadoLivreApiProvider
} from '../../../infra/providers/MercadoLivreApiProvider/MercadoLivreApiProvider';
import { type Controller, type HttpRequest, type HttpResponse } from '../../protocols';

export class GetProductsFromMercadoLivreController implements Controller {
  constructor(
    private readonly api: MercadoLivreApiProvider,
    private readonly getProducts: GetProducts) {
  }

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { category } = request.body;
    let products = await this.getProducts.execute(category, 'MLB');

    if (products.length === 0) {
      await this.api.getProducts(category);
      products = await this.getProducts.execute(category, 'MLB');
    }

    return {
      statusCode: 200,
      body: products
    }
  }
}
