import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Item = styled.li`
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.025);
  }
`;

export const MovieLink = styled(Link)`
  font-weight: 600;
  font-size: 15px;
  line-height: 1.2;
  color: #000000;
  text-decoration: none;
`;

export const Img = styled.img`
  width: 100%;
  height: 480px;
  object-fit: cover;

`;

export const Title = styled.p`
  padding: 5px 10px;
  margin: 0;
`;