import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "redux/store";

interface IUser {
  name: string;
  email: string;
}

interface IReg extends IUser {
  password: string;
}
interface ILogin {
  email: string;
  password: string;
}

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

// body: { name, email, pass}
export const registry = createAsyncThunk(
  "auth/registry",
  async (userData: IReg, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/signup", userData);
      token.set(data.token);
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// body: { email, pass}
export const login = createAsyncThunk(
  "auth/login",
  async (userData: ILogin, thunkAPI) => {
    try {
      const { data } = await axios.post("/users/login", userData);
      token.set(data.token);
      return data;
    } catch (error) {
      if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

// headers: Authorization: token
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
});

export const refreshCurrentUser = createAsyncThunk<
  IUser,
  void,
  { state: RootState }
>("auth/refresh", async (_, thunkAPI) => {
  try {
    const savedToken = thunkAPI.getState().auth.token;
    if (!savedToken)
      return thunkAPI.rejectWithValue("no token saved in localstorage");

    token.set(savedToken);
    const { data } = await axios.get("/users/current");
    return data;
  } catch (error) {
    if (error instanceof Error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
});
