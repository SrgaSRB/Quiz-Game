// ============================================
// GLAVNI EXPORT FAJL ZA SVE MODELE
// ============================================

// Enum tipovi i domain modeli
export * from './domain';

// DTO modeli za komunikaciju sa serverom
export * from './dto';

// Request tipovi za slanje na server
export * from './requests';

// Response tipovi od servera
export * from './responses';

// Za kompatibilnost sa postojećim kodom, re-eksportuj glavne tipove
export type {
    Quiz,
    Question,
    Answer,
    Category,
    User,
    QuizAttempt,
    UserAnswer,
    UserAnswerSelection,
    Entity
} from './domain';

export type {
    QuizDto,
    QuestionDto,
    AnswerDto,
    CategoryDto,
    UserDto,
    QuizAttemptDto,
    QuizDashboardDto
} from './dto';

export type {
    CreateQuizRequest,
    CreateQuestionRequest,
    CreateAnswerRequest,
    CreateCategoryRequest
} from './requests';

export type {
    ApiResponse,
    QuizResponse,
    CategoryResponse,
    QuizDashboardListResponse
} from './responses';