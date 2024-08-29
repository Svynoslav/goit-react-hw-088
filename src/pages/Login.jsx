import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectIsLoggedIn } from "../redux/auth/selectors";
import LoginForm from "../components/LoginForm/LoginForm";

export default function LoginPage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <LoginForm />
    </>
  );
}
