import PropTypes from "prop-types";
import { 
  Item,
  List,
  Click
} from "./styles.jsx";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contactsSlice.js";

const ContactItem = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(id));
  return (
    <li>
    <Item>
      <List>{name}:</List>
      <List>{number}</List>
      <Click onClick={onDelete}>delete</Click>
    </Item>
    </li>
    
  )
}

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
  })
}

export default ContactItem;