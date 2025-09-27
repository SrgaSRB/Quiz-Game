import React from "react";
import { Question } from "../../../../models/quiz";

interface QuestionFillInTabProps {
    question: Question;
    onUpdateQuestion: (updatedQuestion: Question) => void;
}

const QuestionFillInTab: React.FC<QuestionFillInTabProps> = ({ question, onUpdateQuestion }) => {

    const handleAnswerChange = (field: keyof Question, value: any) => {
        const updatedQuestion = {
            ...question,
            answers: [{
                text: value,
                isCorrect: true,
                questionId: question.id || ""
            }]
        };
        onUpdateQuestion(updatedQuestion);
    };

    return (
        <div className="aq-questioni-nput-text-answer">
            <div className="text-block-70">Question answer options</div>
            <div className="div-block-90 text-answer">
                <div className="div-block-91">
                    <label htmlFor="field-10" className="aq-question-label">Correct answer</label>
                    <input className="input aq-question-input w-node-_7f0d833d-b7b5-9290-ea71-8f6e5dfb2729-cc11acd4 w-input" maxLength={256} name="field-10" data-name="Field 10" placeholder="Enter correct answer" type="text" id="field-10"
                        value={question.answers.length > 0 ? question.answers[0].text : ''}
                        onChange={(e) => handleAnswerChange('text', e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default QuestionFillInTab;