import { QuestionType, QuizDifficulty, QuestionDifficulty } from './domain';

// ============================================
// REQUEST TIPOVI (za slanje na server)
// ============================================

export interface CreateAnswerRequest {
    text: string;
    isCorrect: boolean;
}

export interface CreateQuestionRequest {
    text: string;
    type: QuestionType;
    points: number;
    difficulty?: QuestionDifficulty;
    answers: CreateAnswerRequest[];
}

export interface CreateQuizRequest {
    title: string;
    description: string;
    timeLimitMinutes: number;
    difficultyLevel: QuizDifficulty;
    categoryId: string; 
    questions: CreateQuestionRequest[];
    newCategoryName?: string; 
}

export interface CreateCategoryRequest {
    name: string;
    description?: string;
}

export interface UpdateQuizRequest extends CreateQuizRequest {
    id: string;
}

export interface UpdateQuestionRequest extends CreateQuestionRequest {
    id?: string; // Može biti novo pitanje bez ID-ja
}

export interface UpdateAnswerRequest extends CreateAnswerRequest {
    id?: string; // Može biti novi odgovor bez ID-ja
}

export interface UpdateCategoryRequest extends CreateCategoryRequest {
    id: string;
}

// ============================================
// LOGIN/AUTH REQUEST TIPOVI
// ============================================
export interface LoginRequest {
    username: string;
    password: string;
}

export interface RegisterRequest {
    name: string;
    username: string;
    email: string;
    password: string;
}

// ============================================
// QUIZ SOLVING REQUEST TIPOVI
// ============================================
export interface StartQuizAttemptRequest {
    quizId: string;
}

export interface SubmitAnswerRequest {
    quizAttemptId: string;
    questionId: string;
    answerText?: string; // Za fill-in-the-blank
    booleanAnswer?: boolean; // Za true/false
    selectedAnswerIds?: string[]; // Za multiple choice
}

export interface FinishQuizAttemptRequest {
    quizAttemptId: string;
}

// ============================================
// SEARCH/FILTER REQUEST TIPOVI
// ============================================
export interface QuizSearchRequest {
    search?: string;
    categoryId?: string;
    difficulty?: QuizDifficulty;
    page?: number;
    pageSize?: number;
    sortBy?: 'title' | 'createdAt' | 'difficulty';
    sortOrder?: 'asc' | 'desc';
}

export interface CategorySearchRequest {
    search?: string;
    page?: number;
    pageSize?: number;
}

export interface UserSearchRequest {
    search?: string;
    role?: string;
    page?: number;
    pageSize?: number;
}