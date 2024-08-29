import { useDispatch, useSelector } from "react-redux";
import { selectEmail } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(selectEmail);

  return (
    <>
      <div>{email}</div>
      <button onClick={() => dispatch(logOut())}>Log Out</button>
    </>
  );
}
