import React, { useEffect, useState } from "react";
import QuestionTrueFalseTab from "./Question Card/QuestionTrueFalseTab";
import QuestionCard from "./Question Card/QuestionCard";
import { Quiz, Question, QuizDifficulty, QuestionType, Answer, CreateQuizRequest, CreateQuestionRequest, CreateAnswerRequest, Category } from "../../../models/quiz";
import { quizService } from "../../../services/quizService";

const AddQuizPage: React.FC = () => {

    const [categories, setCategories] = useState<Category[]>([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState<string>("");
    const [newCategoryName, setNewCategoryName] = useState<string>("");
    const [newCategoryChecked, setNewCategoryChecked] = useState<boolean>(false);
    const [errorMessages, setErrorMessages] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const [quizInfo, setQuizInfo] = useState<Partial<Quiz>>({
        title: "",
        description: "",
        timeLimitMinutes: 0,
        difficultyLevel: QuizDifficulty.Easy,
        category: undefined,
        questions: []
    });

    const [questions, setQuestions] = useState<Question[]>([]);


    useEffect(() => {
        // Fetch categories from API
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await fetch("/api/categories");
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    const handleChangeNewCategoryChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewCategoryChecked(e.target.checked);

        if (e.target.checked) {
            setSelectedCategoryId("");
            setQuizInfo({ ...quizInfo, categoryId: undefined });
        } else {
            setNewCategoryName("");
        }
    };

    const handleAddQuestion = () => {
        const newQuestion: Question = {
            text: "",
            type: QuestionType.SingleChoice,
            points: 1,
            answers: [],
            quizId: ""
        };
        setQuestions([...questions, newQuestion]);
    };

    const handleDeleteQuestion = (index: number) => {
        const updatedQuestions = questions.filter((_, i) => i !== index);
        setQuestions(updatedQuestions);
    };

    const handleUpdateQuestion = (index: number, updatedQuestion: Question) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index] = updatedQuestion;
        setQuestions(updatedQuestions);
    };

    const validateQuiz = (): string[] => {
        const errors: string[] = [];

        if (!quizInfo.title || quizInfo.title.trim() === "") {
            errors.push("Quiz title is required");
        }

        if (!quizInfo.description || quizInfo.description.trim() === "") {
            errors.push("Quiz description is required");
        }

        if (!quizInfo.timeLimitMinutes || quizInfo.timeLimitMinutes <= 0) {
            errors.push("Time limit must be greater than 0");
        }

        // Validacija kategorije
        if (newCategoryChecked) {
            if (!newCategoryName || newCategoryName.trim() === "") {
                errors.push("New category name is required");
            }
        } else {
            if (!selectedCategoryId || selectedCategoryId.trim() === "") {
                errors.push("Please select a category");
            }
        }

        if (questions.length === 0) {
            errors.push("At least one question must be added");
        }

        questions.forEach((question, index) => {
            if (!question.text || question.text.trim() === "") {
                errors.push(`Question ${index + 1} must have text`);
            }

            if (!question.points || question.points <= 0) {
                errors.push(`Question ${index + 1} must have points greater than 0`);
            }

            const correctAnswers = question.answers.filter(a => a.isCorrect);

            if (correctAnswers.length === 0 && question.type !== QuestionType.TrueFalse) {
                errors.push(`Question ${index + 1} must have at least one correct answer`);
            }

            question.answers.forEach((answer, answerIndex) => {
                if (!answer.text || answer.text.trim() === "") {
                    errors.push(`Question ${index + 1}, answer ${answerIndex + 1} must have text`);
                }
            });
        });

        return errors;
    };

    const handleSaveQuiz = async () => {

        setLoading(true);

        const errors = validateQuiz();

        if (errors.length > 0) {
            setErrorMessages(errors);
            setLoading(false);
            return;
        }

        try {
            // Pripremi podatke za slanje na backend
            const quizDTO: CreateQuizRequest = {
                title: quizInfo.title || "",
                description: quizInfo.description || "",
                timeLimitMinutes: quizInfo.timeLimitMinutes || 0,
                difficultyLevel: quizInfo.difficultyLevel || QuizDifficulty.Easy,
                categoryId: newCategoryChecked ? "" : selectedCategoryId, 
                newCategoryName: newCategoryChecked ? newCategoryName : undefined, 
                questions: questions.map((question): CreateQuestionRequest => ({
                    text: question.text,
                    type: question.type,
                    points: question.points,
                    difficulty: question.difficulty,
                    answers: question.answers.map((answer): CreateAnswerRequest => ({
                        text: answer.text,
                        isCorrect: answer.isCorrect
                    }))
                }))
            };

            try {
                const response = await quizService.createQuiz(quizDTO);

                if (response.status) {
                    alert("Quiz successfully created!");
                    
                    // Reset forme nakon uspešnog kreiranja
                    setQuizInfo({
                        title: "",
                        description: "",
                        timeLimitMinutes: 0,
                        difficultyLevel: QuizDifficulty.Easy,
                        categoryId: undefined,
                        questions: []
                    });
                    setQuestions([]);
                    setSelectedCategoryId("");
                    setNewCategoryName("");
                    setNewCategoryChecked(false);
                    setErrorMessages([]);
                } else {
                    alert("Error creating quiz!");
                }

            } catch (error) {
                console.error("Error creating quiz:", error);
                alert("Error creating quiz!");
            }

        } catch (error) {
            console.error("Error creating quiz:", error);
            alert("Error creating quiz!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="add-quiz-section">
            <div className="w-layout-blockcontainer container w-container">
                <div className="add-quiz-wrapper">
                    <div className="aq-header">
                        <div>
                            <div className="text-block-67">Creating a new quiz</div>
                            <div className="text-block-68">Add basic information and quiz questions</div>
                        </div>
                        <div className="div-block-85">
                            <div className="button-1 cancel-btn">
                                <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68d3fe7c2641ab3afd7bbc67_close%20(1).png" loading="lazy" alt="" className="image-22" />
                                <div>Cancel</div>
                            </div>
                        </div>
                    </div>
                    <div className="div-block-86">
                        <div className="aq-div">
                            <div className="text-block-69">Basic information</div>
                            <div className="w-form">
                                <form onSubmit={(e) => e.preventDefault()}                                >
                                    <label htmlFor="name" className="label">Name</label>
                                    <input
                                        className="input aq-input w-input"
                                        maxLength={256}
                                        placeholder="Enter quiz name"
                                        type="text"
                                        value={quizInfo.title}
                                        onChange={(e) => setQuizInfo({ ...quizInfo, title: e.target.value })}
                                    />
                                    <label htmlFor="field-9" className="label">Description</label>
                                    <textarea
                                        placeholder="Enter quiz description"
                                        maxLength={5000}
                                        id="field-9"
                                        name="field-9"
                                        data-name="Field 9"
                                        className="input aq-input a1-text-box w-input"
                                        value={quizInfo.description}
                                        onChange={(e) => setQuizInfo({ ...quizInfo, description: e.target.value })}
                                    ></textarea>
                                    <div className="div-block-88">
                                        <label htmlFor="field-8" className="label">Category</label>
                                        <label className="w-checkbox">
                                            <input type="checkbox" className="w-checkbox-input checkbox"
                                                checked={newCategoryChecked}
                                                onChange={(e) => handleChangeNewCategoryChecked(e)} />
                                            <span className="w-form-label" >New Category</span>
                                        </label>

                                        <select className="filter-select aq-input w-node-_68a60f91-9d00-a295-cb61-99b932c744e0-cc11acd4 w-select"
                                            disabled={newCategoryChecked}
                                            style={{ pointerEvents: newCategoryChecked ? "none" : "auto", backgroundColor: newCategoryChecked ? "#f0f0f0" : "transparent" }}
                                            value={selectedCategoryId}
                                            onChange={(e) => {
                                                setSelectedCategoryId(e.target.value);
                                                // Postavi categoryId na ID postojeće kategorije
                                                setQuizInfo({ ...quizInfo, categoryId: e.target.value });
                                            }}
                                        >
                                            <option value="">Select a category</option>
                                            {categories.map((cat) => (
                                                <option key={cat.id} value={cat.id}>
                                                    {cat.name}
                                                </option>
                                            ))}
                                        </select>

                                        <input className="input aq-input aq-input-disabled w-node-bad3eef2-ead3-571f-20f8-2ddd09a873cf-cc11acd4 w-input" maxLength={256} placeholder="Enter new category" type="text"
                                            disabled={!newCategoryChecked}
                                            style={{ backgroundColor: !newCategoryChecked ? "#f0f0f0" : "transparent", pointerEvents: !newCategoryChecked ? "none" : "auto" }}
                                            value={newCategoryName}
                                            onChange={(e) => setNewCategoryName(e.target.value)}
                                        />

                                    </div>
                                    <label htmlFor="field-7" className="label">Difficulty</label>
                                    <select
                                        id="field-7"
                                        name="field-7"
                                        data-name="Field 7"
                                        className="filter-select aq-input w-select"
                                        value={quizInfo.difficultyLevel}
                                        onChange={(e) => setQuizInfo({ ...quizInfo, difficultyLevel: parseInt(e.target.value) as QuizDifficulty })}
                                    >
                                        <option value={QuizDifficulty.Easy}>Easy</option>
                                        <option value={QuizDifficulty.Medium}>Medium</option>
                                        <option value={QuizDifficulty.Hard}>Hard</option>
                                    </select>
                                    <label htmlFor="time-limit" className="label">Time limit (minutes)</label>
                                    <input
                                        className="input aq-input w-input"
                                        name="time-limit"
                                        data-name="Time Limit"
                                        placeholder="Vreme u minutima"
                                        type="number"
                                        id="time-limit"
                                        value={quizInfo.timeLimitMinutes}
                                        onChange={(e) => setQuizInfo({ ...quizInfo, timeLimitMinutes: parseInt(e.target.value) || 0 })}
                                    />
                                </form>
                            </div>
                        </div>
                        <div className="aq-div">
                            <div>
                                <div className="text-block-69">Quiz details</div>
                            </div>
                            <div className="div-block-93">
                                <div className="div-block-92">
                                    <div>Question number</div>
                                    <div>{questions.length}</div>
                                </div>
                                <div className="div-block-92">
                                    <div>Total points</div>
                                    <div>{questions.reduce((total, q) => total + q.points, 0)}</div>
                                </div>
                                <div className="div-block-92">
                                    <div>Time</div>
                                    <div>{quizInfo.timeLimitMinutes || 0} min</div>
                                </div>
                            </div>
                            <div className="button-1 aq-add-quiz-btn" onClick={handleSaveQuiz}>
                                <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68d40c77110b83c179010b8f_diskette.png" loading="lazy" alt="" className="image-24" />
                                <div>Save quiz</div>
                            </div>
                            {errorMessages.length > 0 && (
                                <div className="error-messages">
                                    {errorMessages.map((msg, idx) => (
                                        <div key={idx} className="error-message">{msg}</div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="aq-questions-list">
                        {questions.map((question, index) => (
                            <QuestionCard
                                key={index}
                                question={question}
                                questionIndex={index}
                                onUpdateQuestion={handleUpdateQuestion}
                                onDeleteQuestion={handleDeleteQuestion}
                            />
                        ))}

                        <div className="button-1 aq-add-question" onClick={handleAddQuestion}>
                            <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68d3f0f93fa447cc52c6037a_plus.png" loading="lazy" alt="" className="image-23" />
                            <div>Add question</div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddQuizPage;