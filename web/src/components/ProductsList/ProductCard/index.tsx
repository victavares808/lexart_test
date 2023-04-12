import { Button } from '../../Button';
import {
  ImageContainer,
  ProductCardContainer,
  ProductDescription,
  ProductImage,
  ProductInfoContainer,
  ProductName,
  ProductPrice,
} from './style';

type Product = {
  name: string;
  description: string;
  price: string;
  image: string;
};

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const { name, image, description, price } = product;

  return (
    <ProductCardContainer>
      <ImageContainer>
        <ProductImage src={image} alt={name} />
      </ImageContainer>
      <ProductInfoContainer>
        <ProductName>{name}</ProductName>
        <ProductDescription>{description}</ProductDescription>
        <ProductPrice>${price}</ProductPrice>
        <Button value="Go to web" />
      </ProductInfoContainer>
    </ProductCardContainer>
  );
}
