import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  /* height: 300px; */
  grid-gap: 16px;
`;

export const ListItem = styled.li`
  list-style: none;
`;
export const LinkString = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1.5px solid navy;
  border-radius: 5px;
  overflow: hidden;
  text-decoration: none;

  &:hover,
  :focus {
    background-color: navy;
    color: white;
  }
`;
export const FilmTitle = styled.p`
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 20px;
  padding: 5px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  cursor: pointer;
`;
