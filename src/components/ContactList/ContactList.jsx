import css from "./ContactList.module.css";
import Contact from "./Contact/Contact";

import { useSelector } from "react-redux";
import { filteredContacts } from "../../redux/contacts/selectors";

export default function ContactList() {
  const contacts = useSelector(filteredContacts);
  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <li className={css.listItem} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
