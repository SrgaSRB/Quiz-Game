import { api } from "../api/axios";
import { ApiResult } from "../models/common";

export const categoryService = {
    async getAllCategories(): Promise<ApiResult<any>> {
        const { data } = await api.get<ApiResult<any>>("/category");
        return data;
    }
};