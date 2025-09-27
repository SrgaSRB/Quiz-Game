import React from "react";
import { Question, Answer } from "../../../../models";

interface QuestionMultipleChoiceTabProps {
    question: Question;
    onUpdateQuestion: (updatedQuestion: Question) => void;
}

const QuestionMultipleChoiceTab: React.FC<QuestionMultipleChoiceTabProps> = ({
    question,
    onUpdateQuestion
}) => {

    //Func for add new correct answer
    const handleAddCorrectAnswer = () => {
        const newAnswer: Answer = {
            text: "",
            isCorrect: true,
            questionId: question.id || "" 
        };
        const updatedQuestion = {
            ...question,
            answers: [...question.answers, newAnswer]
        };
        onUpdateQuestion(updatedQuestion);
    };

    // Func for add new wrong answer
    const handleAddWrongAnswer = () => {
        const newAnswer: Answer = {
            text: "",
            isCorrect: false,
            questionId: question.id || "" 
        };
        const updatedQuestion = {
            ...question,
            answers: [...question.answers, newAnswer]
        };
        onUpdateQuestion(updatedQuestion);
    };

    // Update answer text
    const handleUpdateAnswer = (answerIndex: number, field: keyof Answer, value: any) => {
        const updatedAnswers = [...question.answers];
        updatedAnswers[answerIndex] = {
            ...updatedAnswers[answerIndex],
            [field]: value
        };
        const updatedQuestion = {
            ...question,
            answers: updatedAnswers
        };
        onUpdateQuestion(updatedQuestion);
    };

    // Func for delete answer
    const handleDeleteAnswer = (answerIndex: number) => {
        const updatedAnswers = question.answers.filter((_: Answer, i: number) => i !== answerIndex);
        const updatedQuestion = {
            ...question,
            answers: updatedAnswers
        };
        onUpdateQuestion(updatedQuestion);
    };

    const correctAnswers = question.answers.filter((answer: Answer) => answer.isCorrect);
    const wrongAnswers = question.answers.filter((answer: Answer) => !answer.isCorrect);

    return (
        <div className="aq-question-one-or-more-answer-div">
            <div className="text-block-70">Question answer options</div>
            <div className="div-block-90">

                {/* Correct answers */}
                <div className="div-block-91">
                    <label className="aq-question-label">Correct answer</label>

                    {correctAnswers.map((answer: Answer, index: number) => {
                        const correctIndex = question.answers.findIndex((a: Answer) => a === answer);
                        return (
                            <div key={correctIndex}>
                                <div className="div-block-96">
                                    <input
                                        className="input aq-question-input w-node-_95c5698d-37c1-e66f-aa86-9f522d6bddb7-cc11acd4 w-input"
                                        maxLength={256}
                                        placeholder="Unesite tačan odgovor"
                                        type="text"
                                        value={answer.text}
                                        onChange={(e) => handleUpdateAnswer(correctIndex, 'text', e.target.value)}
                                    />
                                    <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68d7019d434cc1b0bf3e7727_delete-button.png" loading="lazy" alt="" className="image-26"
                                        onClick={() => handleDeleteAnswer(correctIndex)}
                                    />
                                </div>
                            </div>
                        );
                    })}
                    <button
                        type="button"
                        className="button-1 aq-question-new-answer w-button"
                        onClick={handleAddCorrectAnswer}
                    >
                        Add new correct answer
                    </button>
                </div>

                {/* Incorrect answers */}
                <div className="div-block-91">
                    <label className="aq-question-label">
                        Other answers <span className="text-span">(incorrect)</span>
                    </label>

                    {wrongAnswers.map((answer: Answer, index: number) => {
                        const wrongIndex = question.answers.findIndex((a: Answer) => a === answer);
                        return (
                            <div key={wrongIndex} >
                                <div className="div-block-96">
                                    <input
                                        className="input aq-question-input w-node-_95c5698d-37c1-e66f-aa86-9f522d6bddbd-cc11acd4 w-input"
                                        maxLength={256}
                                        placeholder="Unesite netačan odgovor"
                                        type="text"
                                        value={answer.text}
                                        onChange={(e) => handleUpdateAnswer(wrongIndex, 'text', e.target.value)}

                                    />
                                    <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68d7019d434cc1b0bf3e7727_delete-button.png" loading="lazy" alt="" className="image-26"
                                        onClick={() => handleDeleteAnswer(wrongIndex)}
                                    />
                                </div>
                            </div>
                        );
                    })}
                    <button
                        type="button"
                        className="button-1 aq-question-new-answer w-button"
                        onClick={handleAddWrongAnswer}
                    >
                        Add new incorrect answer
                    </button>
                </div>
                
            </div>
        </div>
    );
};

export default QuestionMultipleChoiceTab;