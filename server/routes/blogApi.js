const express = require("express");
const router = express.Router();
const blogController = require("../controller/blogController");

// dùng riêng upload cho Blog, field 'image', khác hẳn upload của User
const { uploadBlogImage } = require('../config/multer');

router.get("/list", blogController.getAllBlogs);

router.get("/show/:id", blogController.getBlogById);

router.post("/add", uploadBlogImage, blogController.createBlog);

router.put("/edit/:id", uploadBlogImage, blogController.updateBlogById);

router.delete("/delete/:id", blogController.deleteBlogById);

module.exports = router;