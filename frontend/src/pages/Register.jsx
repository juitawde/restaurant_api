import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { registerUser } from "../api";

function Register() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState("");

    const submit = async (e) => {

        e.preventDefault();
        setError("");

        try {

            await registerUser(form);

            navigate("/login");

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
                    <span>Already a member?</span>

                    <Link to="/login">
                        Sign in
                    </Link>
                </div>

            </nav>

            <div className="auth-container">

                <div className="auth-card">

                    <span className="eyebrow">
                        BECOME A MEMBER
                    </span>

                    <h1>
                        Join <em>Culina.</em>
                    </h1>

                    <p className="auth-description">
                        Create your management account and begin curating exceptional dining.
                    </p>

                    <form onSubmit={submit}>

                        <label>Username</label>

                        <input
                            value={form.username}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    username: e.target.value
                                })
                            }
                            required
                        />

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
                            CREATE ACCOUNT
                        </button>

                    </form>

                    <p className="auth-switch">
                        Already a member?
                        <Link to="/login">
                            Sign in
                        </Link>
                    </p>

                </div>

            </div>

        </div>
    );
}

export default Register;