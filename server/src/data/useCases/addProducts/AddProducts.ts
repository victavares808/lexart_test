import { type AddProducts } from '../../../domain/useCases/AddProducts';
import { type AddProductRepository, type CreateProductDTO } from '../../protocols';

export class AddProductsOnDB implements AddProducts {
  constructor (private readonly repository: AddProductRepository) {
  }

  async execute (products: CreateProductDTO[]): Promise<void> {
    await this.repository.addMany(products);
  }
}
