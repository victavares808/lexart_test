import { type CreateProductDTO } from '../../domain/useCases/AddProduct';

export interface AddProductRepository {
  add: (product: CreateProductDTO) => Promise<boolean>
}
