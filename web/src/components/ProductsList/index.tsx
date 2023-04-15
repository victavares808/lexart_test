import { useProducts } from '../../context/useProducts';
import { LoadingSpinner } from '../LoadingSpinner';
import { ProductCard } from './ProductCard';
import { ProductsListContainer } from './style';

export function ProductsList() {
  const { products } = useProducts();

  if (!products.length) {
    return <LoadingSpinner />;
  }

  return (
    <ProductsListContainer>
      {products.map((product, i) => (
        <ProductCard key={`${product.name}-${i}`} product={product} />
      ))}
    </ProductsListContainer>
  );
}
