import { api } from './api';

type HttpOptions = {
  category: string;
  engine: 'all' | 'mercado-livre' | 'buscape';
  product: string;
};

export async function getProducts({ category, engine }: HttpOptions) {
  const { data } = await api.get(`products/${engine}/${category}`);
  return data;
}
