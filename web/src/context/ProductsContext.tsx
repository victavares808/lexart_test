import { createContext, ReactNode, useEffect, useState } from 'react';

import { getProducts } from '../services/getProducts';

export type Product = {
  name: string;
  price: number;
  link: string;
  image: string;
};

type ProductsContextData = {
  products: Product[];
  fetchProducts(
    category: string,
    engine: 'all' | 'mercado-livre' | 'buscape',
    product: string,
  ): Promise<void>;
  isLoading: boolean;
  requestError: string;
};
export const ProductsContext = createContext({} as ProductsContextData);

type PostsProviderProps = {
  children: ReactNode;
};

export function ProductsProvider({ children }: PostsProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [requestError, setRequestError] = useState('');

  const fetchProducts = async (
    category: string,
    engine: 'all' | 'mercado-livre' | 'buscape',
    product: string,
  ): Promise<void> => {
    try {
      setIsLoading(true);
      const products = await getProducts({ category, engine, product });
      setProducts(products);
    } catch (error: any) {
      setRequestError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      await fetchProducts('geladeira', 'mercado-livre', '');
    };
    fetch();
  }, []);

  return (
    <ProductsContext.Provider
      value={{ products, fetchProducts, isLoading, requestError }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
