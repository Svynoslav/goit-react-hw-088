import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../redux/auth/selectors";
import RegisterForm from "../components/RegisterForm/RegisterForm";

export default function RegisterPage() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <RegisterForm />
    </>
  );
}
