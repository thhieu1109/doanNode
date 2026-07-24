import React, { useState } from 'react';
import axios from 'axios';
import '../styles/Login.css'
import { useNavigate } from "react-router-dom";

function Login(props) {

    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: "",
        password: ""
    });

    const handleInputChange = (e) => {
        const fieldInput = e.target.name;
        const value = e.target.value;
        setLoginData({
            ...loginData,
            [fieldInput]: value
        })
    }

    const handleSubmitLogin = (e) => {
        e.preventDefault();

        axios.post(`http://localhost:3000/api/login`, loginData)
            .then((res) => {
                console.log(res);
                alert("Login success");
                // xem log res thì server trả dữ liệu của user ở data.data

                const userLoginNow = res.data.data;
                if (userLoginNow.level === 0) {
                    // do không dùng navigate dc do chạy ở 2 link khác nhau nên phải dùng window.location.href
                    // chạy local host như này thì bắt buộc chạy admin trước để lấy port 5173, client chạy sau để lấy cổng 5174
                    window.location.href = "http://localhost:5173/admin/users-management";
                } else {
                    navigate("/");
                    localStorage.setItem("User", userLoginNow.email);
                }
            })
            .catch((err) => {
                console.log(err.response.data);
                alert("Login fail")
            })

    }

    const handleRegisterClick = () => {
        navigate("/register");
    }

    return (

        <div>
            <div className="login-page">
                {/* ================= LEFT PANEL ================= */}
                <div className="login-left">
                    {/* Diagonal decorative shapes (đồng màu xanh, không dùng gradient nhiều màu) */}
                    <div className="diagonal-shape shape-1" />
                    <div className="diagonal-shape shape-2" />
                    <div className="diagonal-shape shape-3" />

                    {/* Logo */}
                    <div className="brand-logo">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-4 4v-4H6a2 2 0 0 1-2-2V5z" fill="currentColor" />
                        </svg>
                    </div>

                    {/* Hero text */}
                    <div className="left-hero">
                        <h1 className="left-hero-title">Designed for Individuals</h1>
                        <p className="left-hero-subtitle">
                            See the analytics and grow your data remotely, from anywhere!
                        </p>
                    </div>

                    <div className="hero-dots">
                        <span className="bar" />
                        <span className="dot" />
                        <span className="dot" />
                    </div>

                    {/* Floating file preview mock */}
                    <div className="file-preview-card">
                        <div className="file-preview-sidebar">
                            <div className="sidebar-icon-box">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-4 4v-4H6a2 2 0 0 1-2-2V5z" fill="currentColor" />
                                </svg>
                            </div>
                            <div className="sidebar-icon-box active">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" fill="currentColor" />
                                </svg>
                            </div>
                            <div className="sidebar-icon-box">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                                    <path d="M10 9l5 3-5 3V9z" fill="currentColor" />
                                </svg>
                            </div>
                            <div className="sidebar-icon-box">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 6h16M4 12h16M4 18h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div className="sidebar-spacer" />
                            <div className="sidebar-icon-box">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
                                    <path d="M19 12a7 7 0 0 0-.1-1.2l2-1.6-2-3.4-2.4 1a7 7 0 0 0-2-1.2L14 3h-4l-.5 2.6a7 7 0 0 0-2 1.2l-2.4-1-2 3.4 2 1.6A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.6 2 3.4 2.4-1c.6.5 1.3.9 2 1.2L10 21h4l.5-2.6c.7-.3 1.4-.7 2-1.2l2.4 1 2-3.4-2-1.6c.1-.4.1-.8.1-1.2z" stroke="currentColor" strokeWidth="1.2" />
                                </svg>
                            </div>
                            <div className="sidebar-avatar">JD</div>
                        </div>

                        <div className="file-preview-body">
                            <div className="file-preview-header">
                                <div className="file-preview-title">
                                    <svg className="file-icon" width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M6 3h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" fill="currentColor" />
                                    </svg>
                                    Example File
                                </div>
                                <div className="file-preview-avatar">MS</div>
                            </div>

                            <div className="file-preview-toolbar">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" /></svg>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 4h11l3 3v13H5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><rect x="4" y="7" width="16" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.6" /><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.6" /></svg>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="1.6" /><circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="1.6" /><circle cx="12" cy="18" r="2" stroke="currentColor" strokeWidth="1.6" /></svg>
                                <span className="divider" />
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M4 12a8 8 0 1 1 2.3 5.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><path d="M4 17v-4h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M4 6h16l-6 7v5l-4 2v-7z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M7 8l5-5 5 5M12 3v13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M5 6h14M9 6v13m6-13v13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
                            </div>

                            <div className="file-preview-subtoolbar">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                <span className="search-pill" />
                                <span className="toggle-pill" />
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m2 0v13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V7h10z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </div>

                            <div className="file-preview-table-head">
                                <span>#</span>
                                <span>Tr</span>
                                <span>AZ</span>
                                <span>AZ</span>
                            </div>

                            <div className="file-preview-rows">
                                {[1, 2, 3, 4, 5, 6].map((n) => (
                                    <div className="file-preview-row" key={n}>
                                        <span className="row-num">{n}</span>
                                        <span />
                                        <span />
                                        <span />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================= RIGHT PANEL ================= */}
                <div className="login-right">
                    <div className="login-form-wrap">
                        <h2 className="login-title">Login</h2>

                        {/* Email */}
                        <div className="form-field">
                            <label className="form-label">Email address</label>
                            <input className="form-input" type="email" placeholder="name@mail.com" name="email" onChange={handleInputChange} />
                        </div>

                        {/* Password */}
                        <div className="form-field">
                            <div className="field-label-row">
                                <label className="form-label">Password</label>
                                <a className="reset-link">Reset Password</a>
                            </div>
                            <input className="form-input" type="password" name="password" onChange={handleInputChange} />
                        </div>

                        {/* Remember */}
                        <div className="remember-row">
                            <input type="checkbox" className="remember-checkbox" defaultChecked />
                            <span className="remember-label">Remember Password</span>
                        </div>

                        {/* Login button */}
                        <button className="btn-login" onClick={handleSubmitLogin}>Login</button>

                        <p className="signup-hint" onClick={handleRegisterClick}>
                            Don't have an account? <a>Sign up</a>
                        </p>

                        {/* Divider */}
                        <div className="or-divider">
                            <span className="line" />
                            <span>or</span>
                            <span className="line" />
                        </div>

                        {/* Google */}
                        <button className="btn-google">
                            <svg width="16" height="16" viewBox="0 0 24 24">
                                <path fill="#4285F4" d="M23.5 12.3c0-.85-.08-1.66-.22-2.45H12v4.63h6.46c-.28 1.5-1.13 2.77-2.4 3.62v3h3.89c2.28-2.1 3.55-5.2 3.55-8.8z" />
                                <path fill="#34A853" d="M12 24c3.24 0 5.96-1.07 7.95-2.9l-3.89-3c-1.08.73-2.46 1.16-4.06 1.16-3.12 0-5.76-2.1-6.7-4.93H1.3v3.1C3.28 21.3 7.3 24 12 24z" />
                                <path fill="#FBBC05" d="M5.3 14.33A7.2 7.2 0 0 1 4.92 12c0-.81.14-1.6.38-2.33v-3.1H1.3A12 12 0 0 0 0 12c0 1.94.46 3.77 1.3 5.43l4-3.1z" />
                                <path fill="#EA4335" d="M12 4.77c1.76 0 3.34.6 4.58 1.79l3.44-3.44C17.95 1.19 15.24 0 12 0 7.3 0 3.28 2.7 1.3 6.57l4 3.1C6.24 6.86 8.88 4.77 12 4.77z" />
                            </svg>
                            Authorize with Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;