import { Outlet } from "react-router";
import LoginLeftPanel from "../components/login/LoginLeftPanel";

export default function LoginLayout() {
  return (
    <div className="flex gap-20">
      <LoginLeftPanel />
      <Outlet />
    </div>
  );
}
