import { styled } from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
`;
export const ListItem = styled.li`
  width: 350px;

  padding: 8px;
  border-radius: 5px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  background-color: #f6f6f6;
`;
export const Text = styled.p`
  width: 300px;
  font-size: 24px;
  font-weight: 400;
  font-style: italic;
`;

export const ButtonDelete = styled.button`
  padding: 8px;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  font-style: italic;
  background-color: aqua;
  border-radius: 5px;
  color: #111111;
  &:hover {
    background: red;
    color: #ffffff;
  }
`;
