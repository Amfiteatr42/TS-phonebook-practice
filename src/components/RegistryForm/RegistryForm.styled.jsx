import { ErrorMessage, Field } from 'formik';
import styled from 'styled-components';

export const FormWrap = styled.div`
  margin: 0 auto;
  margin-top: 10vh;
  padding: 40px;
  max-width: 300px;
  box-shadow: 0px 0.8px 0.8px hsl(0deg 0% 0% / 0.28),
    0px 2.4px 2.3px 1.2px hsl(0deg 0% 0% / 0.15),
    0px 6.9px 6.7px 1.3px hsl(0deg 0% 0% / 0.13),
    0.1px 18.4px 17.9px -3.5px hsl(0deg 0% 0% / 0.1); ;
`;
export const Button = styled.button`
  display: block;
  margin-top: 20px;
  width: 100%;
  padding: 9px;
  color: inherit;
  transition: all 210ms linear;
  background-color: #e6e6e6;
  cursor: pointer;
  border-radius: 2px;
  border: none;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-left: 1px solid black;
  border-bottom: 1px solid black;

  :hover {
    background-color: #414545;
    color: #fff;
  }
`;
export const StyledField = styled(Field)`
  padding: 10px;
  width: 93%;
  border-radius: 2px;
  border: none;
  box-shadow: inset 1px -1px 1px 1px rgba(0, 0, 0, 0.908);

  :focus {
    outline: none;
    background-color: #e6e6e6;
  }
`;
export const Label = styled.label`
  display: block;
  margin: 5px 4px;
  margin-top: 15px;
  color: ${props => (props.error ? 'red' : 'inherit')};
`;
export const ErrorMsg = styled(ErrorMessage)`
  color: red;
  font-size: 12px;
  margin-left: 4px;
`;
