import styled from 'styled-components';

const ProductCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 2rem;
  width: 100%;
  max-width: 550px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ImageContainer = styled.div`
  flex-basis: 40%;
  flex-shrink: 0;
  margin-right: 20px;
  height: 100%;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

const ProductInfoContainer = styled.div`
  flex-basis: 70%;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const ProductName = styled.h2`
  padding-top: 1rem;
  font-size: 24px;
  margin: 0 0 10px;
`;

const ProductDescription = styled.p`
  font-size: 16px;
  margin: 0 0 10px;
`;

const ProductPrice = styled.p`
  font-size: 18px;
  margin: 0;
`;

export {
  ImageContainer,
  ProductCardContainer,
  ProductDescription,
  ProductImage,
  ProductInfoContainer,
  ProductName,
  ProductPrice,
};
