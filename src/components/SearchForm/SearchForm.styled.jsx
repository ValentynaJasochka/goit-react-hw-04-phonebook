import styled from 'styled-components';

export const SearchButton = styled('button')`
  font-size: 14px;
  font-weight: 500;
  color: black;
  background-color: lightgrey;
  border-radius: 4px;
  border: none;
  padding: 8px 16px;
  cursor: pointer;

  &:hover,
  focus {
    color: white;
    background-color: navy;
  }
`;
export const Form = styled('form')`
  display: flex;
  gap: 20px;
`;
export const Input = styled('input')`
  width: 400px;
  font-size: 14px;
  padding: 10px;
  border: 1.5px solid lightgrey;
  border-radius: 4px;
`;
