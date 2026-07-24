import React from 'react';
import "../components/styles/UserProfile.css"

function UserProfilePage(props) {
    return (
        <div>
            <div className="user-profile-page">
                <div className="profile-wrapper">
                    {/* SIDEBAR */}
                    <aside className="sidebar">
                        <div className="user-avatar-section">
                            <div className="avatar-container">
                                {/* Nếu avatar null, hiển thị ảnh mặc định */}
                                <img
                                    src="https://i.pravatar.cc/150?img=11"
                                    alt="User Avatar"
                                    className="avatar-img"
                                />
                                <button className="edit-avatar-btn">
                                    <i className="fas fa-pen"></i>
                                </button>
                            </div>
                            {/* Hiển thị Level từ data */}
                            <div className="adi-club-level">ADI-CLUB LEVEL 1</div>
                        </div>

                        <nav className="sidebar-nav">
                            <a href="#user-info" className="nav-item active">
                                <i className="far fa-user"></i> USER INFO
                            </a>
                            <a href="#dashboard" className="nav-item">
                                <i className="far fa-list-alt"></i> DASHBOARD
                            </a>
                            <a href="#favourites" className="nav-item">
                                <i className="far fa-heart"></i> FAVOURITES
                            </a>
                            <a href="#settings" className="nav-item">
                                <i className="fas fa-cog"></i> SETTINGS
                            </a>
                        </nav>
                    </aside>

                    {/* MAIN CONTENT */}
                    <main className="profile-content">
                        <h1 className="page-title">USER PROFILE</h1>

                        <form className="profile-form">
                            <div className="form-grid">
                                {/* Cột trái: Thông tin cá nhân */}
                                <div className="form-column">
                                    <div className="form-group">
                                        <label htmlFor="name">FULL NAME</label>
                                        <input type="text" id="name" defaultValue="Nguyen Van A" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">EMAIL ADDRESS</label>
                                        <input type="email" id="email" defaultValue="qqqhieubbb@gmail.com" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone">PHONE NUMBER</label>
                                        <input type="tel" id="phone" placeholder="Enter your phone number" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="address">ADDRESS</label>
                                        <input type="text" id="address" placeholder="Enter your address" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="country">COUNTRY</label>
                                        <select id="country" defaultValue="">
                                            <option value="" disabled>Select your country</option>
                                            <option value="VN">Vietnam</option>
                                            <option value="US">United States</option>
                                            <option value="UK">United Kingdom</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Cột phải: Bảo mật / Mật khẩu */}
                                <div className="form-column">
                                    <div className="form-group">
                                        <label htmlFor="current-password">CURRENT PASSWORD</label>
                                        <input type="password" id="current-password" placeholder="********" />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="new-password">NEW PASSWORD</label>
                                        <input type="password" id="new-password" placeholder="Must be at least 8 characters" />
                                    </div>
                                  
                                    {/* Toggle Options */}
                                    <div className="form-toggles">
                                        <div className="toggle-group">
                                            <span>EMAIL NOTIFICATIONS</span>
                                            <label className="switch">
                                                <input type="checkbox" defaultChecked />
                                                <span className="slider"></span>
                                            </label>
                                        </div>
                                        <div className="toggle-group">
                                            <span>PRIVATE ACCOUNT</span>
                                            <label className="switch">
                                                <input type="checkbox" />
                                                <span className="slider"></span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-actions" >
                                <button type="button" className="btn-primary">
                                    SAVE CHANGES <i className="fas fa-arrow-right"></i>
                                </button>
                               
                            </div>
                        </form>
                    </main>
                </div>
            </div>
        </div>
    );
}

export default UserProfilePage;