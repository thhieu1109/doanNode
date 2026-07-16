import React, { useState } from 'react';
import '../style/UsersPage.css';
import RegisterUserModal from '../components/RegisterUserModal';
import UserList from '../components/UserList';

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
        <div className="content-card">
            {/* Header */}
            <div className="page-header">
                <h1 className="page-title">Signed users</h1>
                <span className="page-count-badge"></span>
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
            <UserList toggleModal={toggleModal} />

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
    );
}

export default UsersPage;