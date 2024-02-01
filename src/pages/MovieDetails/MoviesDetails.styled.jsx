import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const MovieInformation = styled.div`
  display: flex;
  gap: 20px;
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
export const ListItem = styled.li`
  list-style: none;
`;
export const GenresList = styled.ul`
  display: flex;
  gap: 12px;
`;

export const InformationNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;

export const InformationLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.hover {
    color: white;
    background-color: navy;
  }
`;
