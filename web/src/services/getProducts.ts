import { api } from './api';

type HttpOptions = {
  category: string;
  engine: 'all' | 'mercado-livre' | 'buscape';
  product: string;
};

export async function getProducts({ category, engine, product }: HttpOptions) {
  const { data } = await api.get(`products/${engine}/${category}?query=${product}`);
  return data;
}
