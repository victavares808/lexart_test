import { useProducts } from '../../context/useProducts';
import { ProductCard } from './ProductCard';
import { ProductsListContainer } from './style';

export function ProductsList() {
  const { products } = useProducts();
  console.log(products);

  return (
    <ProductsListContainer>
      {products.map((product, i) => (
        <ProductCard key={`${product.name}-${i}`} product={product} />
      ))}
    </ProductsListContainer>
  );
}
