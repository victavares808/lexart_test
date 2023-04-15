import styled from 'styled-components';

const ProductsListContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 1rem 0;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0 auto;
`;

const ErrorContainer = styled.div`
  background-color: #f3f3f3;
  color: #d8000c;
  padding: 1rem;
  border-radius: 4px;
  margin: 0 auto;
  max-width: 600px;
  text-align: center;
  font-size: 1.5rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export { ErrorContainer, ProductsListContainer };
