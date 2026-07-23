const express = require("express");
const router = express.Router();
const loginController = require("../controller/loginController");

// Định nghĩa route để đăng nhập cho người dung
router.post("/login", loginController.handleLogin);

module.exports = router;