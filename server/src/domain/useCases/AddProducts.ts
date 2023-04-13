type TEngine = 'MLB' | 'BUSCAPE'

export interface CreateProductDTO {
  name: string
  price: number
  image: string
  category: string
  link: string
  engine: TEngine
}

export interface AddProducts {
  execute: (products: CreateProductDTO[]) => Promise<void>
}
