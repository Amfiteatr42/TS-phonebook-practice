import { UserMenu } from "../UserMenu/UserMenu";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { selectUserStatus } from "../../redux/authorization/auth-selectors";
import { Header, Nav, StyledLink } from "./AppBar.styled";
import { useAppSelector } from "../../hooks/redux";

export function AppBar() {
  const isLoggedIn = useAppSelector(selectUserStatus);

  return (
    <>
      <Header>
        <Nav>
          <div>
            {isLoggedIn ? (
              <StyledLink to={"contacts"}>Your Contacts</StyledLink>
            ) : (
              <StyledLink to={"/"}>Welcome Page</StyledLink>
            )}
          </div>
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <div>
              <StyledLink to={"registry"}>Registry</StyledLink>
              <StyledLink to={"login"}>Sign In</StyledLink>
            </div>
          )}
        </Nav>
      </Header>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
