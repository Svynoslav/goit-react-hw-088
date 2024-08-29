import css from "./SearchBox.module.css";

import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";

export default function SearchBox() {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectNameFilter);
  const onFilter = (e) => dispatch(changeFilter(e.target.value));

  return (
    <div className={css.container}>
      <label htmlFor="">Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        value={searchValue}
        onChange={onFilter}
      />
    </div>
  );
}
