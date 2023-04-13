import { type ApiProvider } from '../../protocols';
import { type GetProductDTO } from '../../../data/protocols/';

export class MercadoLivreApiProvider implements ApiProvider {
  private readonly baseURL = 'https://api.mercadolibre.com/sites/MLB/search?q=';

  async getProducts (category: string): Promise<GetProductDTO[]> {
    const response = await fetch(this.baseURL + category);
    const data = await response.json();
    return this.formatResult(data.results);
  }

  private formatResult (data: any[]): GetProductDTO[] {
    return data.map((product) => {
      return {
        name: product.title,
        image: product.thumbnail,
        price: product.price,
        link: product.permalink
      };
    });
  }
}
