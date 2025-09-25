import React from "react";

const Register: React.FC = () => {
    return (
        <section className="register-section">
            <div className="w-layout-blockcontainer container w-container">
                <div className="register-wrapper">
                    <div className="div-block-5">
                        <div className="div-block-4">
                            <img src="https://cdn.prod.website-files.com/68cb607f40ea6feccc11acb9/68cb653b6fef412761d4ca6b_crown.png" loading="lazy" alt="" className="image-4" />
                            <div className="text-block-3">QuizHub</div>
                        </div>
                        <div className="text-block-4">Test your knowledge through fun quizzes</div>
                    </div>
                    <div className="form-block w-form">
                        <form id="email-form" className="form">
                            <div className="text-block-5">Welcome!</div>
                            <label className="label">Username</label>
                            <input className="input login-input w-input" maxLength={256} placeholder="Enter your username" type="text" />
                            <label className="label">Email</label>
                            <input className="input login-input w-input" maxLength={256} placeholder="Enter your email" type="email" />
                            <label className="label">Password</label>
                            <input className="input login-input w-input" maxLength={256} placeholder="Enter your password" type="password" />
                            <label className="label">Repeat Password</label>
                            <input className="input login-input w-input" maxLength={256} placeholder="Repeat your password" type="password" />
                            <input type="submit" data-wait="Please wait..." className="button-1 w-button" value="Register" />
                        </form>
                        <div className="div-block-6">
                            <div>Already have account?</div>
                            <a href="/login" className="link">Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
