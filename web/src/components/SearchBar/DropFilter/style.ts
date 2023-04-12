import styled from 'styled-components';

const Select = styled.select`
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 16px;

  // To make the first option not appear in the drop-down menu
  option:first-of-type {
    display: none;
  }
`;

export { Select };
