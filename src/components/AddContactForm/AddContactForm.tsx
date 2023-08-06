import { useState } from "react";
import { addContact } from "../../redux/contacts/operations";
import { getContactItems } from "../../redux/contacts/selectors";
import { Form, Label, Input, Btn } from "./AddContactForm.styled";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";

export function AddContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const contactItems = useAppSelector(getContactItems);
  const dispatch = useAppDispatch();

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        break;
    }
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const isInContacts = contactItems.find((contact) => contact.name === name);
    if (isInContacts) {
      alert(
        "What are you doing, man? You already have this dude in your Phonebook!"
      );
      return;
    }
    dispatch(addContact({ name, number }));
    reset();
  }

  function reset() {
    setName("");
    setNumber("");
  }

  return (
    <Form onSubmit={onSubmit}>
      <Label>
        Name
        <Input
          onChange={onChange}
          type="text"
          name="name"
          value={name}
          placeholder="Alex Nichtverstehen"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>

      <Label>
        Number
        <Input
          onChange={onChange}
          type="tel"
          name="number"
          value={number}
          placeholder="+380..."
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Btn type="submit">Add Contact</Btn>
    </Form>
  );
}
