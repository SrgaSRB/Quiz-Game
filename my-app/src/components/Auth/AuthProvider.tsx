// components/Auth/AuthProvider.tsx
import { createContext, useContext, useEffect, useState } from "react";

type Role = "admin" | "user" | null;
export interface User {
  username: string;
  email: string;
  role: Exclude<Role, null>;
  token: string;
}

type AuthCtx = {
  user: User | null;
  loading: boolean;
  loginAs: (u: User) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthCtx>({
  user: null,
  loading: true,
  loginAs: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

function decryptUser(ciphertext: string): User | null {
  try {
    const json = atob(ciphertext); 
    const obj = JSON.parse(json);
    if (obj && obj.role && obj.token) return obj as User;
  } catch {}
  return null;
}

function encryptUser(u: User): string {
  return btoa(JSON.stringify(u));
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const blob = localStorage.getItem("user");
    if (blob) {
      const u = decryptUser(blob);
      setUser(u);
    }
    setLoading(false);
  }, []);

  function loginAs(u: User) {
    const enc = encryptUser(u);
    localStorage.setItem("user", enc);
    setUser(u);
  }

  function logout() {
    localStorage.removeItem("user");
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, loading, loginAs, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
