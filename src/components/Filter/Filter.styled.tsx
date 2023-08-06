import styled from "styled-components";
import { Input } from "../../components/AddContactForm/AddContactForm.styled";

export const Label = styled.label`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FilterInput = styled(Input)`
  margin-left: 15px;
  width: 60%;
`;
export const Wrap = styled.div`
  width: 415px;
  margin-bottom: 40px;
`;
