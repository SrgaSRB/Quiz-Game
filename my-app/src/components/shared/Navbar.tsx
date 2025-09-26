import React from "react";
import { Link, Links, NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <nav className="navbar-section">
            <div className="w-layout-blockcontainer container nav-container w-container">
                <div className="navbar-wrapper">

                    <div className="quiz-logo-div">
                        <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68cb653b6fef412761d4ca6b_crown.png" loading="lazy" alt="" className="image" />
                        <div className="text-block">
                            QuizHub<br />
                        </div>
                    </div>

                    <div className="nav-user-div">
                        <div className="div-block">
                            <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68cb66291dbf3576d1ebac4b_crop-profile-image.jpg" loading="lazy" className="image-2" />
                        </div>
                        <div className="div-block-2">
                            <div className="nav-user-username">@srga</div>
                            <div className="nav-user-email">delicdevelopment@gmail.com</div>
                        </div>
                    </div>

                    <div className="nav-pages-div">
                        <NavLink to="/app/quizzes" style={{ textDecoration: "none", color: "inherit" }} className={({ isActive }) => isActive ? "nav-page-div nav-page-div-select" : "nav-page-div"}>
                            <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68cb6853c05c947223299e91_home.png" loading="lazy" alt="" className="image-3" />
                            <div>Quizzes</div>
                        </NavLink>
                        <NavLink to="/app/rank-list" style={{ textDecoration: "none", color: "inherit" }} className={({ isActive }) => isActive ? "nav-page-div nav-page-div-select" : "nav-page-div"}>
                            <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68cb6853c05c947223299e91_home.png" loading="lazy" alt="" className="image-3" />
                            <div>Rank list</div>
                        </NavLink>
                        <NavLink to="/app/profile" style={{ textDecoration: "none", color: "inherit" }} className={({ isActive }) => isActive ? "nav-page-div nav-page-div-select" : "nav-page-div"}>
                            <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68cb6853c05c947223299e91_home.png" loading="lazy" alt="" className="image-3" />
                            <div>Profile</div>
                        </NavLink>
                        <NavLink to="/admin/settings" style={{ textDecoration: "none", color: "inherit" }} className={({ isActive }) => isActive ? "nav-page-div nav-page-div-select" : "nav-page-div"}>
                            <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68cb6853c05c947223299e91_home.png" loading="lazy" alt="" className="image-3" />
                            <div>Settings</div>
                        </NavLink>
                    </div>

                    <div className="div-block-3"></div>

                    <div className="div-block-7">
                        <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68ccac9159cb7c28073f3df3_exit.png" loading="lazy" alt="" className="image-5" />
                        <div className="text-block-6">Logout</div>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
