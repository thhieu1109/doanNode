import React from 'react';
import "../style/UsersPage.css"
function Sidebar(props) {
    return (
        <div>
            {/* ================= SIDEBAR ================= */}
            <aside className="sidebar">
                <div className="sidebar-logo">
                    ADMIN PANEL
                    <span className="dot" />
                </div>

                <div className="sidebar-section-label">Menu</div>
                <ul className="sidebar-nav">
                    <li>
                        <a className="sidebar-link active">
                            <span className="icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8" />
                                    <path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                </svg>
                            </span>
                            Users
                        </a>
                    </li>
                    <li>
                        <a className="sidebar-link">
                            <span className="icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                                    <path d="M12 16v.01M12 8a2.2 2.2 0 0 1 2.2 2.2c0 1.6-2.2 1.6-2.2 3.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                </svg>
                            </span>
                            Support
                        </a>
                    </li>
                </ul>
            </aside>
        </div>
    );
}

export default Sidebar;