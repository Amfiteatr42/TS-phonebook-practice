import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  padding: 12px;
  background-color: #c8c8c8;
  box-shadow: 0px 0.8px 0.8px hsl(0deg 0% 0% / 0.18),
    0px 2.4px 2.3px -1.2px hsl(0deg 0% 0% / 0.15),
    0px 6.9px 6.7px -2.3px hsl(0deg 0% 0% / 0.13),
    0.1px 18.4px 17.9px -3.5px hsl(0deg 0% 0% / 0.1); ;
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;
export const StyledLink = styled(NavLink)`
  display: inline-block;
  padding: 10px;
  text-decoration: none;
  color: inherit;
  transition: all 210ms linear;

  :hover {
    background-color: #414545;
    color: #fff;
  }
`;
