import React, { useState } from 'react';
import "../style/RegisterUserModal.css"
import axios from 'axios';
function RegisterUserModal({ onClose, getUserList }) {

    const [errors, setErrors] = useState({});

    const [confirmPassword, setConfirmPassword] = useState("");

    const handleCloseModal = () => {
        // Call the onClose prop function to close the modal
        if (onClose) {
            onClose();
        }
    }

    // tạo object form để lưu value từ form
    // không cần confirmPass, cái đó chỉ để check validate sau
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",

    });

    // thường thì mỗi ô input sẽ có một hàm onChange riêng của nó, nhưng như vậy gặp form lớn thì code dài lắm
    // nên viết gộp thành một function lấy input value rồi truyền value vô object formData
    // viết xong hàm rồi truyền onChange với handleInputChange
    const handleInputChange = (e) => {
        const fieldInput = e.target.name; // dùng để lấy tên attribute HTML trường input(name, email,....)
        const value = e.target.value; // dùng để lấy giá trị input
        setFormData({
            ...formData,
            [fieldInput]: value
        })
    }

    // viết xong hàm lấy value input truyền vô object data rồi thì viết hàm submit cho form để gửi lên back-end
    // dùng axios để gửi value trong forrm data lên back-end
    // nhưng trước đó chúng ta cx nên cần validate dữ lieu trên client side trên form, viết hàm validate rồi truyền với handle submit


    const handleSubmit = (e) => {
        e.preventDefault();

        // cẩn thận với mấy hàm được truyền vào làm điều kiện
        // mấy hàm đó phải có return về gì true or false
        // nếu không thì sẽ thành undefine
        // mà undefine thì if không chạy dc đâu
        if (validateRegisterForm() && handleConfirmPassword()) {
            axios.post(`http://localhost:3000/api/admin/users/register`, formData)
                .then((res) => { console.log(res); alert("Register success") })
                .catch((err) => { console.log(err); alert("Register fail") })
            console.log(formData);
        }
        onClose()
        window.location.reload();
    }

    // muốn viết validate, trước hết nên có state quản lí lỗi đã, nên khai báo state lỗi ở trên
    const validateRegisterForm = () => {
        const errorsInForm = {};
        let valid = true;

        if (!formData.name) {
            errorsInForm.name = 'Name is required';
            valid = false;
        }
        if (!formData.email) {
            errorsInForm.email = 'Email is required';
            valid = false;
        }
        if (!formData.password) {
            errorsInForm.password = 'Password is required';
            valid = false;
        }
        console.log(errorsInForm);

        setErrors(errorsInForm);
        return valid;


    }

    //sau khi validate mấy cái input để gửi back-end xong, ta viết validate cái confirm password
    // tất nhiên cần khai báo useState lỗi bên trên
    // viết hàm handleConfirmPasswordInput rồi truyền onChange với handleConfirmPasswordInput vì không thể truyền chung với handleInputChange do khác object
    // sau đó viết hàm validate cái confirm thôi

    const handleConfirmPasswordInput = (e) => {
        const confirmPasswordField = e.target.name
        const value = e.target.value
        setConfirmPassword(value)
    }
    const handleConfirmPassword = (e) => {
        if (confirmPassword !== formData.password) {
            alert("Password not match")
            return false
        }
        return true

    }


    return (
        <div>
            <div className="modal-overlay">
                <div className="register-modal">
                    {/* Header */}
                    <div className="modal-header">
                        <div className="modal-title-group">
                            <h2 className="modal-title">Register user</h2>
                            <p className="modal-subtitle">Create a new account for the platform</p>
                        </div>
                        <button className="modal-close-btn" onClick={handleCloseModal}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>

                    {/* Form */}
                    <div className="register-form">
                        {/* Name */}
                        <div className="form-field">
                            <label className="form-label">Name</label>
                            <div className="input-wrap">
                                <span className="field-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8" />
                                        <path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                    </svg>
                                </span>
                                <input className="form-input" type="text" placeholder="Enter full name" onChange={handleInputChange} name="name" />
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
                                <input className="form-input" type="email" placeholder="Enter email address" onChange={handleInputChange} name="email" />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="form-field">
                            <label className="form-label">Password</label>
                            <div className="input-wrap">
                                <span className="field-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.8" />
                                        <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                    </svg>
                                </span>
                                <input className="form-input" type="password" placeholder="Create a password" onChange={handleInputChange} name="password" />
                                <button className="toggle-visibility-btn">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z" stroke="currentColor" strokeWidth="1.8" />
                                        <circle cx="12" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.8" />
                                    </svg>
                                </button>
                            </div>
                            {/* <div className="password-hint">
                                <span className="dot" />
                                At least 8 characters, 1 number and 1 uppercase letter
                            </div> */}
                        </div>

                        {/* Confirm Password */}
                        <div className="form-field">
                            <label className="form-label">Confirm password</label>
                            <div className="input-wrap">
                                <span className="field-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.8" />
                                        <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                    </svg>
                                </span>
                                <input className="form-input" type="password" placeholder="Re-enter password" onChange={handleConfirmPasswordInput} name="confirmPassword" />
                                <button className="toggle-visibility-btn">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z" stroke="currentColor" strokeWidth="1.8" />
                                        <circle cx="12" cy="12" r="2.6" stroke="currentColor" strokeWidth="1.8" />
                                    </svg>
                                </button>
                            </div>
                        </div>



                        {/* Actions */}
                        <div className="modal-actions">
                            <button className="btn-cancel" onClick={onClose}>Cancel</button>
                            <button className="btn-submit" onClick={handleSubmit}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                                </svg>
                                Register user
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterUserModal;