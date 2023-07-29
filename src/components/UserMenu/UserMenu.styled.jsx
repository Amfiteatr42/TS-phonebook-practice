import styled from 'styled-components';
import { RiLogoutBoxRLine } from 'react-icons/ri';

export const UserBox = styled.div`
  display: flex;
  align-items: center;
`;
export const Button = styled.button`
  margin-left: 10px;
  padding: 8px;
  color: inherit;
  transition: all 210ms linear;
  background-color: inherit;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: #414545;
    color: #fff;
  }
`;
export const LogoutIcon = styled(RiLogoutBoxRLine)`
  display: inline;
  margin-left: 4px;
`;
