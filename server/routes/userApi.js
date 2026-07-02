const express = require("express");
const router = express.Router();
const userController = require("../controller/UserController");

// Định nghĩa route để lấy tất cả người dùng
router.get("/users", userController.getAllUsers);

// Định nghĩa route để đăng ký người dùng mới
router.post("/register", userController.registerNewUser);



module.exports = router;