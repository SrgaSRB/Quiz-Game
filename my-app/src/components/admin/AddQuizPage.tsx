import React from "react";

const AddQuizPage: React.FC = () => {
    return (
        <section className="add-quiz-section">
            <div className="w-layout-blockcontainer container w-container">
                <div className="add-quiz-wrapper">
                    <div className="aq-header">
                        <div>
                            <div className="text-block-67">Creating a new quiz</div>
                            <div className="text-block-68">Add basic information and quiz questions</div>
                        </div>
                        <div className="div-block-85">
                            <div className="button-1 cancel-btn">
                                <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68d3fe7c2641ab3afd7bbc67_close%20(1).png" loading="lazy" alt="" className="image-22" />
                                <div>Cancel</div>
                            </div>
                        </div>
                    </div>
                    <div className="div-block-86">
                        <div className="aq-div">
                            <div className="text-block-69">Basic information</div>
                            <div className="w-form">
                                <form id="email-form-6" name="email-form-6" data-name="Email Form 6" method="get" data-wf-page-id="68cb608040ea6feccc11acd4" data-wf-element-id="5a36b320-6564-5d2f-e477-2a54dc22de8f" data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e">
                                    <label htmlFor="name" className="label">Name</label>
                                    <input className="input aq-input w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder="" type="text" id="name-2" />
                                    <label htmlFor="field-9" className="label">Description</label>
                                    <textarea placeholder="Example Text" maxLength={5000} id="field-9" name="field-9" data-name="Field 9" className="input aq-input a1-text-box w-input"></textarea>
                                    <div className="div-block-88">
                                        <label htmlFor="field-8" className="label">Category</label>
                                        <label className="w-checkbox">
                                            <input type="checkbox" name="new-category" id="new-category" data-name="new-category" className="w-checkbox-input checkbox" />
                                            <span className="w-form-label" >New Category</span>
                                        </label>
                                        <select id="field-7" name="field-7" data-name="Field 7" className="filter-select aq-input w-node-_68a60f91-9d00-a295-cb61-99b932c744e0-cc11acd4 w-select">
                                            <option value="">Select one...</option>
                                            <option value="First">First choice</option>
                                            <option value="Second">Second choice</option>
                                            <option value="Third">Third choice</option>
                                        </select>
                                        <input className="input aq-input aq-input-disabled w-node-bad3eef2-ead3-571f-20f8-2ddd09a873cf-cc11acd4 w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder="" type="text" id="name-2" />
                                    </div>
                                    <label htmlFor="field-7" className="label">Difficulty</label>
                                    <select id="field-7" name="field-7" data-name="Field 7" className="filter-select aq-input w-select">
                                        <option value="">Select one...</option>
                                        <option value="First">First choice</option>
                                        <option value="Second">Second choice</option>
                                        <option value="Third">Third choice</option>
                                    </select>
                                    <label htmlFor="name" className="label">Time limit</label>
                                    <input className="input aq-input w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder="" type="text" id="name-2" />
                                </form>
                            </div>
                        </div>
                        <div className="aq-div">
                            <div>
                                <div className="text-block-69">Quiz details</div>
                            </div>
                            <div className="div-block-93">
                                <div className="div-block-92">
                                    <div>Question number</div>
                                    <div>10</div>
                                </div>
                                <div className="div-block-92">
                                    <div>Total points</div>
                                    <div>10</div>
                                </div>
                                <div className="div-block-92">
                                    <div>Time</div>
                                    <div>10 min</div>
                                </div>
                            </div>
                            <div className="button-1 aq-add-quiz-btn">
                                <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68d40c77110b83c179010b8f_diskette.png" loading="lazy" alt="" className="image-24" />
                                <div>Save quiz</div>
                            </div>
                        </div>
                    </div>
                    <div className="aq-questions-list">
                        <div className="aq-question-div aq-div">
                            <div className="aq-question-header">
                                <div className="text-block-69">Add question</div>
                            </div>
                            <div className="w-form">
                                <form id="email-form-7" name="email-form-7" data-name="Email Form 7" method="get" className="form-4" data-wf-page-id="68cb608040ea6feccc11acd4" data-wf-element-id="624bfac0-ead1-967a-e57d-66fe52bd5bce" data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e">
                                    <div className="div-block-89">
                                        <label htmlFor="field-10" className="aq-question-label">Form Label</label>
                                        <label htmlFor="field-11" className="aq-question-label">Points</label>
                                        <select id="field-11" name="field-11" data-name="Field 11" className="filter-select aq-question-select w-node-_54d10e76-1d21-d0de-95b7-937912f7b55c-cc11acd4 w-select">
                                            <option value="">Select one...</option>
                                            <option value="First">First choice</option>
                                            <option value="Second">Second choice</option>
                                            <option value="Third">Third choice</option>
                                        </select>
                                        <input className="input aq-question-input w-node-bb39f289-9129-2446-f736-a898cfd9a1aa-cc11acd4 w-input" maxLength={256} name="field-10" data-name="Field 10" placeholder="Example Text" type="number" id="field-10" />
                                    </div>
                                    <div>
                                        <label htmlFor="field-12" className="aq-question-label">Question text</label>
                                        <textarea placeholder="Example Text" maxLength={5000} id="field-12" name="field-12" data-name="Field 12" className="input aq-question-textarea w-input"></textarea>
                                    </div>
                                    <div className="aq-question-one-answer-div">
                                        <div>Question answer options</div>
                                        <div className="div-block-90">
                                            <div className="div-block-91">
                                                <label htmlFor="field-10" className="aq-question-label">Correct answer</label>
                                                <input className="input aq-question-input w-node-ff25aea5-a445-0923-badb-589e3a79c088-cc11acd4 w-input" maxLength={256} name="field-10" data-name="Field 10" placeholder="Example Text" type="text" id="field-10" />
                                            </div>
                                            <div className="div-block-91">
                                                <label htmlFor="field-10" className="aq-question-label">
                                                    Other answers <span className="text-span">(wrong)</span>
                                                </label>
                                                <input className="input aq-question-input w-node-_3db8b66c-824a-593c-7f30-fd87d25b6fa7-cc11acd4 w-input" maxLength={256} name="field-10" data-name="Field 10" placeholder="Example Text" type="text" id="field-10" />
                                                <input className="input aq-question-input w-node-_53f3d45b-fab1-1740-a38d-a5874ac4506b-cc11acd4 w-input" maxLength={256} name="field-10" data-name="Field 10" placeholder="Example Text" type="text" id="field-10" />
                                                <a className="button-1 aq-question-new-answer w-button">Add new answer</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="aq-question-one-or-more-answer-div">
                                        <div>Question answer options</div>
                                        <div className="div-block-90">
                                            <div className="div-block-91">
                                                <label htmlFor="field-10" className="aq-question-label">Correct answer</label>
                                                <input className="input aq-question-input w-node-_95c5698d-37c1-e66f-aa86-9f522d6bddb7-cc11acd4 w-input" maxLength={256} name="field-10" data-name="Field 10" placeholder="Example Text" type="text" id="field-10" />
                                                <a className="button-1 aq-question-new-answer w-button">Add new correct answer</a>
                                            </div>
                                            <div className="div-block-91">
                                                <label htmlFor="field-10" className="aq-question-label">
                                                    Other answers <span className="text-span">(wrong)</span>
                                                </label>
                                                <input className="input aq-question-input w-node-_95c5698d-37c1-e66f-aa86-9f522d6bddbd-cc11acd4 w-input" maxLength={256} name="field-10" data-name="Field 10" placeholder="Example Text" type="text" id="field-10" />
                                                <input className="input aq-question-input w-node-_95c5698d-37c1-e66f-aa86-9f522d6bddbe-cc11acd4 w-input" maxLength={256} name="field-10" data-name="Field 10" placeholder="Example Text" type="text" id="field-10" />
                                                <a className="button-1 aq-question-new-answer w-button">Add new answer</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="aq-questioni-nput-text-answer">
                                        <div>Question answer options</div>
                                        <div className="div-block-90 text-answer">
                                            <div className="div-block-91">
                                                <label htmlFor="field-10" className="aq-question-label">Correct answer</label>
                                                <input className="input aq-question-input w-node-_7f0d833d-b7b5-9290-ea71-8f6e5dfb2729-cc11acd4 w-input" maxLength={256} name="field-10" data-name="Field 10" placeholder="Example Text" type="text" id="field-10" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="aq-questions-true-or-false">
                                        <div>Question answer options</div>
                                        <div className="div-block-90">
                                            <div className="div-block-91">
                                                <label htmlFor="field-10" className="aq-question-label">
                                                    Correct answer <span className="text-span">(default)</span>
                                                </label>
                                                <input className="input aq-question-input aq-question-answer-default w-node-_63738b5c-f96d-be7a-e0db-48b481abdc1c-cc11acd4 w-input" maxLength={256} name="field-10" data-name="Field 10" placeholder="True" type="text" id="field-10" />
                                            </div>
                                            <div className="div-block-91">
                                                <label htmlFor="field-10" className="aq-question-label">
                                                    Other answers <span className="text-span">(wrong, default)</span>
                                                </label>
                                                <input className="input aq-question-input aq-question-answer-default w-node-_63738b5c-f96d-be7a-e0db-48b481abdc24-cc11acd4 w-input" maxLength={256} name="field-10" data-name="Field 10" placeholder="False" type="text" id="field-10" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="button-1 aq-add-question">
                                <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68d3f0f93fa447cc52c6037a_plus.png" loading="lazy" alt="" className="image-23" />
                                <div>Add question</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddQuizPage;