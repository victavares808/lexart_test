import { type GetProductDTO, type GetProducts } from '../../../domain/useCases/GetProducts';
import { type GetProductsRepository } from '../../protocols';

export class GetProductsFromDB implements GetProducts {
  constructor(private readonly repository: GetProductsRepository) {
  }

  async execute(category: string, engine: 'MLB' | 'BUSCAPE'): Promise<GetProductDTO[]> {
    console.log(category);
    return await this.repository.getAll(category, engine);
  }
}
