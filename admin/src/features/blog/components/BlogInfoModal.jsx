import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import "../styles/BlogInfoModal.css"

function BlogInfoModal({ isOpen, onClose, selectedBlog, getBlogList }) {

    const [blogInfoBeforeEdit, setBlogInfoBeforeEdit] = useState({});

    const [blogImage, setBlogImage] = useState(null);

    useEffect(() => {
        if (selectedBlog) {
            setBlogInfoBeforeEdit(selectedBlog);
        }
    }, [selectedBlog]);

    if (!isOpen || !selectedBlog) return null;

    const handleInputChange = (e) => {
        const fieldInput = e.target.name;
        const value = e.target.value;
        setBlogInfoBeforeEdit({
            ...blogInfoBeforeEdit,
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

    const handleEditBlog = (e) => {
        e.preventDefault();
        const submitData = new FormData();
        submitData.append('title', blogInfoBeforeEdit.title);
        submitData.append('description', blogInfoBeforeEdit.description);
        submitData.append('content', blogInfoBeforeEdit.content);
        if (blogImage) {
            submitData.append('image', blogImage);
        }

        axios.put(`http://localhost:3000/api/admin/blog/edit/${selectedBlog.id}`, submitData)
            .then((res) => {
                console.log(res);
                alert("Update success");
                getBlogList();
                onClose();
            })
            .catch((err) => {
                console.log(err.response?.data);
                alert("Update fail");
            })
    }

    return (
        <div>
            <div className="modal-overlay">
                <div className="blog-info-modal">
                    {/* Header */}
                    <div className="modal-header">
                        <div className="modal-title-group">
                            <h2 className="modal-title">Blog information</h2>
                            <p className="modal-subtitle">View and edit blog details</p>
                        </div>
                        <button className="modal-close-btn" onClick={onClose}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                            </svg>
                        </button>
                    </div>

                    <div className="info-form">
                        {/* Cover image */}
                        <div className="form-field">
                            <label className="form-label">Cover image</label>
                            <div className="image-upload-wrap">
                                <div
                                    className="image-preview"
                                    style={{
                                        backgroundImage: blogImage
                                            ? `url(${URL.createObjectURL(blogImage)})`
                                            : blogInfoBeforeEdit.image
                                                ? `url(http://localhost:3000/uploads/blogs/${blogInfoBeforeEdit.image})`
                                                : 'none'
                                    }}
                                >
                                    {!blogImage && !blogInfoBeforeEdit.image && <span className="image-preview-placeholder">Click to upload</span>}
                                </div>
                                <input type="file" className="image-input" onChange={handleUploadImage} accept="image/*" />
                            </div>
                        </div>

                        {/* ID - chỉ đọc */}
                        <div className="form-field">
                            <label className="form-label">
                                ID
                                <span className="readonly-tag">Read only</span>
                            </label>
                            <div className="input-wrap">
                                <span className="field-icon">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                        <rect x="3" y="4" width="18" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
                                        <path d="M7 9h10M7 13h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                    </svg>
                                </span>
                                <input className="form-input readonly" type="text" value={blogInfoBeforeEdit.id || ''} disabled readOnly />
                                <span className="lock-icon">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                        <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.8" />
                                        <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                    </svg>
                                </span>
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
                                <input className="form-input" type="text" defaultValue={blogInfoBeforeEdit.title || ''} name="title" onChange={handleInputChange} />
                            </div>
                        </div>

                        {/* Description */}
                        <div className="form-field">
                            <label className="form-label">Description</label>
                            <textarea className="form-textarea" rows="2" defaultValue={blogInfoBeforeEdit.description || ''} name="description" onChange={handleInputChange} />
                        </div>

                        {/* Content */}
                        <div className="form-field">
                            <label className="form-label">Content</label>
                            <textarea className="form-textarea content-textarea" rows="6" defaultValue={blogInfoBeforeEdit.content || ''} name="content" onChange={handleInputChange} />
                        </div>

                        {/* Actions */}
                        <div className="modal-actions">
                            <button className="btn-cancel" type="button" onClick={onClose}>Cancel</button>
                            <button className="btn-submit" type="submit" onClick={handleEditBlog}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogInfoModal;