import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { JSX } from "react";

export function RequireAuth({ children }: { children: JSX.Element }) {
  const { user, loading } = useAuth();
  const loc = useLocation();

  if (loading) 
    return null;

  if (!user) 
    return <Navigate to="/login" state={{ from: loc }} replace />;

  return children;
}

