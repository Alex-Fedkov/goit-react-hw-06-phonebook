import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "redux/contactsSlice";
import { getContacts } from "redux/selectors";
import { 
  Form, 
  AddButton,
  Label,
  Input
} from "./styles.jsx"

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const contacts = useSelector(getContacts);

  const dispatch = useDispatch();

  const onChangeName = useCallback((event) => {
    setName(event.target.value);
  }, []);

  const onChangeNumber = useCallback((event) => {
    setNumber(event.target.value);
  }, []);

  const onSubmit = useCallback(event => {
    event.preventDefault();

    const isContact = contacts.some(({ name: contactName }) => contactName.toLowerCase() === name.toLowerCase());

    if (isContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }))
    setName("");
    setNumber("");
  }, [name, number, contacts, dispatch]);

  return (
    <div>
    <Form type="submit" onSubmit={onSubmit}>
      <Label>Name</Label>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={onChangeName}
      />
      <Label>Number</Label>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={onChangeNumber}
      />
      <AddButton type="submit">Add Contact</AddButton>
    </Form>
    </div>
  );
}

export default ContactForm;
