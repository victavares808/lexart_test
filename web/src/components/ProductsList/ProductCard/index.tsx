import { Product } from '../../../context/ProductsContext';
import { Button } from '../../Button';
import {
  ImageContainer,
  ProductCardContainer,
  ProductImage,
  ProductInfoContainer,
  ProductName,
  ProductPrice,
} from './style';

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const { name, image, price, link } = product;

  return (
    <ProductCardContainer>
      <ImageContainer>
        <ProductImage src={image} alt={name} />
      </ImageContainer>
      <ProductInfoContainer>
        <ProductName>{name}</ProductName>
        <ProductPrice>${price}</ProductPrice>

        <Button
          value="Go to web"
          onClick={() => {
            window.open(link, '_blank');
          }}
        />
      </ProductInfoContainer>
    </ProductCardContainer>
  );
}
