import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IContact } from "../../types/types";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const getContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (e) {
      if (e instanceof Error) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contactData: IContact, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", contactData);
      return response.data;
    } catch (err) {
      if (err instanceof Error) {
        return thunkAPI.rejectWithValue(err.message);
      }
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      if (e instanceof Error) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  }
);
