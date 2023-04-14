export interface Engine {
  getProducts: (product: string) => Promise<void>
}
