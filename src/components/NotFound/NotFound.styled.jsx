import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotFoundContainer = styled.div`
  text-align: center;
`;

export const BackLink = styled(Link)`
  display: inline-block;
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  background-color: lightgrey;
  margin-bottom: 20px;
  &:hover,
  :focus {
    background-color: navy;
    color: white;
  }
`;
export const Title = styled.h2`
  color: navy;
`;
