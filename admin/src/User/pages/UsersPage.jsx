import React, { useState } from 'react';
import '../style/UsersPage.css';
import Sidebar from '../components/Sidebar';
import RegisterUserModal from '../components/RegisterUserModal';

function UsersPage(props) {

    // dùng useState để quản lý trạng thái hiển thị của modal đăng ký người dùng
    const [registerModalOpen, setRegisterModalOpen] = useState(false);

    // hàm toggleModal để thay đổi trạng thái hiển thị của modal
    const toggleModal = () => {
        setRegisterModalOpen(!registerModalOpen);

    }

    //hàm hiển thị modal đăng ký người dùng nếu registerModalOpen là true
    const renderRegisterUserModal = () => {
        if (registerModalOpen) {
            return <RegisterUserModal isOpen={registerModalOpen} onClose={toggleModal} />;
        }
        return null;
    };

    

    return (
        <div>
            <div className="idiomo-app">
                <Sidebar />

                {/* ================= MAIN ================= */}
                <main className="main-content">
                    <div className="content-card">
                        {/* Header */}
                        <div className="page-header">
                            <h1 className="page-title">Signed users</h1>
                            <span className="page-count-badge">1800</span>
                        </div>

                        {/* Toolbar */}
                        <div className="toolbar">
                            <div className="search-input-wrap">
                                <span className="search-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
                                        <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                    </svg>
                                </span>
                                <input
                                    className="search-input"
                                    type="text"
                                    placeholder="Tap name or email here"
                                />
                            </div>

                            <button className="btn-add-user" onClick={toggleModal}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                                </svg>
                                Register user
                            </button>
                        </div>

                        {/* Table */}
                        <div className="users-table-wrap">
                            <table className="users-table">
                                <thead>
                                    <tr>
                                        <th className="th-checkbox">
                                            <input type="checkbox" className="checkbox" />
                                        </th>
                                        <th>User</th>
                                        <th>
                                            <span className="th-sort">
                                                Role
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                        </th>
                                        <th>
                                            <span className="th-sort">
                                                Date added
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                        </th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { name: "Irina Sova", email: "mariasmith@mail.com", role: "admin", date: "12.03.2026" },
                                        { name: "Ruslan Grudistov", email: "mariasmith@mail.com", role: "admin", date: "28.12.2025" },
                                        { name: "Mirael", email: "mariasmith@mail.com", role: "moderator", date: "26.12.2025" },
                                        { name: "Mark Johnson", email: "mariasmith@mail.com", role: "user", date: "26.12.2025" },
                                        { name: "Maria Smith", email: "mariasmith@mail.com", role: "user", date: "24.12.2025" },
                                        { name: "Maria Smith", email: "mariasmith@mail.com", role: "user", date: "24.12.2025" },
                                        { name: "Maria Smith", email: "mariasmith@mail.com", role: "user", date: "22.12.2025" },
                                        { name: "Maria Smith", email: "mariasmith@mail.com", role: "user", date: "22.12.2025" },
                                        { name: "Maria Smith", email: "mariasmith@mail.com", role: "user", date: "26.10.2025" },
                                        { name: "Maria Smith", email: "mariasmith@mail.com", role: "user", date: "25.10.2025" },
                                    ].map((u, i) => (
                                        <tr key={i}>
                                            <td>
                                                <input type="checkbox" className="checkbox" />
                                            </td>
                                            <td>
                                                <div className="user-cell">
                                                    <div className="user-avatar">{u.name.charAt(0)}</div>
                                                    <div>
                                                        <div className="user-info-name">{u.name}</div>
                                                        <div className="user-info-email">{u.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className={`role-badge ${u.role}`}>
                                                    {u.role}
                                                    <svg className="chevron" width="10" height="10" viewBox="0 0 24 24" fill="none">
                                                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </span>
                                            </td>
                                            <td className="date-cell">{u.date}</td>
                                            <td>
                                                <div className="action-cell">
                                                    <button className="action-icon-btn edit">
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                            <path d="M4 20l4.2-.6L19.6 8.1a1.5 1.5 0 0 0 0-2.1l-1.6-1.6a1.5 1.5 0 0 0-2.1 0L4.6 15.8 4 20z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                                                        </svg>
                                                    </button>
                                                    <button className="action-icon-btn delete">
                                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                                            <path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m2 0v13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V7h10z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {renderRegisterUserModal()}

                        {/* Pagination */}
                        <div className="pagination">
                            <button className="pagination-link">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Previous
                            </button>

                            <div className="pagination-pages">
                                <button className="page-btn active">1</button>
                                <button className="page-btn">2</button>
                                <button className="page-btn">3</button>
                                <button className="page-btn">4</button>
                                <button className="page-btn">5</button>
                                <button className="page-btn dots">...</button>
                                <button className="page-btn">200</button>
                            </div>

                            <button className="pagination-link">
                                Next
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default UsersPage;