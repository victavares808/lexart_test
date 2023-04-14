// noinspection UnnecessaryLocalVariableJS

import { useContext } from 'react';

import { ProductsContext } from './ProductsContext';

export function useProducts() {
  const context = useContext(ProductsContext);
  return context;
}
