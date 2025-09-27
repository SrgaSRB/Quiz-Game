import React from "react";
import { QuizDashboardDto } from "../../../models";

const QuizCard: React.FC<QuizDashboardDto> = ({
    title,
    description,
    totalQuestions,
    timeLimitMinutes,
    totalAttempts,
    categoryName,
    difficultyLevel,
    tags
}) => {

    return (
        <div className="quiz-div">
            <div className="div-block-11">
                <div className="div-block-10">
                    <div>{categoryName}</div>
                </div>
                <div className="div-block-10 easy-quiz-tag">
                    <div>{difficultyLevel}</div>
                </div>
            </div>
            <div>
                <div className="text-block-11">{title}</div>
                <div className="text-block-12">{description}</div>
            </div>
            <div className="div-block-13">
                <div className="div-block-12">
                    <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68cd586a9a34b773ec2e3e6a_question-mark.png" loading="lazy" alt="" className="image-8" />
                    <div>{totalQuestions}</div>
                </div>
                <div className="div-block-12">
                    <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68cd586aefc709aeb71bd111_hourglass.png" loading="lazy" alt="" className="image-8" />
                    <div>{timeLimitMinutes} min</div>
                </div>
                <div className="div-block-12">
                    <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68cd586abfb7916aaa1fab4f_people.png" loading="lazy" alt="" className="image-8" />
                    <div>{totalAttempts}</div>
                </div>
            </div>

            {/* Tag is not implemented for now */}
            {/* <div className="div-block-15">
                {tags.map((tag, index) => (
                    <div className="div-block-14" key={index}>
                        <div>{tag}</div>
                    </div>
                ))}
            </div> */}

            <a className="button-1 w-button">Start Quiz</a>
        </div>
    );
};

export default QuizCard;