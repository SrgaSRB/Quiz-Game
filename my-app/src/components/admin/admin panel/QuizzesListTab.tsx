import React from "react";
import QuizCard from "./QuizCard";

const QuizzesListTab: React.FC = () => {

    return (
        <div className="admin-panel-quizzes-block">
            <div className="admin-panel-quizzes-header">
                <div className="text-block-59">Quiz management</div>
                <div className="text-block-60">View, edit, and delete existing quizzes</div>
            </div>
            <div className="admin-panel-quizzes-list">

                <QuizCard />
                
            </div>
        </div>
    );
};

export default QuizzesListTab;