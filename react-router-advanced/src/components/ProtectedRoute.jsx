import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";

function useAuth() {
  const [isAuthenticated] = useState(false); 
  return { isAuthenticated };
}

export default function ProtectedRoute() {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}