import React from "react";
import { Answer, Question } from "../../../../models";

interface QuestionSingleChoiceTabProps {
    question: Question;
    onUpdateQuestion: (updatedQuestion: Question) => void;
}

const QuestionSingleChoiceTab: React.FC<QuestionSingleChoiceTabProps> = ({ question, onUpdateQuestion }) => {


    const handleCorrectAnswerChange = (value: string) => {

        let correctAnswerIndex = question.answers.findIndex(answer => answer.isCorrect);
        if(correctAnswerIndex === -1) {
            correctAnswerIndex = 0;
            question.answers.push({
                text: "",
                isCorrect: true,
                questionId: question.id || ""
            });
        }else{
            question.answers[correctAnswerIndex].text = value;
        }
        const updatedQuestion = {
            ...question,
            answers: [...question.answers]
        };
        onUpdateQuestion(updatedQuestion);
    };


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

    const handleDeleteAnswer = (answerIndex: number) => {
        const updatedAnswers = question.answers.filter((_, i) => i !== answerIndex);
        const updatedQuestion = {
            ...question,
            answers: updatedAnswers
        };
        onUpdateQuestion(updatedQuestion);
    };


    const wrongAnswers = question.answers.filter(answer => !answer.isCorrect);

    return (
        <div className="aq-question-one-answer-div">
            <div className="text-block-70">Question answer options</div>
            <div className="div-block-90">

                <div className="div-block-91">
                    <label htmlFor="field-10" className="aq-question-label">Correct answer</label>
                    <input className="input aq-question-input w-node-ff25aea5-a445-0923-badb-589e3a79c088-cc11acd4 w-input" maxLength={256} placeholder="Enter correct answer" type="text"
                        value={question.answers.length > 0 ? question.answers.find(answer => answer.isCorrect)?.text || '' : ''}
                        onChange={(e) => handleCorrectAnswerChange(e.target.value)}
                    />
                </div>

                <div className="div-block-91">
                    <label htmlFor="field-10" className="aq-question-label">
                        Other answers <span className="text-span">(wrong)</span>
                    </label>

                    {wrongAnswers.map((answer, index) => {
                        const wrongIndex = question.answers.findIndex(a => a === answer);
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
                    <button className="button-1 aq-question-new-answer w-button"
                        onClick={handleAddWrongAnswer}>
                        Add new answer
                    </button>

                </div>
            </div>
        </div>
    );
};

export default QuestionSingleChoiceTab;