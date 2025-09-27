import React, { useState } from "react";
import GlobalRankListTab from "./GlobalRankListTab";
import RankByQuizzesTab from "./RankByQuizzesTab";

const RangListPage: React.FC = () => {

    const [selectedFilter, setSelectedFilter] = useState<string>("global");

    return (
        <section className="rang-list-section">
            <div className="w-layout-blockcontainer container w-container">
                <div className="rang-list-wrapper">
                    <div className="div-block-17">
                        <div className="div-block-16">
                            <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68cd60ac724ce1dc4792e698_rank.png" loading="lazy" alt="" />
                            <div className="text-block-13">Rank list</div>
                        </div>
                        <div>
                            <div className="text-block-14">Compare your results with other users</div>
                        </div>
                    </div>
                    <div className="rang-list-filter-div">

                        <div className={`rang-list-filter ${selectedFilter === "global" ? "rang-list-filter-selected" : ""}`} onClick={() => setSelectedFilter("global")}>
                            <div>Global rang list</div>
                        </div>
                        
                        <div className={`rang-list-filter ${selectedFilter === "weekly" ? "rang-list-filter-selected" : ""}`} onClick={() => setSelectedFilter("weekly")}>
                            <div>Weekly leaders</div>
                        </div>

                        <div className={`rang-list-filter ${selectedFilter === "quizzes" ? "rang-list-filter-selected" : ""}`} onClick={() => setSelectedFilter("quizzes")}>
                            <div>By quizzes</div>
                        </div>
                    </div>

                    {selectedFilter === "global" && (
                        <GlobalRankListTab />
                    )}

                    {selectedFilter === "quizzes" && (
                        <RankByQuizzesTab />
                    )}

                </div>
            </div>
        </section>
    );
};

export default RangListPage;
