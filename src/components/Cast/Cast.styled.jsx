import styled from 'styled-components';
export const CastList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 25px;
  row-gap: 20px;
  padding: 8px 0;
  margin-bottom: 16px;
`;
export const CastItem = styled.li`
  flex-basis: calc((960px - 25px * 3) / 4);
`;

export const Text = styled.p`
  // width: calc((960 px - 25px * 3) / 4);
  // overflow: hidden;
  // text-overflow: ellipsis;
  // display: -webkit-box;
  // -webkit-line-clamp: 1;
  // -webkit-box-orient: vertical;
  // cursor: pointer;
`;
