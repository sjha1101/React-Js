import React from 'react';

const Signup = () => {
    return (
        <div
            className="min-vh-100 d-flex align-items-center justify-content-center"
            style={{
                background: 'linear-gradient(to right, #16a34a, #34d399, #d9f99d)',
            }}
        >
            <div className="container">
                <div className="row justify-content-center align-items-center min-vh-100">
                    <div className="col-12 col-md-10 col-lg-8">
                        <div
                            className="row g-0 bg-white rounded shadow-lg overflow-hidden mx-auto"
                            style={{ maxWidth: '750px' }}
                        >
                            <div className="col-md-6 p-4">
                                <form className="d-flex flex-column gap-3">
                                    <h2 className="fw-bold text-dark mb-3">Sign Up</h2>
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
                                        <label htmlFor="phonenumber" className="form-label fw-semibold">
                                            Phone Number :
                                        </label>
                                        <input
                                            type="tel"
                                            id="phonenumber"
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

                                    <div>
                                        <label htmlFor="confirmPassword" className="form-label fw-semibold">
                                            Confirm Password :
                                        </label>
                                        <input
                                            type="password"
                                            id="confirmPassword"
                                            className="form-control"
                                            required
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-success fw-semibold">
                                        Sign Up
                                    </button>

                                    <p className="mb-1">
                                        You already have an account?{' '}
                                        <a
                                            href="/"
                                            className="text-success text-decoration-none fw-semibold"
                                        >
                                            LogIn
                                        </a>
                                    </p>
                                </form>
                            </div>

                            <div className="col-md-6 d-md-flex ">
                                <img
                                    src="https://eu-images.contentstack.com/v3/assets/blt58a1f8f560a1ab0e/blt4e19ef65238922b3/66c2e66d01251f29fe822793/fresh-hero7.gif?width=850&auto=webp&quality=80&format=jpg&disable=upscale"
                                    alt="Signup Illustration"
                                    className="img-fluid p-3"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
