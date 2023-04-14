import { type GetProductDTO } from '../../domain/useCases/GetProducts';

export interface GetProductsRepository {
  getAll: (category: string, engine: 'ALL' | 'MLB' | 'BUSCAPE', query?: string) => Promise<GetProductDTO[]>
}
