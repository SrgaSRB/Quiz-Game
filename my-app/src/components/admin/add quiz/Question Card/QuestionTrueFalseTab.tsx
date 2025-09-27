import react from "react";
import { Question } from "../../../../models/quiz";

const QuestionTrueFalseTab: React.FC = () => {

    return (
        <div className="aq-questions-true-or-false">
            <div className="text-block-70">Question answer options</div>
            <div className="div-block-90">
                <div className="div-block-91">
                    <label htmlFor="field-10" className="aq-question-label">
                        Correct answer <span className="text-span">(default)</span>
                    </label>
                    <input className="input aq-question-input aq-question-answer-default w-node-_63738b5c-f96d-be7a-e0db-48b481abdc1c-cc11acd4 w-input" maxLength={256} placeholder="True" type="text"
                    />
                </div>
                <div className="div-block-91">
                    <label htmlFor="field-10" className="aq-question-label">
                        Other answers <span className="text-span">(incorrect, default)</span>
                    </label>
                    <input className="input aq-question-input aq-question-answer-default w-node-_63738b5c-f96d-be7a-e0db-48b481abdc24-cc11acd4 w-input" maxLength={256} name="field-10" data-name="Field 10" placeholder="False" type="text" id="field-10" />
                </div>
            </div>
        </div>
    );
};

export default QuestionTrueFalseTab;