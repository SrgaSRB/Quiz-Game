export enum QuestionType {
    SingleChoice = 1,
    MultipleChoice = 2,
    TrueFalse = 3,
    FillIn = 4
}

export enum QuizDifficulty {
    Easy = 1,
    Medium = 2,
    Hard = 3
}

export enum QuestionDifficulty {
    Easy = 1,
    Medium = 2,
    Hard = 3
}

export enum UserRole {
    User = 1,
    Admin = 2
}

export interface Entity {
    id?: string; // Guid is on backend side
    createdAt?: Date;
    isDeleted?: boolean;
}

export interface Answer extends Entity {
    text: string;
    isCorrect: boolean;
    questionId: string; // Guid is on backend side
    question?: Question;
}

export interface Category extends Entity {
    name: string;
    description?: string;
    quizzes?: Quiz[];
}

export interface Question extends Entity {
    text: string;
    type: QuestionType;
    points: number;
    difficulty?: QuestionDifficulty;
    quizId: string; // Guid is on backend side
    quiz?: Quiz;
    answers: Answer[];
    userAnswers?: UserAnswer[];
}

export interface Quiz extends Entity {
    title: string;
    description: string;
    timeLimitMinutes: number;
    difficultyLevel: QuizDifficulty;
    categoryId: string; // Guid is on backend side
    createdByUserId: string; // Guid is on backend side
    category?: Category;
    createdBy?: User;
    questions: Question[];
    quizAttempts?: QuizAttempt[];
}

export interface User extends Entity {
    name: string;
    username: string;
    email: string;
    passwordHash?: string; // Usually not sent to frontend
    profileImage?: string;
    role: UserRole;
    quizAttempts?: QuizAttempt[];
}

export interface QuizAttempt extends Entity {
    startedAt: Date;
    completedAt?: Date;
    score: number;
    percentage: number;
    timeSpentSeconds: number;
    userId: string; // Guid is on backend side
    quizId: string; // Guid is on backend side
    user?: User;
    quiz?: Quiz;
    userAnswers?: UserAnswer[];
}

export interface UserAnswer extends Entity {
    answerText?: string;
    booleanAnswer?: boolean;
    quizAttemptId: string; // Guid is on backend side
    questionId: string; // Guid is on backend side
    quizAttempt?: QuizAttempt;
    question?: Question;
    userAnswerSelections?: UserAnswerSelection[];
}

export interface UserAnswerSelection extends Entity {
    userAnswerId: string; // Guid is on backend side
    answerId: string; // Guid is on backend side
    userAnswer?: UserAnswer;
    answer?: Answer;
}

export interface CreateQuizRequest {
    title: string;
    description: string;
    timeLimitMinutes: number;
    difficultyLevel: QuizDifficulty;
    categoryId: string; // ID postojeće kategorije (prazan ako je nova)
    questions: CreateQuestionRequest[];
    newCategoryName?: string; // Ime nove kategorije (ako se kreira nova)
}

export interface CreateQuestionRequest {
    text: string;
    type: QuestionType;
    points: number;
    difficulty?: QuestionDifficulty;
    answers: CreateAnswerRequest[];
}

export interface CreateAnswerRequest {
    text: string;
    isCorrect: boolean;
}

export interface CreateCategoryRequest {
    name: string;
    description?: string;
}

export interface UpdateQuizRequest extends CreateQuizRequest {
    id: string;
}

export interface UpdateQuestionRequest extends CreateQuestionRequest {
    id?: string; 
}

export interface UpdateAnswerRequest extends CreateAnswerRequest {
    id?: string; 
}