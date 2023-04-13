import { type GetProductDTO } from '../../domain/useCases/GetProducts';

export interface GetProductsRepository {
  getAll: (category: string) => Promise<GetProductDTO[]>
}
