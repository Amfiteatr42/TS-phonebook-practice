import styled, { keyframes } from 'styled-components';
import { RiCloseFill, RiLoader4Line } from 'react-icons/ri';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Btn = styled.button`
  margin-top: 10px;
  width: 30px;
  padding: 0px;
  transition: all 210ms linear;
  background-color: #e6e6e6;
  cursor: pointer;
  border-radius: 2px;
  border: none;

  :hover svg {
    background-color: #414545;
  }

  & svg {
    display: block;
    width: 30px;
    height: 30px;
  }
`;
export const ContactItem = styled.li`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
`;

export const CloseIcon = styled(RiCloseFill)`
  color: #ee0404;
  border-radius: 2px;
`;
export const LoadIcon = styled(RiLoader4Line)`
  color: #fcfcfc;
  border-radius: 50%;
  animation: ${rotate} 2s linear infinite;
  background-color: #414545;
`;
