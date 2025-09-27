import React from "react";

const UserCard: React.FC = () => {

    return (
                    <div className="admin-panel-list-entity-div">
                <div className="div-block-84">
                    <div className="admin-panel-user-header">
                        <div className="text-block-64">Srdjan Delic</div>
                        <div className="admin-panel-user-active-tag">Active</div>
                    </div>
                    <div className="div-block-83">
                        <div className="text-block-66">@srga</div>
                    </div>
                    <div>
                        <div className="text-block-65">srdjandelic02@gmail.com</div>
                    </div>
                    <div className="div-block-81">
                        <div className="text-block-63">20 quizzes </div>
                        <div className="text-block-63">Total points: 15</div>
                        <div className="text-block-63">Average score: 78%</div>
                        <div className="text-block-63">Created: 10.01.2025</div>
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

export default UserCard;    