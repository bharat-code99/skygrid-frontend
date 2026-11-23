import { Route, Routes } from "react-router";
import Dashboard from "./pages/Dashboard";
import LoginLayout from "./pages/LoginLayout";
import LoginForm from "./components/login/LoginForm";
import SignUpForm from "./components/login/SignupForm";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route element={<LoginLayout />}>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
      </Route>
    </Routes>
  );
}
