import { api } from "../api/axios";
import { ApiResult } from "../models/common";
import { CreateQuizRequest } from "../models/quiz";

export const quizService = {
  async createQuiz(quizData: CreateQuizRequest): Promise<ApiResult<void>> {
    const { data } = await api.post<ApiResult<void>>("/quiz", quizData);
    return data;
  }
  
};