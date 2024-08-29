import { ErrorMessage, Field, Form, Formik } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (data, actions) => {
    dispatch(addContact({ ...data, id: nanoid() }));
    actions.resetForm();
  };

  const nameId = useId();
  const numberId = useId();

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("This field is required"),
    number: Yup.string()
      .matches(/^[0-9-]+$/, "Invalid number format")
      .min(3, "Too short")
      .max(50, "Too long")
      .required("This field is required"),
  });

  return (
    <Formik
      validationSchema={contactSchema}
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.formItem}>
          <label htmlFor={nameId}>Name</label>
          <Field className={css.field} type="text" name="name" id={nameId} />
          <ErrorMessage className={css.error} name="name" component="p" />
        </div>
        <div className={css.formItem}>
          <label htmlFor={numberId}>Number</label>
          <Field
            className={`${css.field} ${css.number}`}
            type="text"
            name="number"
            id={numberId}
          />
          <ErrorMessage className={css.error} name="number" component="p" />
        </div>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
