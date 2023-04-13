import { type GetProductDTO } from '../../domain/useCases/GetProducts';

export interface GetProductsRepository {
  getAll: () => Promise<GetProductDTO[]>
}
