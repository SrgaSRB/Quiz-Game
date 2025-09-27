import React from "react";

const QuizCard: React.FC = () => {

    return (
        <div className="admin-panel-list-entity-div">
            <div className="admin-panel-quiz-info">
                <div className="admin-panel-quiz-header">
                    <div className="div-block-80">
                        <div className="text-block-61">JavaScript Osnove</div>
                        <div className="div-block-79">
                            <div>Programiranje</div>
                        </div>
                        <div className="div-block-79 easy-tag">
                            <div>Easy</div>
                        </div>
                        <div className="div-block-79 medium-tag">
                            <div>Medium</div>
                        </div>
                        <div className="div-block-79 hard-tag">
                            <div>Hard</div>
                        </div>
                        <div className="div-block-79 active-tag">
                            <div>Active</div>
                        </div>
                    </div>
                </div>
                <div className="text-block-62">
                    Osnovni koncepti JavaScript programskog jezika<br />
                </div>
                <div className="admin-panel-quiz-bottom">
                    <div className="div-block-81">
                        <div className="text-block-63">20 questions </div>
                        <div className="text-block-63">15 min</div>
                        <div className="text-block-63">100 patritions </div>
                        <div className="text-block-63">Average score 78%</div>
                        <div className="text-block-63">Created 10.01.2025</div>
                    </div>
                </div>
            </div>
            <div className="admin-panel-buttons-div">
                <div className="admin-panel-button-div">
                    <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68d3ed544e5182a6d87118ae_edit%20(1).png" loading="lazy" alt="" className="image-20" />
                </div>
                <div className="admin-panel-button-div">
                    <div>Deactivate</div>
                </div>
                <div className="admin-panel-button-div remove-bg">
                    <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68d3eeafaf19659c0c32d110_bin.png" loading="lazy" alt="" className="image-20" />
                </div>
            </div>
        </div>
    );
};

export default QuizCard;