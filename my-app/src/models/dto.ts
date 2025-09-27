import { QuestionType, QuizDifficulty, QuestionDifficulty, UserRole } from './domain';

// ============================================
// DTO MODELS
// ============================================

export interface BaseDto {
    id?: string;
    createdAt?: string; // ISO string format
    isDeleted?: boolean;
}

export interface AnswerDto extends BaseDto {
    text: string;
    isCorrect: boolean;
    questionId: string;
}

export interface CategoryDto extends BaseDto {
    name: string;
    description?: string;
}

export interface QuestionDto extends BaseDto {
    text: string;
    type: QuestionType;
    points: number;
    difficulty?: QuestionDifficulty;
    quizId: string;
    answers: AnswerDto[];
}

export interface QuizDto extends BaseDto {
    title: string;
    description: string;
    timeLimitMinutes: number;
    difficultyLevel: QuizDifficulty;
    categoryId: string;
    createdByUserId: string;
    category?: CategoryDto;
    questions: QuestionDto[];
}

export interface UserDto extends BaseDto {
    name: string;
    username: string;
    email: string;
    profileImage?: string;
    role: UserRole;
}

export interface QuizAttemptDto extends BaseDto {
    startedAt: string; // ISO string format
    completedAt?: string;
    score: number;
    percentage: number;
    timeSpentSeconds: number;
    userId: string;
    quizId: string;
    quiz?: QuizDto;
    user?: UserDto;
}

export interface UserAnswerDto extends BaseDto {
    answerText?: string;
    booleanAnswer?: boolean;
    quizAttemptId: string;
    questionId: string;
}

export interface UserAnswerSelectionDto extends BaseDto {
    userAnswerId: string;
    answerId: string;
}

// ============================================
// DASHBOARD DTO (od backend servera)
// ============================================
export interface QuizDashboardDto {
    title: string;
    description: string;
    totalQuestions: number;
    timeLimitMinutes: number;
    totalAttempts: number;
    categoryName: string;
    difficultyLevel: QuizDifficulty;
    tags: string[];
}