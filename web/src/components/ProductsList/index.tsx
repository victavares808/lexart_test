import { useProducts } from '../../context/useProducts';
import { LoadingSpinner } from '../LoadingSpinner';
import { ProductCard } from './ProductCard';
import { ErrorContainer, ProductsListContainer } from './style';

export function ProductsList() {
  const { products, isLoading, requestError } = useProducts();

  if (requestError) {
    return (
      <ErrorContainer>
        <p>Houve um erro ao buscar os dados.Tente novamente mais tarde!</p>
      </ErrorContainer>
    );
  }

  if (isLoading || !products.length) {
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
