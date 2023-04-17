import { type CreateProductDTO, type GetProductDTO } from '../../data/protocols';

export const productsResponseMock: GetProductDTO[] = [
  {
    name: 'Product 1',
    price: 10,
    image: 'any_image',
    link: 'any_link'
  },
  {
    name: 'Product 2',
    price: 20,
    image: 'any_image',
    link: 'any_link'
  }
]

export const productsToAddMock: CreateProductDTO[] = [
  {
    name: 'Product 1',
    price: 10,
    image: 'any_image',
    category: 'any_category',
    link: 'any_link',
    engine: 'BUSCAPE'
  },
  {
    name: 'Product 2',
    price: 20,
    image: 'any_image',
    category: 'any_category',
    link: 'any_link',
    engine: 'BUSCAPE'
  }
]
