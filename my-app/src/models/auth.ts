export type Role = "user" | "admin";

export interface User {
  id: string;
  username: string;
  email: string;
  role: Role;
  token: string;
}
