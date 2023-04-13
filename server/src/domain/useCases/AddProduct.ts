export interface CreateProductDTO {
  name: string
  price: number
  image: string
  description?: string
  category: string
  link: string
}

export interface AddProduct {
  execute: (product: CreateProductDTO) => Promise<boolean>
}
