import React from 'react';

import { ProductsList } from '../../components/ProductsList';
import { SearchBar } from '../../components/SearchBar';
import { ProductsProvider } from '../../context/ProductsContext';
import { HomeContainer } from './style';

export function Home() {
  return (
    <HomeContainer>
      <ProductsProvider>
        <SearchBar />
        <ProductsList />
      </ProductsProvider>
    </HomeContainer>
  );
}
