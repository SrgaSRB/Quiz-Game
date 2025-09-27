import React, { useState } from "react";
import QuestionMultipleChoiceTab from "./QuestionMultipleChoiceTab";
import { Question, QuestionType } from "../../../../models";
import QuestionSingleChoiceTab from "./QuestionSingleChoiceTab";
import QuestionTrueFalseTab from "./QuestionTrueFalseTab";
import QuestionFillInTab from "./QuestionFillInTab";

interface QuestionCardProps {
    question: Question;
    questionIndex: number;
    onUpdateQuestion: (index: number, updatedQuestion: Question) => void;
    onDeleteQuestion: (index: number) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
    question,
    questionIndex,
    onUpdateQuestion,
    onDeleteQuestion
}) => {

    const handleFieldChange = (field: keyof Question, value: any) => {
        const updatedQuestion = { ...question, [field]: value };
        onUpdateQuestion(questionIndex, updatedQuestion);
    };

    return (
        <div className="aq-question-div aq-div">
            <div className="aq-question-header">
                <div className="text-block-69">Question {questionIndex + 1}</div>

                <div className="button-1 aq-add-question aq-remove-question" onClick={() => onDeleteQuestion(questionIndex)}>
                    <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68d3fe7c2641ab3afd7bbc67_close%20(1).png" loading="lazy" alt="" className="image-25" />
                    <div>Remove question</div>
                </div>

            </div>
            <div className="w-form">
                <form className="form-4" onSubmit={(e) => e.preventDefault()}                >
                    <div className="div-block-89">
                        <label htmlFor={`question-type-${questionIndex}`} className="aq-question-label">Question Type</label>
                        <label htmlFor={`question-points-${questionIndex}`} className="aq-question-label">Points</label>
                        <select
                            id={`question-type-${questionIndex}`}
                            name={`question-type-${questionIndex}`}
                            className="filter-select aq-question-select w-node-_54d10e76-1d21-d0de-95b7-937912f7b55c-cc11acd4 w-select"
                            value={question.type}
                            onChange={(e) => handleFieldChange('type', parseInt(e.target.value) as QuestionType)}
                        >
                            <option value={QuestionType.SingleChoice}>One correct answer</option>
                            <option value={QuestionType.MultipleChoice}>Multiple correct answers</option>
                            <option value={QuestionType.TrueFalse}>True/False</option>
                            <option value={QuestionType.FillIn}>Fill in the Blank</option>
                        </select>
                        <input
                            className="input aq-question-input w-node-bb39f289-9129-2446-f736-a898cfd9a1aa-cc11acd4 w-input"
                            name={`question-points-${questionIndex}`}
                            placeholder="Points"
                            type="number"
                            id={`question-points-${questionIndex}`}
                            value={question.points}
                            onChange={(e) => handleFieldChange('points', parseInt(e.target.value) || 0)}
                        />
                    </div>
                    <div>
                        <label htmlFor={`question-text-${questionIndex}`} className="aq-question-label">Question text</label>
                        <textarea
                            placeholder="Enter question text"
                            maxLength={5000}
                            id={`question-text-${questionIndex}`}
                            name={`question-text-${questionIndex}`}
                            className="input aq-question-textarea w-input"
                            value={question.text}
                            onChange={(e) => handleFieldChange('text', e.target.value)}
                        ></textarea>
                    </div>

                    {question.type === QuestionType.SingleChoice &&
                        <QuestionSingleChoiceTab
                            question={question}
                            onUpdateQuestion={(updatedQuestion: Question) => onUpdateQuestion(questionIndex, updatedQuestion)}
                        />
                    }

                    {question.type === QuestionType.TrueFalse &&
                        <QuestionTrueFalseTab />
                    }

                    {question.type === QuestionType.FillIn &&
                        <QuestionFillInTab
                            question={question}
                            onUpdateQuestion={(updatedQuestion: Question) => onUpdateQuestion(questionIndex, updatedQuestion)}
                        />
                    }

                    {question.type === QuestionType.MultipleChoice &&
                        <QuestionMultipleChoiceTab
                            question={question}
                            onUpdateQuestion={(updatedQuestion: Question) => onUpdateQuestion(questionIndex, updatedQuestion)}
                        />
                    }

                </form>
            </div>
        </div>
    );
};

export default QuestionCard;