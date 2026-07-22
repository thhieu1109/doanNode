import React from 'react';
import "./styles/Sidebar.css"
import { Link } from 'react-router-dom';
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
                        <Link className="sidebar-link active" to="/admin/users-management">
                            <span className="icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8" />
                                    <path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                </svg>
                            </span>
                            Users
                        </Link>
                    </li>
                    <li>
                        <Link className="sidebar-link" to="/admin/country-management">
                            <span className="icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                                    <path d="M12 16v.01M12 8a2.2 2.2 0 0 1 2.2 2.2c0 1.6-2.2 1.6-2.2 3.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                </svg>
                            </span>
                            Country
                        </Link>
                    </li>
                    <li>
                        <Link className="sidebar-link" to="/admin/blog-management">
                            <span className="icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                                    <path d="M12 16v.01M12 8a2.2 2.2 0 0 1 2.2 2.2c0 1.6-2.2 1.6-2.2 3.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                </svg>
                            </span>
                            Blog
                        </Link>
                    </li>
                </ul>
            </aside>
        </div>
    );
}

export default Sidebar;