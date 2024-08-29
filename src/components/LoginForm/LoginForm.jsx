import { Field, Form, Formik } from "formik";
import { login } from "../../redux/auth/operations";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export default function LoginForm() {
  const dispatch = useDispatch();

  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values, action) => {
    dispatch(login(values));
    action.resetForm();
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        email: "",
        password: "",
      }}
    >
      <Form>
        <label htmlFor={emailId}>Email</label>
        <Field type="text" name="email" id={emailId} />
        <label htmlFor={passwordId}>Password</label>
        <Field type="password" name="password" id={passwordId} />
        <button type="submit">Log In</button>
        <p>
          Don`t have an account? <Link to="/register">Sign Up</Link>
        </p>
      </Form>
    </Formik>
  );
}
