import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import "../styles/AddBlogModal.css"
function AddBlogModal({ isOpen, onClose }) {

    const [errors, setErrors] = useState({});

    const [blogImage, setBlogImage] = useState(null);

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        content: "",
    });

    const handleCloseModal = () => {
        if (onClose) {
            onClose();
        }
    }



    const handleInputChange = (e) => {
        const fieldInput = e.target.name;
        const value = e.target.value;
        setFormData({
            ...formData,
            [fieldInput]: value
        })
    }

    const handleUploadImage = (e) => {
        const file = e.target.files[0];
        if (!file) {
            return alert("Please select an image file.");
        }
        setBlogImage(file);
    }

    const validateRegisterForm = () => {
        const errorsInForm = {};
        let valid = true;

        if (!formData.title) {
            errorsInForm.title = 'Title is required';
            valid = false;
        }
        if (!formData.description) {
            errorsInForm.description = 'Description is required';
            valid = false;
        }
        if (!formData.content) {
            errorsInForm.content = 'Content is required';
            valid = false;
        }
        setErrors(errorsInForm);
        return valid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateRegisterForm()) {
            // dùng FormData vì có kèm ảnh, backend (multer) đọc field text lẫn file trong cùng request
            const submitData = new FormData();
            submitData.append('title', formData.title);
            submitData.append('description', formData.description);
            submitData.append('content', formData.content);
            submitData.append('image', blogImage);


            axios.post(`http://localhost:3000/api/admin/blog/add`, submitData)
                .then((res) => {
                    console.log(res);
                    alert("Register success");
                    getBlogList();
                    onClose();
                })
                .catch((err) => {
                    console.log(err);
                    alert("Register fail");
                })
        }
    }

    return (
        <div>
            <div className="modal-overlay">
                <div className="register-blog-modal">
                    {/* Header */}
                    <div className="modal-header">
                        <div className="modal-title-group">
                            <h2 className="modal-title">Write blog</h2>
                            <p className="modal-subtitle">Create a new blog post</p>
                        </div>
                        <button className="modal-close-btn" onClick={handleCloseModal}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>

                    {/* Form */}
                    <div className="register-form">
                        {/* Cover image */}
                        <div className="form-field">
                            <label className="form-label">Cover image</label>
                            <div className="image-upload-wrap">
                                <div
                                    className="image-preview"
                                    style={{
                                        backgroundImage: blogImage ? `url(${URL.createObjectURL(blogImage)})` : 'none'
                                    }}
                                >
                                    {!blogImage && <span className="image-preview-placeholder">Click to upload</span>}
                                </div>
                                <input type="file" className="image-input" onChange={handleUploadImage} accept="image/*" />
                            </div>
                        </div>

                        {/* Title */}
                        <div className="form-field">
                            <label className="form-label">Title</label>
                            <div className="input-wrap">
                                <span className="field-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <path d="M4 6h16M4 12h16M4 18h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                    </svg>
                                </span>
                                <input className="form-input" type="text" placeholder="Enter blog title" onChange={handleInputChange} name="title" />
                            </div>
                            {errors.title && <div className="field-error">{errors.title}</div>}
                        </div>

                        {/* Description */}
                        <div className="form-field">
                            <label className="form-label">Description</label>
                            <textarea className="form-textarea" rows="2" placeholder="Short summary of the blog" onChange={handleInputChange} name="description" />
                            {errors.description && <div className="field-error">{errors.description}</div>}
                        </div>

                        {/* Content */}
                        <div className="form-field">
                            <label className="form-label">Content</label>
                            <textarea className="form-textarea content-textarea" rows="6" placeholder="Write the blog content here" onChange={handleInputChange} name="content" />
                            {errors.content && <div className="field-error">{errors.content}</div>}
                        </div>

                        {/* Actions */}
                        <div className="modal-actions">
                            <button className="btn-cancel" onClick={onClose}>Cancel</button>
                            <button className="btn-submit" onClick={handleSubmit}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                                </svg>
                                Publish blog
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddBlogModal;