import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import BlogInfoModal from './BlogInfoModal';
import "../styles/BlogList.css"

function BlogList(props) {
    const [blogs, setBlogs] = useState([]);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [selectedBlog, setSelectedBlog] = useState({});

    const getBlogList = () => {
        axios.get("http://localhost:3000/api/admin/blog/list")
            .then(res => { setBlogs(res.data); console.log(res.data); })
            .catch(err => { console.log(err) });
    }

    useEffect(() => {
        getBlogList();
    }, [])


    const truncate = (text, max = 60) => {
        if (!text) return '';
        return text.length > max ? text.slice(0, max) + '…' : text;
    }

    const renderBlogList = () => {
        return blogs.map((blog, index) => {
            return <tr key={index}>
                <td>
                    <input type="checkbox" className="checkbox" />
                </td>
                <td>
                    <div className="blog-cell">
                        <div className="blog-thumb">
                            {blog.image
                                ? <img src={`http://localhost:3000/uploads/blogs/${blog.image}`} alt={blog.title} />
                                : <span className="thumb-placeholder">No image</span>
                            }
                        </div>
                        <div>
                            <div className="blog-title">{blog.title}</div>
                            <div className="blog-description">{truncate(blog.description)}</div>
                        </div>
                    </div>
                </td>
                <td>
                    <div className="action-cell">
                        <button className="action-icon-btn edit" onClick={() => getExactlyBlogById(blog.id)}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M4 20l4.2-.6L19.6 8.1a1.5 1.5 0 0 0 0-2.1l-1.6-1.6a1.5 1.5 0 0 0-2.1 0L4.6 15.8 4 20z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <button className="action-icon-btn delete" onClick={() => handleDeleteBlogById(blog.id)}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M4 7h16M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2m2 0v13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V7h10z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </td>
            </tr>
        });
    }

    const getExactlyBlogById = (id) => {
        axios.get(`http://localhost:3000/api/admin/blog/show/${id}`)
            .then(res => {
                setSelectedBlog(res.data);
                setOpenEditModal(true);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    const handleDeleteBlogById = (id) => {
        axios.delete(`http://localhost:3000/api/admin/blog/delete/${id}`)
            .then(res => {
                alert("Delete success");
                getBlogList();
            }).catch(err => {
                console.log(err);
            })
    }

    const toggleEditModal = () => {
        setOpenEditModal(!openEditModal);
    }

    return (
        <div>
            <div className="blog-table-wrap">
                <table className="blog-table">
                    <thead>
                        <tr>
                            <th className="th-checkbox">
                                <input type="checkbox" className="checkbox" />
                            </th>
                            <th>Blog</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderBlogList()}
                    </tbody>
                </table>

                <BlogInfoModal selectedBlog={selectedBlog} isOpen={openEditModal} onClose={toggleEditModal} getBlogList={getBlogList} />
            </div>
        </div>
    );
}

export default BlogList;