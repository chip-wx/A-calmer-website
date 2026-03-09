import { Navigate, Outlet } from "react-router-dom";

export const GuestGuard = () => {
  const token = localStorage.getItem("loged");

  return token
    ? <Navigate to="/private/userprofile" replace />
    : <Outlet />;
};