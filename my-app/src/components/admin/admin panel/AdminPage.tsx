import React from "react";
import QuizzesListTab from "./QuizzesListTab";
import UsersListTab from "./UsersListTab";

const AdminPage: React.FC = () => {

    const [selectedFilter, setSelectedFilter] = React.useState<string>("quizzes");

    return (
        <section className="admin-section">
            <div className="w-layout-blockcontainer container w-container">
                <div className="admin-wrapper">
                    <div className="admin-header">
                        <div>
                            <div className="text-block-57">Admin panel</div>
                            <div className="text-block-58">Manage quizzes, users, and system settings</div>
                        </div>
                        <div className="div-block-82">
                            <div className="button-1 admin-panel-add-quiz" onClick={() => {window.location.href = '/admin/add-quiz';}}>
                                <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68d3f0f93fa447cc52c6037a_plus.png" loading="lazy" alt="" className="image-21" />
                                <div>Add new quiz</div>
                            </div>
                        </div>
                    </div>
                    <div className="div-block-53">
                        <div className="div-block-52 admin-panel-header-div">
                            <div className="div-block-51">
                                <div className="text-block-38">Total quizzes</div>
                                <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68d2efd247db02516582147c_task.png" loading="lazy" alt="" className="image-14" />
                            </div>
                            <div>
                                <div className="text-block-40">6</div>
                                <div className="text-block-39">Active</div>
                            </div>
                        </div>
                        <div className="div-block-52">
                            <div className="div-block-51">
                                <div className="text-block-38">Registered users</div>
                                <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68d2efd23a88713d1aaccd63_rise.png" loading="lazy" alt="" className="image-14" />
                            </div>
                            <div>
                                <div className="text-block-40">6</div>
                                <div className="text-block-39">Users</div>
                            </div>
                        </div>
                        <div className="div-block-52">
                            <div className="div-block-51">
                                <div className="text-block-38">Total participation</div>
                                <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68d2efd24fd388226c45a79b_exam.png" loading="lazy" alt="" className="image-14" />
                            </div>
                            <div>
                                <div className="text-block-40">6</div>
                                <div className="text-block-39">Participation</div>
                            </div>
                        </div>
                        <div className="div-block-52">
                            <div className="div-block-51">
                                <div className="text-block-38">Average score</div>
                                <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68d2e570f75fe458a72de339_coin%20(1).png" loading="lazy" alt="" className="image-14" />
                            </div>
                            <div>
                                <div className="text-block-40">6</div>
                                <div className="text-block-39">Performance</div>
                            </div>
                        </div>
                    </div>
                    <div className="div-block-78">
                        <div className="admin-panel-filter-div">
                            <div className={`admin-panel-filter ${selectedFilter === "quizzes" ? "admin-panel-filter-selected" : ""}`} onClick={() => setSelectedFilter("quizzes")}>
                                <div>Quizzes</div>
                            </div>
                            <div className={`admin-panel-filter ${selectedFilter === "users" ? "admin-panel-filter-selected" : ""}`} onClick={() => setSelectedFilter("users")}>
                                <div>Users</div>
                            </div>
                            <div className={`admin-panel-filter ${selectedFilter === "analytics" ? "admin-panel-filter-selected" : ""}`} onClick={() => setSelectedFilter("analytics")}>
                                <div>Analytics</div>
                            </div>
                        </div>

                        <div className="admin-panel-main-view">

                            {selectedFilter === "quizzes" && (
                                <QuizzesListTab />
                            )}

                            {selectedFilter === "users" && (
                                <UsersListTab />
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AdminPage;
