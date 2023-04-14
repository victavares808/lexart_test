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
};
export const ProductsContext = createContext({} as ProductsContextData);

type PostsProviderProps = {
  children: ReactNode;
};

export function ProductsProvider({ children }: PostsProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async (
    category: string,
    engine: 'all' | 'mercado-livre' | 'buscape',
    product: string,
  ): Promise<void> => {
    const products = await getProducts({ category, engine, product });
    console.log(products);
    setProducts(products);
  };

  useEffect(() => {
    const fetch = async () => {
      await fetchProducts('geladeira', 'mercado-livre', '');
    };
    fetch();
  }, []);

  return (
    <ProductsContext.Provider value={{ products, fetchProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}
