import { RootState } from "./../store";

export const selectUserName = (state: RootState) => state.auth.user.name;
export const selectUserStatus = (state: RootState) => state.auth.isLoggedIn;
export const selectRefreshStatus = (state: RootState) =>
  state.auth.isRefreshingUser;
