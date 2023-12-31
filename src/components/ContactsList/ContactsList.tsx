import { useEffect } from "react";
import { deleteContact, getContacts } from "../../redux/contacts/operations";
import { getContactsState } from "../../redux/contacts/selectors";
import { Btn, CloseIcon, ContactItem, LoadIcon } from "./ContactsList.styled";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";

export function ContactsList() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  const {
    contacts: { items, isLoading, error },
    filter: filterValue,
  } = useAppSelector(getContactsState);
  const filteredContacts = items.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <>
      {error && <div style={{ color: "red", fontSize: "20px" }}>{error}</div>}
      <ul>
        {filteredContacts.map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              <p>
                {name}: {number}
              </p>
              <Btn
                type="button"
                disabled={isLoading}
                onClick={() => dispatch(deleteContact(id))}
              >
                {isLoading ? <LoadIcon /> : <CloseIcon />}
              </Btn>
            </ContactItem>
          );
        })}
      </ul>
    </>
  );
}
