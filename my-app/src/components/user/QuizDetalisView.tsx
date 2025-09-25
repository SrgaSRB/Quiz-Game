import React from "react";

const QuizDetailsView: React.FC = () => {
    return (
        <section className="quiz-detalis-section">
            <div className="container">
                <div className="quiz-detalis-wrapper">
                    <div className="quiz-detalis-div">
                        <div className="quiz-detalis-header">
                            <div className="text-block-47">JavaScript Osnove</div>
                            <div className="text-block-48">
                                Osnovni koncepti JavaScript programskog jezika<br />
                            </div>
                            <div className="div-block-73">
                                <div className="div-block-66">
                                    <div>Programiranje</div>
                                </div>
                                <div className="div-block-66 medium-tag">
                                    <div>Programiranje</div>
                                </div>
                                <div className="div-block-66 easy-tag">
                                    <div>Programiranje</div>
                                </div>
                                <div className="div-block-66 hard-tag">
                                    <div>Programiranje</div>
                                </div>
                            </div>
                            <div className="div-block-77">
                                <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68d34c121983c037fef791d1_close.png" loading="lazy" alt="" />
                            </div>
                        </div>
                        <div className="quiz-detalis-main-div">
                            <div className="quiz-detalis-filter">
                                <div className="quiz-detalis-filter-div quiz-detalis-filter-div-select">
                                    <div>Questions and answers</div>
                                </div>
                                <div className="quiz-detalis-filter-div">
                                    <div>Progress</div>
                                </div>
                            </div>
                            <div className="quiz-detalis-list-questions">
                                <div className="quiz-detalis-question-div">
                                    <div className="quiz-detalis-question-header">
                                        <div className="div-block-67">
                                            <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68d2e5c22d15bebcf2d7c206_check.png" loading="lazy" alt="" className="image-16" />
                                            <div>Pitanje 1</div>
                                        </div>
                                        <div className="div-block-70">
                                            <div className="div-block-68">
                                                <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68d2d58daa34f65f1564e909_back-in-time.png" loading="lazy" alt="" className="image-17" />
                                                <div>1:51</div>
                                            </div>
                                            <div className="div-block-69">
                                                <div>5/5 points</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="div-block-71">
                                        <div>Question:</div>
                                        <div>JavaScript je interpretiran programski jezik.</div>
                                    </div>
                                    <div className="quiz-detalis-answers-list">
                                        <div className="quiz-detalis-answer-div">
                                            <div>Option A</div>
                                        </div>
                                        <div className="quiz-detalis-answer-div">
                                            <div>Option A</div>
                                        </div>
                                        <div className="quiz-detalis-answer-div quiz-detalis-answer-div-correct">
                                            <div>Option A</div>
                                            <div className="div-block-72">
                                                <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68d2e5c22d15bebcf2d7c206_check.png" loading="lazy" alt="" className="image-18" />
                                                <div>Your answer</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="quiz-detalis-question-div">
                                    <div className="quiz-detalis-question-header">
                                        <div className="div-block-67">
                                            <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68d3469a0f1a8074580fa1df_multiply.png" loading="lazy" alt="" className="image-16" />
                                            <div>Pitanje 1</div>
                                        </div>
                                        <div className="div-block-70">
                                            <div className="div-block-68">
                                                <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68d2d58daa34f65f1564e909_back-in-time.png" loading="lazy" alt="" className="image-17" />
                                                <div>1:51</div>
                                            </div>
                                            <div className="div-block-69">
                                                <div>0/5 points</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="div-block-71">
                                        <div>Question:</div>
                                        <div>JavaScript je interpretiran programski jezik.</div>
                                    </div>
                                    <div className="quiz-detalis-answers-list">
                                        <div className="quiz-detalis-answer-div">
                                            <div>Option A</div>
                                        </div>
                                        <div className="quiz-detalis-answer-div quiz-detalis-answer-div-wrong">
                                            <div>Option A</div>
                                            <div className="div-block-72">
                                                <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68d3469a0f1a8074580fa1df_multiply.png" loading="lazy" alt="" className="image-18" />
                                                <div>Your answer</div>
                                            </div>
                                        </div>
                                        <div className="quiz-detalis-answer-div quiz-detalis-answer-div-correct">
                                            <div>Option A</div>
                                            <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68d2e5c22d15bebcf2d7c206_check.png" loading="lazy" alt="" className="image-18" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="quiz-detalis-progress-block">
                                <div className="quiz-detalis-progress-graph-block">
                                    <div className="text-block-50">Progress chart</div>
                                    <div className="text-block-49">Your results through attempts</div>
                                    <div className="quiz-detalis-progress-graph-div"></div>
                                </div>
                                <div className="quiz-detalis-progress-attempts-block">
                                    <div className="text-block-51">History of attempts</div>
                                    <div className="quiz-detalis-progress-attempts-list">
                                        <div className="quiz-detalis-progress-attempt-div">
                                            <div className="div-block-75">
                                                <div className="div-block-74">
                                                    <div className="text-block-52">1</div>
                                                </div>
                                                <div>
                                                    <div className="text-block-54">Attempt 1</div>
                                                    <div className="text-block-53">20.09.2025</div>
                                                </div>
                                            </div>
                                            <div className="div-block-76">
                                                <div className="text-block-55">85%</div>
                                                <div className="text-block-56">12:47</div>
                                            </div>
                                        </div>
                                        <div className="quiz-detalis-progress-attempt-div">
                                            <div className="div-block-75">
                                                <div className="div-block-74">
                                                    <div className="text-block-52">1</div>
                                                </div>
                                                <div>
                                                    <div className="text-block-54">Attempt 1</div>
                                                    <div className="text-block-53">20.09.2025</div>
                                                </div>
                                            </div>
                                            <div className="div-block-76">
                                                <div className="text-block-55">85%</div>
                                                <div className="text-block-56">12:47</div>
                                            </div>
                                        </div>
                                        <div className="quiz-detalis-progress-attempt-div">
                                            <div className="div-block-75">
                                                <div className="div-block-74">
                                                    <div className="text-block-52">1</div>
                                                </div>
                                                <div>
                                                    <div className="text-block-54">Attempt 1</div>
                                                    <div className="text-block-53">20.09.2025</div>
                                                </div>
                                            </div>
                                            <div className="div-block-76">
                                                <div className="text-block-55">85%</div>
                                                <div className="text-block-56">12:47</div>
                                            </div>
                                        </div>
                                        <div className="quiz-detalis-progress-attempt-div">
                                            <div className="div-block-75">
                                                <div className="div-block-74">
                                                    <div className="text-block-52">1</div>
                                                </div>
                                                <div>
                                                    <div className="text-block-54">Attempt 1</div>
                                                    <div className="text-block-53">20.09.2025</div>
                                                </div>
                                            </div>
                                            <div className="div-block-76">
                                                <div className="text-block-55">85%</div>
                                                <div className="text-block-56">12:47</div>
                                            </div>
                                        </div>
                                        <div className="quiz-detalis-progress-attempt-div">
                                            <div className="div-block-75">
                                                <div className="div-block-74">
                                                    <div className="text-block-52">1</div>
                                                </div>
                                                <div>
                                                    <div className="text-block-54">Attempt 1</div>
                                                    <div className="text-block-53">20.09.2025</div>
                                                </div>
                                            </div>
                                            <div className="div-block-76">
                                                <div className="text-block-55">85%</div>
                                                <div className="text-block-56">12:47</div>
                                            </div>
                                        </div>
                                        <div className="quiz-detalis-progress-attempt-div">
                                            <div className="div-block-75">
                                                <div className="div-block-74">
                                                    <div className="text-block-52">1</div>
                                                </div>
                                                <div>
                                                    <div className="text-block-54">Attempt 1</div>
                                                    <div className="text-block-53">20.09.2025</div>
                                                </div>
                                            </div>
                                            <div className="div-block-76">
                                                <div className="text-block-55">85%</div>
                                                <div className="text-block-56">12:47</div>
                                            </div>
                                        </div>
                                        <div className="quiz-detalis-progress-attempt-div">
                                            <div className="div-block-75">
                                                <div className="div-block-74">
                                                    <div className="text-block-52">1</div>
                                                </div>
                                                <div>
                                                    <div className="text-block-54">Attempt 1</div>
                                                    <div className="text-block-53">20.09.2025</div>
                                                </div>
                                            </div>
                                            <div className="div-block-76">
                                                <div className="text-block-55">85%</div>
                                                <div className="text-block-56">12:47</div>
                                            </div>
                                        </div>
                                        <div className="quiz-detalis-progress-attempt-div">
                                            <div className="div-block-75">
                                                <div className="div-block-74">
                                                    <div className="text-block-52">1</div>
                                                </div>
                                                <div>
                                                    <div className="text-block-54">Attempt 1</div>
                                                    <div className="text-block-53">20.09.2025</div>
                                                </div>
                                            </div>
                                            <div className="div-block-76">
                                                <div className="text-block-55">85%</div>
                                                <div className="text-block-56">12:47</div>
                                            </div>
                                        </div>
                                        <div className="quiz-detalis-progress-attempt-div">
                                            <div className="div-block-75">
                                                <div className="div-block-74">
                                                    <div className="text-block-52">1</div>
                                                </div>
                                                <div>
                                                    <div className="text-block-54">Attempt 1</div>
                                                    <div className="text-block-53">20.09.2025</div>
                                                </div>
                                            </div>
                                            <div className="div-block-76">
                                                <div className="text-block-55">85%</div>
                                                <div className="text-block-56">12:47</div>
                                            </div>
                                        </div>
                                        <div className="quiz-detalis-progress-attempt-div">
                                            <div className="div-block-75">
                                                <div className="div-block-74">
                                                    <div className="text-block-52">1</div>
                                                </div>
                                                <div>
                                                    <div className="text-block-54">Attempt 1</div>
                                                    <div className="text-block-53">20.09.2025</div>
                                                </div>
                                            </div>
                                            <div className="div-block-76">
                                                <div className="text-block-55">85%</div>
                                                <div className="text-block-56">12:47</div>
                                            </div>
                                        </div>
                                        <div className="quiz-detalis-progress-attempt-div">
                                            <div className="div-block-75">
                                                <div className="div-block-74">
                                                    <div className="text-block-52">1</div>
                                                </div>
                                                <div>
                                                    <div className="text-block-54">Attempt 1</div>
                                                    <div className="text-block-53">20.09.2025</div>
                                                </div>
                                            </div>
                                            <div className="div-block-76">
                                                <div className="text-block-55">85%</div>
                                                <div className="text-block-56">12:47</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuizDetailsView;
