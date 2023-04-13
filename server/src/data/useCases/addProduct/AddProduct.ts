import { type AddProduct, type CreateProductDTO } from '../../../domain/useCases/AddProduct';
import { type AddProductRepository } from '../../protocols';

export class AddProductOnDB implements AddProduct {
  constructor (private readonly repository: AddProductRepository) {
  }

  async add (product: CreateProductDTO): Promise<boolean> {
    await this.repository.add(product);
    return true; // assuming product is added successfully
  }
}
