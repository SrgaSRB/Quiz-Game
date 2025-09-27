import { api } from "../api/axios";
import { CreateQuizRequest, QuizDashboardDto } from "../models";
import { ApiResult } from "../models/common";

export const quizService = {
  async createQuiz(quizData: CreateQuizRequest): Promise<ApiResult<void>> {
    const { data } = await api.post<ApiResult<void>>("/quiz", quizData);
    return data;
  },

  async getDashboardQuizzes(): Promise<ApiResult<QuizDashboardDto[]>> {
    const { data } = await api.get<ApiResult<QuizDashboardDto[]>>("/quiz/dashboard");
    return data;
  }
  
};