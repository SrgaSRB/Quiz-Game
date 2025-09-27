import React from "react";
import UserInfoCard from "./UserInfoCard";

const RankByQuizzesTab: React.FC = () => {

    return (
        <div className="div-block-20">
            <div className="div-block-23">
                <div className="text-block-15">The best players by quizzes</div>
                <div className="text-block-16">Ranking based on total points</div>
                <div className="form-block-2 w-form">
                    <form id="email-form-3" name="email-form-3" data-name="Email Form 3" method="get" data-wf-page-id="68cb608040ea6feccc11acd4" data-wf-element-id="110432c4-9032-52f2-9b7b-72832c6a0ab9" data-turnstile-sitekey="0x4AAAAAAAQTptj2So4dx43e">
                        <select id="field-3" name="field-3" data-name="Field 3" className="filter-select rang-filter w-select">
                            <option value="">Select one...</option>
                            <option value="First">First choice</option>
                            <option value="Second">Second choice</option>
                            <option value="Third">Third choice</option>
                        </select>
                    </form>
                </div>
            </div>
            <div className="rang-list-user-list">
                <UserInfoCard />
            </div>
        </div>
    );
};

export default RankByQuizzesTab;