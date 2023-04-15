import styled, { keyframes } from 'styled-components';

const SpinnerAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
  gap: 0.5rem;
`;

const Spinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  animation: ${SpinnerAnimation} 0.6s linear infinite;
`;

export { Spinner, SpinnerWrapper };
