import React from 'react';

import { Button } from '../Button';
import { DropFilter } from './DropFilter';
import { SearchBarContainer, SearchInput } from './style';

export function SearchBar() {
  return (
    <SearchBarContainer>
      <DropFilter
        id="engine"
        category="Web"
        options={['All', 'Mercado Livre', 'Buscapé']}
      />
      <DropFilter
        id="category"
        category="Categorias"
        options={['Geladeira', 'TV', 'Celular']}
      />
      <SearchInput type="text" placeholder="Search..." />
      <Button value="Search" />
    </SearchBarContainer>
  );
}
