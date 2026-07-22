
const blogModel = require('../model/Blog')


const getAllBlogs = async (req, res) => {
    const data = req.body
    const blogs = await blogModel.getAllBlogs(data)
    res.status(200).json(blogs)
}
const getBlogById = async (req, res) => {
    const id = parseInt(req.params.id)

    const blog = await blogModel.getBlogById(id)
    res.status(200).json(blog)
}

const createBlog = async (req, res) => {
    const data = req.body

    const blogImg = req.file ? req.file.filename : null

    if (blogImg) {
        data.image = blogImg
    }
    const blog = await blogModel.createBlog(data)
    res.status(200).json(blog)
}

const updateBlogById = async (req, res) => {
    const id = parseInt(req.params.id)
    const data = req.body

    const blogImg = req.file ? req.file.filename : null

    if (blogImg) {
        data.image = blogImg
    }

    const blog = await blogModel.updateBlogById(id, data)
    res.status(200).json(blog)
}

const deleteBlogById = async (req, res) => {
    const id = parseInt(req.params.id)
    const blog = await blogModel.deleteBlogById(id)
    res.status(200).json(blog)
}

module.exports = { getAllBlogs, getBlogById, createBlog, updateBlogById, deleteBlogById }