import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UserInfoModal from './UserInfoModal';


function UserList({ toggleModal }) {

    const [users, setUsers] = useState([]);

    const [openEditModal, setOpenEditModal] = useState(false)

    const [selectedUser, setSelectedUser] = useState({});


    // muốn lấy data từ back-end về thì ban đầu phải khai báo useState cho users để quản lí
    // dùng axios lấy data từ back-end về
    const getUserList = () => {
        axios.get("http://localhost:3000/api/admin/users/list")
            .then(res => { setUsers(res.data); console.log(res.data); })
            .catch(err => { console.log(err) });
    }
    //dùng useEffect để get data 
    useEffect(() => {
            getUserList();
        }, []);

   



    // lấy level của user từ hàm map bên dưới rồi render theo điều kiện
    const renderRole = (level, index) => {
        if (level === 0) {
            return <span key={index} className="role-badge admin">
                Admin
                <svg className="chevron" width="10" height="10" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </span>
        } else if (level === 1) {
            return <span key={index} className="role-badge user">
                User
                <svg className="chevron" width="10" height="10" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </span>
        }

        return null
    }


    const renderUserList = () => {
        return users.map((user, index) => {
            return <tr key={index}>
                <td>
                    <input type="checkbox" className="checkbox" />
                </td>
                <td>
                    <div className="user-cell">
                        <div className="user-avatar">{user.name.charAt(0)}</div>
                        <div>
                            <div className="user-info-name">{user.name}</div>
                            <div className="user-info-email">{user.email}</div>
                        </div>
                    </div>
                </td>
                <td>
                    {renderRole(user.level, index)}
                </td>

                <td>
                    <div className="action-cell">
                        <button className="action-icon-btn edit" onClick={() => getExactlyUserById(user.id)}>
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

        });
    }

    const toggleEditModal = () => {
        setOpenEditModal(!openEditModal)
    }




    const getExactlyUserById = (id) => {


        axios.get(`http://localhost:3000/api/admin/users/show/${id}`)
            .then(res => {
                setSelectedUser(res.data);
                setOpenEditModal(true);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
        return selectedUser
    }

    return (
        <div>
            <div className="users-table-wrap">
                <table className="users-table">
                    <thead>
                        <tr>
                            <th className="th-checkbox">
                                <input type="checkbox" className="checkbox" />
                            </th>
                            <th>Avatar</th>

                            <th>
                                <span className="th-sort">
                                    Role

                                </span>
                            </th>

                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {renderUserList()}

                    </tbody>
                </table>

                <UserInfoModal selectedUser={selectedUser} isOpen={openEditModal} onClose={toggleEditModal}  getUserList={getUserList}/>
            </div>
        </div>
    );
}

export default UserList;