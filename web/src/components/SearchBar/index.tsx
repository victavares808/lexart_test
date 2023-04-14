import { useState } from 'react';

import { useProducts } from '../../context/useProducts';
import { Button } from '../Button';
import { DropFilter } from './DropFilter';
import { SearchBarContainer, SearchInput } from './style';

export function SearchBar() {
  const { fetchProducts } = useProducts();
  const [engine, setEngine] = useState<'all' | 'mercado-livre' | 'buscape'>('all');
  const [category, setCategory] = useState('geladeira');
  const [product, setProduct] = useState('');

  const handleSubmit = async () => {
    await fetchProducts(category, engine, product);
  };

  return (
    <SearchBarContainer>
      <DropFilter
        id="engine"
        category="WEB"
        options={['all', 'mercado-livre', 'buscape']}
        onChange={setEngine as any}
      />
      <DropFilter
        id="category"
        category="CATEGORIAS"
        options={['geladeira', 'tv', 'celular']}
        onChange={setCategory}
      />
      <SearchInput
        type="text"
        placeholder="Search..."
        value={product}
        onChange={({ target }) => setProduct(target.value)}
      />
      <Button value="Search" onClick={handleSubmit} />
    </SearchBarContainer>
  );
}
