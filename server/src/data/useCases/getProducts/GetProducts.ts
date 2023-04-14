import { type GetProductDTO, type GetProducts } from '../../../domain/useCases/GetProducts';
import { type GetProductsRepository } from '../../protocols';

export class GetProductsFromDB implements GetProducts {
  constructor(private readonly repository: GetProductsRepository) {
  }

  async execute(category: string, engine: 'ALL' | 'MLB' | 'BUSCAPE', query?: string): Promise<GetProductDTO[]> {
    return await this.repository.getAll(category, engine, query);
  }
}
