import { useProducts } from '../../context/useProducts';
import { ProductCard } from './ProductCard';
import { ProductsListContainer } from './style';

export function ProductsList() {
  const { products } = useProducts();

  return (
    <ProductsListContainer>
      {products.map((product) => (
        <ProductCard key={product.name} product={product} />
      ))}
    </ProductsListContainer>
  );
}
