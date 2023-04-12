import styled from 'styled-components';

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
`;

const SearchInput = styled.input`
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  margin-right: 10px;
  width: 300px;
  font-size: 16px;
`;

export { SearchBarContainer, SearchInput };
