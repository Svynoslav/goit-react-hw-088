import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";
import { useEffect } from "react";

import { selectLoading, selectError } from "../redux/contacts/selectors";
import { fetchContacts } from "../redux/contacts/operations";
import { useDispatch, useSelector } from "react-redux";

export default function ContactsPage() {
  const load = useSelector(selectLoading);
  const err = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {load && <h2>Loading...</h2>}
      {err && <h2>Error</h2>}
      <ContactList />
    </div>
  );
}
