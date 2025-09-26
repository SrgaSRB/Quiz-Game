import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { JSX } from "react";


export function RequireRole({ only, children }: { only: "admin" | "user"; children: JSX.Element }) {
  const { user } = useAuth();

  if (!user) 
    return <Navigate to="/login" replace />;

  if (only === "user" && (user.role === "user" || user.role === "admin")) 
    return children;

  if (only === "admin" && user.role === "admin") 
    return children;

  return <Navigate to="/" replace />;
}