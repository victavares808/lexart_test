import { type AddProduct } from '../../../domain/useCases/AddProduct';
import { type AddProductRepository, type CreateProductDTO } from '../../protocols';

export class AddProductOnDB implements AddProduct {
  constructor (private readonly repository: AddProductRepository) {
  }

  async execute (product: CreateProductDTO): Promise<boolean> {
    await this.repository.add(product);
    return true; // assuming product is added successfully
  }
}
