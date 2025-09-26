import { api } from "../api/axios";
import { ApiResult } from "../models/common";

export const authService = {
  async login(UsernameOrEmail: string, password: string): Promise<ApiResult<string>> {
    const { data } = await api.post<ApiResult<string>>("/auth/login", { UsernameOrEmail, password });
    return data;
  },

  async register(name: string, username: string, email: string, password: string, repeatPassword: string): Promise<ApiResult<void>> {
    const { data } = await api.post<ApiResult<void>>("/auth/register", { name, username, email, password, repeatPassword });
    return data;
  },
};
