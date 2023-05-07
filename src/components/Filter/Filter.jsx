import { 
  FindContact,
  Input
} from "./styles.jsx";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "redux/filterSlice.js";
import { getFilter } from "redux/selectors.js";

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const onChangeFilter = event => dispatch(changeFilter(event.target.value))
  return (
    <div>
      <FindContact>Find contacts by name</FindContact>
      <Input name="filter" value={filter} onChange={onChangeFilter} />
    </div>
  );
}

export default Filter;
