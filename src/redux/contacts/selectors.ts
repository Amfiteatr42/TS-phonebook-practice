import { RootState } from "./../store";

export const getContactItems = (state: RootState) => {
  return state.contacts.contacts.items;
};
export const getContactsState = (state: RootState) => state.contacts;
