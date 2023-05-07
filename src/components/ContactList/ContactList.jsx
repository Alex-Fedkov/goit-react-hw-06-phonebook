import ContactItem from "components/ContactItem/ContactItem";
import { useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";
import { useMemo } from "react";

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = useMemo(() => {
    return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
  }, [contacts, filter]);

  return (
    <ul>
      {filteredContacts.map(contact => {
        return (
          <ContactItem contact={contact} key={contact.id} />
        )
      })}
    </ul>
  )
}

export default ContactList;