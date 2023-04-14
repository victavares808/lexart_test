import { prisma } from '../prisma';
import { type CreateProductDTO } from '../../../domain/useCases/AddProducts';
import {
  type AddProductRepository,
  type GetProductDTO,
  type GetProductsRepository
} from '../../../data/protocols';

export class PrismaProductsRepository implements AddProductRepository, GetProductsRepository {
  async addMany(products: CreateProductDTO[]): Promise<void> {
    await prisma.product.createMany(
      {
        data: products
      }
    )
  }

  async getAll(category: string, engine: 'ALL' | 'MLB' | 'BUSCAPE', query?: string): Promise<GetProductDTO[]> {
    if (engine === 'ALL') {
      return prisma.product.findMany(
        {
          select: {
            name: true,
            price: true,
            link: true,
            image: true
          },
          where: {
            category,
            name: {
              contains: query?.toLowerCase()
            }
          }
        }
      );
    }

    return prisma.product.findMany(
      {
        select: {
          name: true,
          price: true,
          link: true,
          image: true
        },
        where: {
          engine,
          category,
          name: {
            contains: query?.toLowerCase()
          }
        }
      }
    );
  }
}
