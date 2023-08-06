import { AddContactForm } from "../components/AddContactForm/AddContactForm";
import { ContactsList } from "../components/ContactsList/ContactsList";
import { Filter } from "../components/Filter/Filter";
import { Section } from "../components/Section/Section";
import { SectionContacts } from "../components/Section/Section.styled";
import { ContactsWrap } from "./Contacts.styled";

export function ContactsPage() {
  return (
    <ContactsWrap>
      <Section title={"Add new contact"}>
        <AddContactForm />
      </Section>
      <Section title={"Contacts:"}>
        <SectionContacts>
          <Filter />
          <ContactsList />
        </SectionContacts>
      </Section>
    </ContactsWrap>
  );
}
