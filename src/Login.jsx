import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div
            className="min-vh-100 d-flex align-items-center justify-content-center"
            style={{
                background: 'linear-gradient(to right, #16a34a, #34d399, #d9f99d)',
            }}
        >
            <div className="container">
                <div className="row justify-content-center align-items-center min-vh-100">
                    <div className="col-12">
                        <div
                            className="bg-white rounded shadow-lg overflow-hidden mx-auto"
                            style={{ maxWidth: '750px' }}
                        >
                            <div className="row g-0">
                                <div className="col-md-6 p-4">
                                    <form method="post" className="d-flex flex-column gap-3">
                                        <h2 className="fw-bold">Login</h2>
                                        <div
                                            style={{
                                                height: '4px',
                                                width: '80px',
                                                background:
                                                    'linear-gradient(to right, #16a34a, #34d399, #d9f99d)',
                                                borderRadius: '50px',
                                            }}
                                        ></div>

                                        <div>
                                            <label htmlFor="email" className="form-label fw-semibold">
                                                Email :
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="form-control"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="password" className="form-label fw-semibold">
                                                Password :
                                            </label>
                                            <input
                                                type="password"
                                                id="password"
                                                className="form-control"
                                                required
                                            />
                                        </div>

                                        <button type="submit" className="btn btn-success fw-semibold">
                                            Login
                                        </button>

                                        <p className="mb-1">
                                            You don't have an account?{' '}
                                            <a
                                                href="/SignUp"
                                                className="text-success text-decoration-none fw-semibold"
                                            >
                                                Sign Up
                                            </a>
                                        </p>
                                    </form>
                                </div>

                                <div className="col-md-6 d-md-flex">
                                    <img
                                        src="https://eu-images.contentstack.com/v3/assets/blt58a1f8f560a1ab0e/blt4e19ef65238922b3/66c2e66d01251f29fe822793/fresh-hero7.gif?width=850&auto=webp&quality=80&format=jpg&disable=upscale"
                                        alt="Login Illustration"
                                        className="img-fluid p-3"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
