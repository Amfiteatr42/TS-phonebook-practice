import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUserStatus } from "../redux/authorization/auth-selectors";

interface IProps {
  element: React.ReactNode;
  redirectPath?: string;
}

export function PrivateRoute({ element, redirectPath = "/" }: IProps) {
  const isLoggedIn = useSelector(selectUserStatus);

  return isLoggedIn ? element : <Navigate to={redirectPath} replace />;
}
