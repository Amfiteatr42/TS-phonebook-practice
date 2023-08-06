import { IContact } from "./../../types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getContacts, addContact, deleteContact } from "./operations";

interface IContactData extends IContact {
  id: string;
}

interface IState {
  contacts: {
    items: IContactData[];
    isLoading: boolean;
    error: string | null;
  };
  filter: string;
}

const initialState: IState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: "",
};

const handlePending = (state: IState) => {
  state.contacts.isLoading = true;
};

function isRejectedAction(action: PayloadAction<string>) {
  return action.type.endsWith("rejected");
}

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<string>) {
      return { ...state, filter: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.pending, handlePending)
      .addCase(
        getContacts.fulfilled,
        ({ contacts }, action: PayloadAction<IContactData[]>) => {
          contacts.items = action.payload;
          contacts.isLoading = false;
          contacts.error = null;
        }
      )
      .addCase(addContact.pending, handlePending)
      .addCase(
        addContact.fulfilled,
        ({ contacts }, action: PayloadAction<IContactData>) => {
          contacts.items.push(action.payload);
          contacts.isLoading = false;
          contacts.error = null;
        }
      )
      .addCase(deleteContact.pending, handlePending)
      .addCase(
        deleteContact.fulfilled,
        ({ contacts }, action: PayloadAction<{ id: string }>) => {
          const index = contacts.items.findIndex(
            (task) => task.id === action.payload.id
          );
          contacts.items.splice(index, 1);
          contacts.isLoading = false;
          contacts.error = null;
        }
      )
      .addMatcher(
        isRejectedAction,
        // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
        (state, action) => {
          console.log("reject:", action.payload);
          state.contacts.isLoading = false;
          state.contacts.error = action.payload;
        }
      );
    // and we can provide a default case if no other handlers matched
    // .addDefaultCase((state, action) => {});
  },
});

export const { setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
