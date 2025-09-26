import React, { useState } from "react";
import Loader from "../shared/Loader";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/authService";
import { useAuth } from "./AuthProvider";

const Login: React.FC = () => {

    const [usernameOrEmail, setUsernameOrEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    const { setToken } = useAuth();
    const [loading, setLoading] = useState<boolean>(false);

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!usernameOrEmail) {
            setError("Username/email is required");
            return;
        }

        if (!password) {
            setError("Password is required");
            return;
        }

        setError("");
        setLoading(true);

        try {
            const response = await authService.login(usernameOrEmail, password);

            if (response.status) {
                const token = response.data!;
                setToken(token);
                navigate("/app/quizzes", { replace: true });
            } else {
                setError(response.message || "Login failed");
            }
        } catch (err) {
            setError("An error occurred during login");
        } finally {
            setLoading(false);
        }
    };


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
                        <form className="form" onSubmit={(e) => handleSubmit(e)}>

                            <label className="label">Username/email</label>
                            <input className="input login-input w-input" maxLength={256} placeholder="Enter your username/email" type="text"
                                value={usernameOrEmail}
                                onChange={(e) => setUsernameOrEmail(e.target.value)}
                            />

                            <label className="label">Password</label>
                            <input className="input login-input w-input" maxLength={256} placeholder="Enter your password" type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            {error && <div className="error-message">{error}</div>}

                            {loading ? (
                                <Loader />
                            ) : (
                                <input type="submit" data-wait="Please wait..." className="button-1 w-button" value="Login" />
                            )}
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