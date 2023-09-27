import { styled } from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormInput = styled(Form)`
  width: 1000px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
`;

export const ImputField = styled(Field)`
  width: 1000px;
  height: 50px;
  padding: 8px;
  font-size: 24px;
  border-radius: 4px;
  border: 3px solid #111111;
  margin-bottom: 20px;
`;

export const TitleInput = styled.label`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 20px;
`;
export const AddButton = styled.button`
  width: 250px;
  padding: 10px;
  background-color: #e0e0e0;
  border-radius: 3px;
  transition: background-color 250ms linear, transform 250ms ease-in-out;
  font-size: 20px;
  font-weight: bold;
  &:hover {
    background-color: #99ff99;
    transform: scale(1.2);
  }
`;
export const Message = styled(ErrorMessage)`
  font-size: 24px;
  color: red;
  font-weight: 400;
`;
