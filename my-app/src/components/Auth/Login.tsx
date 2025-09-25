import React from "react";

const Login: React.FC = () => {
    return (
        <section className="login-section">
            <div className="w-layout-blockcontainer container w-container">
                <div className="login-wrapper">
                    <div className="div-block-5">
                        <div className="div-block-4">
                            <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68cb653b6fef412761d4ca6b_crown.png" loading="lazy" alt="" className="image-4" />
                            <div className="text-block-3">QuizHub</div>
                        </div>
                        <div className="text-block-4">Test your knowledge through fun quizzes</div>
                    </div>
                    <div className="form-block w-form">
                        <div className="text-block-5">Welcome back!</div>
                        <form className="form">
                            <label className="label">Username/email</label>
                            <input className="input login-input w-input" maxLength={256} placeholder="Enter your username/email" type="text" />
                            <label className="label">Password</label>
                            <input className="input login-input w-input" maxLength={256} placeholder="Enter your password" type="password" />
                            <input type="submit" data-wait="Please wait..." className="button-1 w-button" value="Login" />
                        </form>
                        <div className="div-block-6">
                            <div>Don &#x27;t have account?</div>
                            <a href="/register" className="link">Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;