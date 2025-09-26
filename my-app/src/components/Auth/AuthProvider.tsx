import { createContext, useContext, useEffect, useState } from "react";

type Role = "admin" | "user";
export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  role: Role;
  token: string;
}

type AuthCtx = {
  user: User | null;
  loading: boolean;
  setToken: (jwt: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthCtx>({
  user: null,
  loading: true,
  setToken: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

type JwtPayload = {
  id: string;
  name: string;
  username: string;
  email: string;
  role: Role;
  exp: number; 
};

function base64UrlDecode(input: string) {
  // JWT koristi base64url varijantu
  const pad = (s: string) => s + "=".repeat((4 - (s.length % 4)) % 4);
  const b64 = pad(input.replace(/-/g, "+").replace(/_/g, "/"));
  return atob(b64);
}

function parseJwt(token: string): JwtPayload | null {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) return null;
    const payloadJson = base64UrlDecode(parts[1]);
    const payload = JSON.parse(payloadJson);

    // Map Microsoft role claim to our Role type
    let role: Role;
    if (payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]) {
      role = payload["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
    } else {
      role = payload.role;
    }

    return {
      id: payload.id,
      name: payload.name,
      username: payload.username,
      email: payload.email,
      role: role.toLowerCase(),
      exp: payload.exp,
    } as JwtPayload;
  } catch {
    return null;
  }
}

function isExpired(expSeconds?: number) {
  if (!expSeconds) return true;
  const now = Math.floor(Date.now() / 1000);
  return expSeconds <= now;
}

function userFromToken(token: string): User | null {
  const payload = parseJwt(token);
  if (!payload) return null;
  if (isExpired(payload.exp)) return null;

  return {
    id: payload.id,
    name: payload.name,
    username: payload.username,
    email: payload.email,
    role: payload.role,
    token,
  };
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      const u = userFromToken(token);
      
      if (u) {
        setUser(u);
      } else {
        localStorage.removeItem("authToken");
      }

    }
    setLoading(false);
  }, []);

  function setToken(jwt: string) {
    const u = userFromToken(jwt);
    if (u) {
      localStorage.setItem("authToken", jwt);
      setUser(u);
    } else {
      localStorage.removeItem("authToken");
      setUser(null);
    }
  }

  function logout() {
    localStorage.removeItem("authToken");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loading, setToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
