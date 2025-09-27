// ============================================
// ENUM 
// ============================================
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

// ============================================
// DOMAIN MODELS
// ============================================
export interface Entity {
    id?: string; // Guid kao string
    createdAt?: Date;
    isDeleted?: boolean;
}

export interface Answer extends Entity {
    text: string;
    isCorrect: boolean;
    questionId: string;
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
    quizId: string;
    quiz?: Quiz;
    answers: Answer[];
    userAnswers?: UserAnswer[];
}

export interface Quiz extends Entity {
    title: string;
    description: string;
    timeLimitMinutes: number;
    difficultyLevel: QuizDifficulty;
    categoryId: string;
    createdByUserId: string;
    category?: Category;
    createdBy?: User;
    questions: Question[];
    quizAttempts?: QuizAttempt[];
}

export interface User extends Entity {
    name: string;
    username: string;
    email: string;
    passwordHash?: string;
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
    userId: string;
    quizId: string;
    user?: User;
    quiz?: Quiz;
    userAnswers?: UserAnswer[];
}

export interface UserAnswer extends Entity {
    answerText?: string;
    booleanAnswer?: boolean;
    quizAttemptId: string;
    questionId: string;
    quizAttempt?: QuizAttempt;
    question?: Question;
    userAnswerSelections?: UserAnswerSelection[];
}

export interface UserAnswerSelection extends Entity {
    userAnswerId: string;
    answerId: string;
    userAnswer?: UserAnswer;
    answer?: Answer;
}