import { prisma } from '../prisma';
import { type CreateProductDTO } from '../../../domain/useCases/AddProducts';
import {
  type AddProductRepository,
  type GetProductDTO,
  type GetProductsRepository
} from '../../../data/protocols';

export class BuscapeProductsRepository implements AddProductRepository, GetProductsRepository {
  async addMany (products: CreateProductDTO[]): Promise<void> {
    await prisma.product.createMany(
      {
        data: products
      }
    )
  }

  async getAll (category: string): Promise<GetProductDTO[]> {
    return prisma.product.findMany(
      {
        select: {
          name: true,
          price: true,
          link: true,
          image: true
        },
        where: {
          engine: 'BUSCAPE',
          category
        }
      }
    );
  }
}
