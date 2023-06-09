import styled from 'styled-components';


export const Form = styled.form`
  display: flex;
  justify-content: center;
  padding: 15px 20px;
`;

export const Input = styled.input`
  width: 480px;
  height: 35px;
  margin-right: 5px;

  display: inline-block;
  font: inherit;
  border: 1px solid #121110;
  outline: none;
  padding: 8px 16px;
  border-radius: 4px;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #121110;
  background-color: inherit;
  font-weight: 500;
  line-height: 1.15;

  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover,
  :focus {
    background-color: #121110;
    color: #fff;
  }
`;
