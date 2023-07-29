import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const WelcomeWrap = styled.div`
  max-width: 500px;
  margin: 0 auto;
  margin-top: 40px;
  padding: 100px 100px;
  text-align: center;
  box-shadow: inset 0px -0.8px 0.8px hsl(0deg 0% 0% / 0.28),
    inset 0px -2.4px 2.3px 1.2px hsl(0deg 0% 0% / 0.15),
    inset 0px -6.9px 6.7px 1.3px hsl(0deg 0% 0% / 0.13),
    inset 0.1px -18.4px 17.9px -3.5px hsl(0deg 0% 0% / 0.1); ;
`;
export const Title = styled.h2`
  margin-bottom: 30px;
  font-size: 34px;
`;
export const Text = styled.p`
  font-size: 20px;
  margin-bottom: 30px;
`;
export const WelcomeLink = styled(NavLink)`
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  color: inherit;
  margin-right: 20px;
  font-size: 24px;
  border: 1px solid #414545;
  transition: all 210ms linear;

  :hover {
    background-color: #414545;
    color: #fff;
  }
`;
