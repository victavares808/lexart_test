import { Spinner, SpinnerWrapper } from './style';

export function LoadingSpinner() {
  return (
    <SpinnerWrapper>
      <Spinner />
      <p>Espere enquanto estamos bucando seus dados</p>
    </SpinnerWrapper>
  );
}
