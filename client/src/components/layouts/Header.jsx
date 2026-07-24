import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header(props) {

    const loginNavigate = useNavigate();
    const handleLoginClick = () => {
        loginNavigate("/login");
    }

    const userProfileNavigate = useNavigate()
    const handleUserProfileClick = () => {
        userProfileNavigate("/member/profile");
    }

    const userLoginNow = localStorage.getItem("User");
    const renderUserIcon = () => {
        console.log(userLoginNow);
        if (userLoginNow) {
            return (

                <button className="icon-link" onClick={handleUserProfileClick}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                    <span>{userLoginNow}</span>
                </button>
            )
        } else {
            return (

                <button className="icon-link" onClick={handleLoginClick}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                    </svg>
                    <span>Log in</span>
                </button>
            )
        }


    }

    const goToHome = () => {
        window.location.href = "/";
    }
    return (
        <div>
            <header className="navbar">
                <div className="navbar-left">
                    <button
                        className="navbar-toggle"

                        aria-label="Toggle navigation"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <div className="logo" onClick={goToHome}>
                        <svg width="28" height="28" viewBox="0 0 34 34" fill="none">
                            <path d="M2 25L9 9L12 17L6 25H2Z" fill="#000" />
                            <path d="M12.5 25L20 6L23 14L16.5 25H12.5Z" fill="#000" />
                            <path d="M23 25L31 4L34 11L27 25H23Z" fill="#000" />
                        </svg>
                        <span>adidas</span>
                    </div>
                    <nav className="nav-links">
                        <a href="#men">Men</a>
                        <a href="#women">Women</a>
                        <a href="#kids">Kids</a>
                        <a href="#sports">Sports</a>
                        <a href="#brands">Brands</a>
                        <a href="#release-dates">Release Dates</a>
                    </nav>
                </div>
                <div className="navbar-right">
                    <div className="search-box">
                        <input type="text" placeholder="Search" />
                        <button className="search-btn" aria-label="Search">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="7" />
                                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                            </svg>
                        </button>
                    </div>
                    <button className="icon-link">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="9" cy="21" r="1" />
                            <circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                        </svg>
                        <span>Cart</span>
                    </button>

                    {renderUserIcon()}

                </div>
            </header>
        </div>
    );
}

export default Header;