import React from "react";

const QuizPage: React.FC = () => {
    return (
        <section className="quiz-selection">
            <div className="w-layout-blockcontainer quiz-container w-container">
                <div className="quiz-wrapper">
                    <div className="quiz-header-div">
                        <div>
                            <div className="text-block-20">JavaScript Osnove</div>
                            <div className="text-block-21">
                                Osnovni koncepti JavaScript programskog jezika<br />
                            </div>
                        </div>
                        <div className="div-block-28">
                            <div className="div-block-27">
                                <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68d2d8d324046614ce76beb9_hourglass%20(1).png" loading="lazy" alt="" className="image-11" />
                                <div className="text-block-22">15:00</div>
                            </div>
                            <div className="text-block-23">Timeleft</div>
                        </div>
                    </div>
                    <div className="quiz-quizzes-count-div">
                        <div className="text-block-24">1 of 10</div>
                        <div className="div-block-29">
                            <div className="div-block-30"></div>
                        </div>
                    </div>
                    <div className="div-block-32">
                        <div className="quiz-question">
                            <div className="quiz-question-header">
                                <div className="div-block-35">
                                    <div className="div-block-34">
                                        <div className="text-block-25">One correct answer</div>
                                    </div>
                                    <div>
                                        <div className="text-block-26">5 points</div>
                                    </div>
                                </div>
                                <div className="text-block-27">
                                    Koja je ispravka sintaksa za kreiranje varijable u JavaScript-u?<br />
                                </div>
                            </div>
                            <div className="form-block-3 w-form">
                                <form id="email-form-4" name="email-form-4" data-name="Email Form 4" method="get" data-wf-page-id="68cb608040ea6feccc11acd4" data-wf-element-id="30997419-486a-4181-7ee3-d9eebf742566" data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e">
                                    <label className="w-radio">
                                        <input type="radio" data-name="Radio" id="radio" name="radio" className="w-form-formradioinput w-radio-input" value="Radio" />
                                        <span className="w-form-label" >Radio</span>
                                    </label>
                                    <label className="w-radio">
                                        <input type="radio" data-name="Radio" id="radio" name="radio" className="w-form-formradioinput w-radio-input" value="Radio" />
                                        <span className="w-form-label" >Radio</span>
                                    </label>
                                    <label className="w-checkbox">
                                        <input type="checkbox" id="checkbox" name="checkbox" data-name="Checkbox" className="w-checkbox-input" />
                                        <span className="w-form-label" >Checkbox</span>
                                    </label>
                                    <label className="w-checkbox">
                                        <input type="checkbox" id="checkbox" name="checkbox" data-name="Checkbox" className="w-checkbox-input"/>
                                        <span className="w-form-label" >Checkbox</span>
                                    </label>
                                    <input className="input quiz-question-input w-input" maxLength={256} name="field-4" data-name="Field 4" placeholder="Example Text" type="text" id="field-4" />
                                </form>
                            </div>
                            <div className="quiz-question-bottom">
                                <a className="button-1 quiz-button-previus w-button">Previous Question</a>
                                <a className="button-1 quiz-question-button-next w-button">Next Question</a>
                            </div>
                        </div>
                        <div className="question-navigation">
                            <div className="text-block-28">Navigation</div>
                            <div className="question-navigation-div">
                                <div className="question-navigation-question-number-div">
                                    <div>1</div>
                                </div>
                                <div className="question-navigation-question-number-div question-navigation-question-number-div-select">
                                    <div>1</div>
                                </div>
                                <div className="question-navigation-question-number-div">
                                    <div>1</div>
                                </div>
                                <div className="question-navigation-question-number-div">
                                    <div>1</div>
                                </div>
                                <div className="question-navigation-question-number-div">
                                    <div>1</div>
                                </div>
                                <div className="question-navigation-question-number-div">
                                    <div>1</div>
                                </div>
                            </div>
                            <div className="div-block-36">
                                <a className="button-1 finis-quiz-button w-button">Finis Quiz</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuizPage;
