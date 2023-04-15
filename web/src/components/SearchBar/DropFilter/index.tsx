import React from 'react';

import { Select } from './style';

type DropFilterProps = {
  id: string;
  options: string[];
  onChange: (value: string) => void;
  value: string;
};

export function DropFilter({ id, options, onChange, value }: DropFilterProps) {
  return (
    <Select
      id={`${id}-select`}
      onChange={({ target }) => onChange(target.value)}
      value={value}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option.toUpperCase()}
        </option>
      ))}
    </Select>
  );
}
