import { ProductCard } from './ProductCard';
import { ProductsListContainer } from './style';

export function ProductsList() {
  return (
    <ProductsListContainer>
      <ProductCard
        product={{
          name: '#Product 01',
          price: 'R$ 100,00',
          image: 'https:github.com/gusttavocdn.png',
          description: 'Lorem ipsum dolor sit amet',
        }}
      />
      <ProductCard
        product={{
          name: '#Product 01',
          price: 'R$ 100,00',
          image: 'https:github.com/gusttavocdn.png',
          description: 'Lorem ipsum dolor sit amet',
        }}
      />
      <ProductCard
        product={{
          name: '#Product 01',
          price: 'R$ 100,00',
          image: 'https:github.com/gusttavocdn.png',
          description: 'Lorem ipsum dolor sit amet',
        }}
      />
      <ProductCard
        product={{
          name: '#Product 01',
          price: 'R$ 100,00',
          image: 'https:github.com/gusttavocdn.png',
          description: 'Lorem ipsum dolor sit amet',
        }}
      />
      <ProductCard
        product={{
          name: '#Product 01',
          price: 'R$ 100,00',
          image: 'https:github.com/gusttavocdn.png',
          description: 'Lorem ipsum dolor sit amet',
        }}
      />
      <ProductCard
        product={{
          name: '#Product 01',
          price: 'R$ 100,00',
          image: 'https:github.com/gusttavocdn.png',
          description: 'Lorem ipsum dolor sit amet',
        }}
      />
    </ProductsListContainer>
  );
}
