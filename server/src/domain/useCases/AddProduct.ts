export interface CreateProductDTO {
  name: string
  price: number
  image: string
  description?: string
  category: string
  link: string
}

export interface AddProduct {
  add: (product: CreateProductDTO) => Promise<boolean>
}
