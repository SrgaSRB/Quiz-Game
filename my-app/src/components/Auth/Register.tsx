import React, { useState } from "react";
import Loader from "../shared/Loader";
import { authService } from "../../services/authService";

const Register: React.FC = () => {

    const [name, setName] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [repeatPassword, setRepeatPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [usernameError, setUsernameError] = useState<string>("");
    const [emailError, setEmailError] = useState<string>("");
    const [repeatPasswordError, setRepeatPasswordError] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!username) {
            setUsernameError("Username is required");
            return;
        }

        if (!email) {
            setEmailError("Email is required");
            return;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError("Email is invalid");
            return;
        }

        if (!password) {
            setError("Password is required");
            return;
        }

        if (password !== repeatPassword) {
            setRepeatPasswordError("Passwords do not match");
            return;
        }

        setError("");
        setLoading(true);

        try {

            const response = await authService.register(name, username, email, password, repeatPassword);

            if (response.status) {
                alert("Registration successful! Please login.");
                window.location.href = "/login";
            } else {
                setError(response.message || "Registration failed");
            }

        } catch (err) {
            setError("An error occurred during registration");
        } finally {
            setLoading(false);
        }
    };


    if (loading) {
        return <Loader />
    }

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
                        <form id="email-form" className="form" onSubmit={(e) => handleSubmit(e)}>
                            <div className="text-block-5">Welcome!</div>

                            <label className="label">Name</label>
                            <input className="input login-input w-input" maxLength={256} placeholder="Enter your name" type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <label className="label">Username</label>
                            <input className="input login-input w-input" maxLength={256} placeholder="Enter your username" type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />

                            <label className="label">Email</label>
                            <input className="input login-input w-input" maxLength={256} placeholder="Enter your email" type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <label className="label">Password</label>
                            <input className="input login-input w-input" maxLength={256} placeholder="Enter your password" type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            <label className="label">Repeat Password</label>
                            <input className="input login-input w-input" maxLength={256} placeholder="Repeat your password" type="password"
                                value={repeatPassword}
                                onChange={(e) => setRepeatPassword(e.target.value)}
                            />
                            {repeatPasswordError && <div className="error-message">{repeatPasswordError}</div>}

                            {error && <div className="error-message">{error}</div>}


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
