const userModel = require('../model/User');



const handleLogin = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Please enter email and password" });
    }

    // hàm tìm kiếm user bằng level và email bên ORM
    const user = await userModel.getUserByEmail(email);

    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }

    if (user.password !== password) {
        return res.status(400).json({ message: "Incorrect password" });
    }

    if (user || user.level === 0) {
        // trả thêm trong json của server về client thêm data của user, nếu trả mỗi message thì ở client bị undefined
        // ở bên trên đã khai báo biến user lấy data từ mySQL bằng ORM nên sẽ trả về đầy đủ thông tin user trong đó
        // và sau đó ta gán cho data trả về cho client bằng user là client nhận dc thông tin user rồi
        return res.status(200).json({ data: user, message: "Admin login successful" });
    }

    res.status(200).json({ data: user, message: "User login successful" });
}

module.exports = { handleLogin }