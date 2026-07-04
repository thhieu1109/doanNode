const express = require("express");
const router = express.Router();
const userController = require("../controller/UserController");
//gọi tới module uploadFile để xử lý tệp hình ảnh
const uploadFile = require('../config/multer');

// Định nghĩa route để lấy tất cả người dùng
router.get("/list", userController.getAllUsers);

// Định nghĩa route để đăng ký người dùng mới
router.post("/register", userController.registerNewUser);

// Định nghĩa route để lấy thông tin người dùng theo id
router.get("/show/:id", userController.getUserById);
// Định nghĩa route để cập nhật thông tin người dùng theo id
router.put("/update/:id", uploadFile, userController.updateUserById);
// Định nghĩa route để xóa người dùng theo id
router.delete("/delete/:id", userController.deleteUserById);

module.exports = router;