import { setFilter } from "../../redux/contacts/contactsSlice";
import { Label, Wrap, FilterInput } from "./Filter.styled";
import { useAppDispatch } from "../../hooks/redux";

export function Filter() {
  const dispatch = useAppDispatch();

  return (
    <Wrap>
      <Label>
        <p>Filter by Name</p>
        <FilterInput
          type="text"
          name="filter"
          onChange={(e) => dispatch(setFilter(e.target.value))}
          placeholder="Start enter contact name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
    </Wrap>
  );
}
