import { Navigate } from "react-router-dom";
import { selectUserStatus } from "../redux/authorization/auth-selectors";
import { useAppSelector } from "../hooks/redux";

interface IProps {
  element: React.ReactNode;
  redirectPath?: string;
}

export function RestrictedRoute({
  element,
  redirectPath = "/contacts",
}: IProps) {
  const isLoggedIn = useAppSelector(selectUserStatus);

  return isLoggedIn ? <Navigate to={redirectPath} replace /> : element;
}
