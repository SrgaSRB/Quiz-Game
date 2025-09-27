import React, { useEffect, useState } from "react";
import { QuizDashboardDto } from "../../../models";
import { quizService } from "../../../services/quizService";
import Loader from "../../shared/Loader";
import QuizCard from "./QuizCard";

const QuizzesPage: React.FC = () => {

    const [quizzes, setQuizzes] = useState<Array<QuizDashboardDto>>([]);
    const [loading, setLoading] = useState<boolean>(false);


    useEffect(() => {
        fetchQuizzes();
    }, []);


    const fetchQuizzes = async () => {
        setLoading(true);

        try{
            const response = await quizService.getDashboardQuizzes();

            if(response.status){
                setQuizzes(response.data || []);
            }
        }catch (error) {
            console.error("Error fetching quizzes:", error);
        }finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <Loader/>;
    }

    return (
        <section className="quizzes-section">
            <div className="w-layout-blockcontainer container w-container">
                <div className="quizzes-wrapper">
                    <div>
                        <div className="text-block-7">Available quizzes</div>
                        <div className="text-block-8">Find and solve quizzes in different fields of knowledge</div>
                    </div>
                    <div className="quizzes-filter-div">
                        <div className="div-block-8">
                            <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68cd53ab37876bc16e0ec576_filter%20(1).png" loading="lazy" alt="" className="image-6" />
                            <div className="text-block-9">Search and filters</div>
                        </div>
                        <div className="w-form">
                            <form id="email-form-2" name="email-form-2" data-name="Email Form 2" method="get" className="form-2" data-wf-page-id="68cb608040ea6feccc11acd4" data-wf-element-id="2a3a42dc-3d24-47ee-60ba-04850ace4a82" data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e">
                                <div className="div-block-9">
                                    <input className="input filter-search w-node-_2a3a42dc-3d24-47ee-60ba-04850ace4a85-cc11acd4 w-input" maxLength={256} name="name" data-name="Name" placeholder="" type="text" id="name" />
                                    <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68cd54a9de2f761450eb4020_search-interface-symbol.png" loading="lazy" alt="" className="image-7" />
                                </div>
                                <select id="field-2" name="field-2" data-name="Field 2" className="filter-select w-select">
                                    <option value="">Select one...</option>
                                </select>
                                <select id="field-2" name="field-2" data-name="Field 2" className="filter-select w-select">
                                    <option value="">Select one...</option>
                                </select>
                            </form>
                        </div>
                        <div className="text-block-10">
                            Showing 8 of 8 quizzes<br />
                        </div>
                    </div>
                    <div className="quizzes-list-div">

                        <div className="quiz-div">
                            <div className="div-block-11">
                                <div className="div-block-10">
                                    <div>Programming</div>
                                </div>
                                <div className="div-block-10 easy-quiz-tag">
                                    <div>Easy</div>
                                </div>
                            </div>
                            <div>
                                <div className="text-block-11">JavaScript Basic</div>
                                <div className="text-block-12">Basic concepts of the JavaScript programming language - variables, functions, strings</div>
                            </div>
                            <div className="div-block-13">
                                <div className="div-block-12">
                                    <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68cd586a9a34b773ec2e3e6a_question-mark.png" loading="lazy" alt="" className="image-8" />
                                    <div>20</div>
                                </div>
                                <div className="div-block-12">
                                    <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68cd586aefc709aeb71bd111_hourglass.png" loading="lazy" alt="" className="image-8" />
                                    <div>20 min</div>
                                </div>
                                <div className="div-block-12">
                                    <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68cd586abfb7916aaa1fab4f_people.png" loading="lazy" alt="" className="image-8" />
                                    <div>23</div>
                                </div>
                            </div>
                            <div className="div-block-15">
                                <div className="div-block-14">
                                    <div>javascript</div>
                                </div>
                                <div className="div-block-14">
                                    <div>basic</div>
                                </div>
                            </div>
                            <a className="button-1 w-button">Start Quiz</a>
                        </div>

                        {quizzes.map((quiz, index) => (
                            <QuizCard
                                key={index}
                                title={quiz.title}
                                description={quiz.description}
                                totalQuestions={quiz.totalQuestions}
                                timeLimitMinutes={quiz.timeLimitMinutes}
                                totalAttempts={quiz.totalAttempts}
                                categoryName={quiz.categoryName}
                                difficultyLevel={quiz.difficultyLevel}
                                tags={quiz.tags}
                            />
                        ))}



                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuizzesPage;
