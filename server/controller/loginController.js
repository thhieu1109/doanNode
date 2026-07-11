const userModel = require('../model/User');

const handleAdminLogin = async (req, res) => {

    const { email, password, level } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Please enter email and password" });
    }

    // hàm tìm kiếm user bằng level bên ORM
    const user = await userModel.getAdmin(level);

    if (!user) {
        return res.status(400).json({ message: "Admin not found" });
    }

    if (user.password !== password) {
        return res.status(400).json({ message: "Incorrect password" });
    }

    res.status(200).json({ message: "Admin login successful" });




}

module.exports = { handleAdminLogin }