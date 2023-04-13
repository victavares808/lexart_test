export interface GetProductDTO {
  name: string
  price: number
  image: string
  link: string
}

export interface GetProducts {
  execute: () => Promise<GetProductDTO[]>
}
