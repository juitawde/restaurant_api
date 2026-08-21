import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { loginUser } from "../api";

function Login() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState("");

    const submit = async (e) => {

        e.preventDefault();
        setError("");

        try {

            const data = await loginUser(form);

            const token =
                data.token ||
                data.accessToken;

            if (!token) {
                throw new Error(
                    "Login successful but no token was returned."
                );
            }

            localStorage.setItem(
                "token",
                token
            );

            let decodedUsername = "";
            let decodedEmail = form.email;
            try {
                const base64Url = token.split('.')[1];
                const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
                const jsonPayload = decodeURIComponent(
                    window.atob(base64)
                        .split('')
                        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                        .join('')
                );
                const payload = JSON.parse(jsonPayload);
                if (payload) {
                    decodedUsername = payload.username || "";
                    decodedEmail = payload.email || decodedEmail;
                }
            } catch (e) {
                console.error("Failed to decode token", e);
            }

            localStorage.setItem("user", decodedUsername || decodedEmail);
            localStorage.setItem("username", decodedUsername);

            navigate("/dashboard");

        } catch (err) {

            setError(err.message);

        }

    };

    return (
        <div className="auth-page">

            <nav className="auth-nav">

                <Link
                    to="/login"
                    className="auth-logo"
                >
                    CULINA
                </Link>

                <div>
                    <span>New to Culina?</span>

                    <Link to="/register">
                        Join Culina
                    </Link>
                </div>

            </nav>

            <div className="auth-container">

                <div className="auth-card">

                    <span className="eyebrow">
                        MANAGEMENT PORTAL
                    </span>

                    <h1>
                        Welcome <em>back.</em>
                    </h1>

                    <p className="auth-description">
                        Sign in to manage your restaurants and menus.
                    </p>

                    <form onSubmit={submit}>

                        <label>Email</label>

                        <input
                            type="email"
                            value={form.email}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    email: e.target.value
                                })
                            }
                            required
                        />

                        <label>Password</label>

                        <input
                            type="password"
                            value={form.password}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    password: e.target.value
                                })
                            }
                            required
                        />

                        {error && (
                            <div className="form-error">
                                {error}
                            </div>
                        )}

                        <button className="primary-button">
                            SIGN IN
                            <ArrowRight size={16} />
                        </button>

                    </form>

                    <p className="auth-switch">
                        Don't have an account?
                        <Link to="/register">
                            Join Culina
                        </Link>
                    </p>

                </div>

            </div>

        </div>
    );
}

export default Login;