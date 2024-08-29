import { Link } from "react-router-dom";

export default function AuthNav() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/register">Sign Up</Link>
        </li>
        <li>
          <Link to="/login">Log In</Link>
        </li>
      </ul>
    </div>
  );
}
