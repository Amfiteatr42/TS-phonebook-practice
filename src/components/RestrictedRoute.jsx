import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectUserStatus } from 'redux/authorization/auth-selectors';

export function RestrictedRoute({ element, redirectPath = '/contacts' }) {
  const isLoggedIn = useSelector(selectUserStatus);

  return isLoggedIn ? <Navigate to={redirectPath} replace /> : element;
}
