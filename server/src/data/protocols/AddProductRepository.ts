import { type CreateProductDTO } from '../../domain/useCases/AddProducts';

export interface AddProductRepository {
  addMany: (products: CreateProductDTO[]) => Promise<void>
}
