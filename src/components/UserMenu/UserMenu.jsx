import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/authorization/auth-operations';
import { selectUserName } from 'redux/authorization/auth-selectors';
import { Button, LogoutIcon, UserBox } from './UserMenu.styled';

export function UserMenu() {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  function onLogout() {
    dispatch(logout());
  }

  return (
    <UserBox>
      {userName && (
        <p>
          You signed in as <b>{userName}</b>
        </p>
      )}
      <Button type="button" onClick={onLogout}>
        Logout <LogoutIcon />
      </Button>
    </UserBox>
  );
}
