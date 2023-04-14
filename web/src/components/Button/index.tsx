import { ButtonHTMLAttributes } from 'react';

import { StyledButton } from './style';

type ButtonProps = {
  value: string;
} & ButtonHTMLAttributes<any>;

export function Button({ value, ...rest }: ButtonProps) {
  return <StyledButton {...rest}>{value}</StyledButton>;
}
