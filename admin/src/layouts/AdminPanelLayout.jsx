import React from 'react';
import Sidebar from '../components/Layout/Sidebar';
import './AdminPanelLayout.css';

function AdminPanelLayout({ children }) {
    return (
        <div className="idiomo-app">
            <Sidebar />
            <main className="main-content">
                {children}
            </main>
        </div>
    );
}

export default AdminPanelLayout;