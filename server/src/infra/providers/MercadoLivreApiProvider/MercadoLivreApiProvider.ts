import { type ApiProvider } from '../../protocols';
import { type CreateProductDTO } from '../../../data/protocols/';
import { type AddProductsOnDB } from '../../../data/useCases/addProducts/AddProducts';

export class MercadoLivreApiProvider implements ApiProvider {
  private readonly baseURL = 'https://api.mercadolibre.com/sites/MLB/search?q=';

  constructor(private readonly addProducts: AddProductsOnDB) {
  }

  async getProducts(category: string): Promise<void> {
    const response = await fetch(this.baseURL + category);
    const data = await response.json();
    const productsToAddOnDB = this.formatResult(data.results, category);
    await this.addProducts.execute(productsToAddOnDB);
  }

  private formatResult(data: any[], category: string): CreateProductDTO[] {
    return data.map((product) => {
      return {
        name: product.title,
        image: product.thumbnail,
        price: parseFloat(product.price),
        link: product.permalink,
        category,
        engine: 'MLB'
      };
    });
  }
}
