import React from 'react';

import { Select } from './style';

type DropFilterProps = {
  id: string;
  category: string;
  options: string[];
};

export function DropFilter({ id, category, options }: DropFilterProps) {
  return (
    <Select id={`${id}-select`}>
      <option value="">{category}</option>

      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
}
