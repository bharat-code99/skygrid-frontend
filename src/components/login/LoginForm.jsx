import { Link } from "react-router";

export default function LoginForm() {
  return (
    <div className="space-x-2">
      Login Form
      <Link to="/signup">Signup</Link>
    </div>
  );
}
