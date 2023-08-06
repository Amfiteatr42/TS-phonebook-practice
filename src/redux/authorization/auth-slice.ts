import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshCurrentUser, registry } from "./auth-operations";
import type { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: { name: string | null; email: string | null };
  token: string | null;
  isLoggedIn: boolean;
  isRefreshingUser: boolean;
}

const initialState: AuthState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshingUser: false,
};

function handleLogin(state: AuthState, { payload }: PayloadAction<AuthState>) {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
}

function isRejectedAction(action: PayloadAction<string>) {
  return action.type.endsWith("rejected");
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registry.fulfilled, handleLogin)
      .addCase(login.fulfilled, handleLogin)
      .addCase(logout.fulfilled, (state) => (state = { ...initialState }))
      .addCase(refreshCurrentUser.pending, (state) => {
        state.isRefreshingUser = true;
      })
      .addCase(refreshCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshingUser = false;
      })
      .addMatcher(isRejectedAction, (state, action) => {
        console.log("reject:", action.payload);
        state.isRefreshingUser = false;
      });
  },
});

export const authReducer = authSlice.reducer;
