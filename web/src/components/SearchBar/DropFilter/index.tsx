import React from 'react';

import { Select } from './style';

type DropFilterProps = {
  id: string;
  category: string;
  options: string[];
  onChange: (value: string) => void;
};

export function DropFilter({ id, category, options, onChange }: DropFilterProps) {
  return (
    <Select id={`${id}-select`} onChange={({ target }) => onChange(target.value)}>
      <option value="">{category}</option>

      {options.map((option) => (
        <option key={option} value={option}>
          {option.toUpperCase()}
        </option>
      ))}
    </Select>
  );
}
