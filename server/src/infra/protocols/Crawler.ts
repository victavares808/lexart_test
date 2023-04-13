export interface Crawler {
  getProducts: (product: string) => Promise<void>
}
