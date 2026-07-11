import React, { useEffect, useState } from 'react';
import "../style/UserInfoModal.css"
import axios from 'axios';

function UserInfoModal({ selectedUser, isOpen, onClose, getUserList }) {

    if (!isOpen || !selectedUser) return null;
    console.log(selectedUser)

    // state quản lý thông tin user khi edit
    const [userInfoBeforeEdit, setUserInfoBeforeEdit] = useState({});
    // state quản lý file ảnh avatar
    const [userAvatar, setUserAvatar] = useState(null);


    // bấm edit user khác thì truyền dữ liệu user đó vào userInfoAfterEdit bằng useEffect

    useEffect(() => {
        setUserInfoBeforeEdit(selectedUser);
    }, [selectedUser]);

    const handleInputChange = (e) => {
        const fieldInput = e.target.name; // dùng để lấy tên attribute HTML trường input(name, email,....)
        const value = e.target.value; // dùng để lấy giá trị input
        // dùng shalow copy để lấy giá trị trước đó của user, rồi ghi đè thông tin cập nhật vào
        setUserInfoBeforeEdit({
            ...userInfoBeforeEdit,
            [fieldInput]: value
        })
    }
    
    const handleEditUser = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', userInfoBeforeEdit.name);
        formData.append('email', userInfoBeforeEdit.email);
        formData.append('password', userInfoBeforeEdit.password);
        formData.append('phone', userInfoBeforeEdit.phone);
        formData.append('address', userInfoBeforeEdit.address);
        // formData.append('id_country', userInfoBeforeEdit.id_country);
        formData.append('avatar', userAvatar);
        formData.append('level', userInfoBeforeEdit.level);
        // gửi thông tin sau cập nhật lên back-end bằng axios
        axios.put(`http://localhost:3000/api/admin/users/update/${selectedUser.id}`, formData)
            .then((res) => {
                console.log(res);
                alert("Update success");
                getUserList()
            })
            .catch((err) => {
                console.log(err.response.data);
                alert("Update fail")
            })

        onClose();

    }

    const handleUploadAvatar = (e) => {

        // e.target là chọn vô thẻ input có type là file
        // cái input ni có cái thuộc tính files nó là một mảng, nên nếu muốn lấy 1 ảnh thì sử dụng e.target.files[0]
        const file = e.target.files[0];
        console.log(file);
        if (!file) {
            return alert("Please select an image file.");
        }
        // đưa dữ liệu file vừa chọn vô state
        // nó là dạng object như sau
        //         File {
        //     name: "avatar.png",
        //     size: 104321,
        //     type: "image/png",
        //     lastModified: ...
        // }

        // sau đó dữ liệu file sẽ do formData và multer bên back-end xử lí
        setUserAvatar(file);
    }

    const renderUserInfoBeforeEdit = () => {
        // Kiểm tra an toàn nếu dữ liệu user chưa kịp tải xong
        if (!userInfoBeforeEdit) {
            return <div>Đang tải dữ liệu người dùng...</div>;
        }

        return (
            <div>
                {/* Khối ảnh đại diện (Avatar) */}
                <div className="avatar-block">
                    <div className="avatar-preview-wrap">
                        <div
                            className="avatar-preview"
                            style={{
                                backgroundImage: userAvatar
                                    ? `url(${URL.createObjectURL(userAvatar)})`
                                    : `url(${userInfoBeforeEdit.avatar})`,
                            }}
                        ></div>
                        <button className="avatar-edit-btn" type="button" >
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                                <path d="M4 20l4.2-.6L19.6 8.1a1.5 1.5 0 0 0 0-2.1l-1.6-1.6a1.5 1.5 0 0 0-2.1 0L4.6 15.8 4 20z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                            </svg>

                        </button>
                        <input type="file" className="avatar-input" onChange={handleUploadAvatar} />

                    </div>
                    <div>
                        <div className="avatar-meta-name">{userInfoBeforeEdit.name || 'Chưa cập nhật'}</div>
                        <div className="avatar-meta-file">{userInfoBeforeEdit.avatar || 'no-avatar.jpg'}</div>
                    </div>
                </div>

                {/* Form thông tin */}
                <div className="info-form">
                    {/* ID - Chỉ đọc */}
                    <div className="form-field">
                        <label className="form-label">
                            ID
                            <span className="readonly-tag">Chỉ đọc</span>
                        </label>
                        <div className="input-wrap">
                            <span className="field-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <rect x="3" y="4" width="18" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
                                    <path d="M7 9h10M7 13h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                </svg>
                            </span>
                            <input className="form-input readonly" type="text" value={userInfoBeforeEdit.id || ''} disabled readOnly />
                            <span className="lock-icon">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                    <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.8" />
                                    <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                </svg>
                            </span>
                        </div>
                    </div>

                    {/* Họ và tên */}
                    <div className="form-field">
                        <label className="form-label">Họ và tên</label>
                        <div className="input-wrap">
                            <span className="field-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8" />
                                    <path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                </svg>
                            </span>
                            <input className="form-input" type="text" defaultValue={userInfoBeforeEdit.name || ''} name="name" onChange={handleInputChange} />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="form-field">
                        <label className="form-label">Email</label>
                        <div className="input-wrap">
                            <span className="field-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <rect x="3" y="5" width="18" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
                                    <path d="M4 6.5l8 6 8-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <input className="form-input" type="email" defaultValue={userInfoBeforeEdit.email || ''} name='email' onChange={handleInputChange} />
                        </div>
                    </div>

                    {/* Số điện thoại */}
                    <div className="form-field">
                        <label className="form-label">Số điện thoại</label>
                        <div className="input-wrap">
                            <span className="field-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M6 3h3l1.5 4.5-2 1.5a12 12 0 0 0 6.5 6.5l1.5-2L21 15v3a2 2 0 0 1-2 2C10.7 20 4 13.3 4 5a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                                </svg>
                            </span>
                            <input className="form-input" type="tel" defaultValue={userInfoBeforeEdit.phone || ''} name='phone' onChange={handleInputChange} />
                        </div>
                    </div>

                    {/* Địa chỉ */}
                    <div className="form-field">
                        <label className="form-label">Địa chỉ</label>
                        <div className="input-wrap">
                            <span className="field-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 21s7-6.6 7-11.5A7 7 0 0 0 5 9.5C5 14.4 12 21 12 21z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                                    <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.8" />
                                </svg>
                            </span>
                            <input className="form-input" type="text" placeholder="Chưa cập nhật địa chỉ" defaultValue={userInfoBeforeEdit.address || ''} name="address" onChange={handleInputChange} disabled="disabled" />
                        </div>
                    </div>


                    {/* <div className="form-row">
                        <div className="form-field">
                            <label className="form-label">Quốc gia</label>
                            <div className="select-wrap">
                                <span className="field-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
                                        <path d="M3 12h18M12 3c2.5 2.5 2.5 15.5 0 18M12 3c-2.5 2.5-2.5 15.5 0 18" stroke="currentColor" strokeWidth="1.6" />
                                    </svg>
                                </span>
                                <select className="form-select" defaultValue={selectedUser.country || ''}>
                                    <option value="">Chưa chọn</option>
                                    <option value="VN">Việt Nam</option>
                                    <option value="US">Hoa Kỳ</option>
                                    <option value="JP">Nhật Bản</option>
                                    <option value="KR">Hàn Quốc</option>
                                </select>
                                <span className="select-chevron">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        
                    </div> */}

                    {/* Mật khẩu - Chỉ hiển thị và đổi */}
                    <div className="form-field">
                        <label className="form-label">
                            Mật khẩu
                            <span className="readonly-tag">Chỉ đọc</span>
                        </label>
                        <div className="password-display">
                            <div className="password-dots">••••••••</div>
                            <button className="btn-change-password" type="button">Đổi mật khẩu</button>
                        </div>
                    </div>

                    {/* Các nút hành động */}
                    <div className="modal-actions">
                        <button className="btn-cancel" type="button" onClick={onClose}>Hủy bỏ</button>
                        <button className="btn-submit" type="submit" onClick={handleEditUser}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            Lưu thay đổi
                        </button>
                    </div>
                </div>
            </div>
        )
    }



    return (
        <div>
            <div className="modal-overlay">
                <div className="info-modal">
                    {/* Header */}
                    <div className="modal-header">
                        <div className="modal-title-group">
                            <h2 className="modal-title">User information</h2>
                            <p className="modal-subtitle">View and edit user details</p>
                        </div>
                        <button className="modal-close-btn" onClick={onClose}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>

                    {renderUserInfoBeforeEdit()}

                </div>
            </div>
        </div>
    );
}

export default UserInfoModal;