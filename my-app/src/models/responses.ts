import { QuizDto, CategoryDto, UserDto, QuizAttemptDto, QuizDashboardDto } from './dto';

// ============================================
// RESPONSE TIPOVI (od servera)
// ============================================

export interface ApiResponse<T> {
    status: boolean;
    message: string;
    data?: T;
    errors?: string[];
}

// ============================================
// SINGLE ITEM RESPONSES
// ============================================
export interface QuizResponse extends ApiResponse<QuizDto> {}
export interface CategoryResponse extends ApiResponse<CategoryDto> {}
export interface UserResponse extends ApiResponse<UserDto> {}
export interface QuizAttemptResponse extends ApiResponse<QuizAttemptDto> {}

// ============================================
// LIST/PAGINATED RESPONSES
// ============================================
export interface PaginatedResponse<T> {
    items: T[];
    totalCount: number;
    page: number;
    pageSize: number;
    totalPages: number;
    hasNext: boolean;
    hasPrevious: boolean;
}

export interface QuizDashboardListResponse extends ApiResponse<QuizDashboardDto[]> {}

// ============================================
// AUTH RESPONSES
// ============================================
export interface LoginResponse extends ApiResponse<{
    token: string;
    user: UserDto;
    expiresAt: string;
}> {}

export interface RegisterResponse extends ApiResponse<UserDto> {}

// ============================================
// CREATION RESPONSES
// ============================================
export interface CreateQuizResponse extends ApiResponse<{
    quizId: string;
    message: string;
}> {}

export interface CreateCategoryResponse extends ApiResponse<{
    categoryId: string;
    message: string;
}> {}

// ============================================
// QUIZ SOLVING RESPONSES
// ============================================
export interface StartQuizAttemptResponse extends ApiResponse<{
    quizAttemptId: string;
    quiz: QuizDto;
    startedAt: string;
}> {}

export interface SubmitAnswerResponse extends ApiResponse<{
    success: boolean;
    message: string;
}> {}

export interface FinishQuizAttemptResponse extends ApiResponse<{
    quizAttempt: QuizAttemptDto;
    score: number;
    percentage: number;
    correctAnswers: number;
    totalQuestions: number;
}> {}

// ============================================
// STATISTICS RESPONSES (ako budu potrebne)
// ============================================

// ============================================
// ERROR RESPONSES
// ============================================
export interface ValidationErrorResponse extends ApiResponse<null> {
    validationErrors: {
        field: string;
        message: string;
    }[];
}

export interface UnauthorizedResponse extends ApiResponse<null> {
    message: 'Unauthorized access';
}

export interface NotFoundResponse extends ApiResponse<null> {
    message: 'Resource not found';
}