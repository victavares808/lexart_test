export interface GetProductDTO {
  name: string
  price: number
  image: string
  description?: string
  link: string
}

export interface GetProducts {
  execute: () => Promise<GetProductDTO[]>
}
