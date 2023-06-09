import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 30px);
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 32px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 20px 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
