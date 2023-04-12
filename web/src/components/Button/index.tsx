import { StyledButton } from './style';

type ButtonProps = {
  value: string;
};

export function Button({ value }: ButtonProps) {
  return <StyledButton>{value}</StyledButton>;
}
