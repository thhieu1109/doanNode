const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const userModel = require('../model/User');

//một hàm trong express cần có 2 tham số là req và res,
//  trong đó req là request từ client gửi lên server, 
// còn res là response từ server trả về cho client
const getAllUsers = async (req, res) => {

    // lấy dữ liệu từ request body
    //express có các phuơng thức để lấy dữ liệu từ request body, ví dụ như req.body, req.query, req.params
    const data = req.body;
    // tạo biến users để lấy dữ liệu từ hàm getAllUsers trong model User
    // hàm getAllUsers trong model User chịu trách nhiệm thao tác ORM để trả về tất cả người dùng từ cơ sở dữ liệu
    const users = await userModel.getAllUsers(data);
    //sau khi lấy được dữ liệu từ model, trả về dữ liệu cho client bằng phương thức res.status(200).json(users)
    res.status(200).json(users);

    // sau khi viết xong hàm, do nhận thấy việc truy vấn từ database có lẽ sẽ mất thời gian khá lâu
    // nên cần phải sử dụng async/await để đảm bảo rằng dữ liệu được trả về sau khi truy vấn xong
    // cần đặt cú pháp await trước hàm truy vấn userModel.getAllUsers(data)
    // mà có cú pháp await thì hàm getAllUsers phải được khai báo là async
    // đó là cách sử dụng của async/await trong JavaScript, giúp cho việc xử lý bất đồng bộ trở nên dễ dàng hơn và tránh được callback hell
}

const registerNewUser = async (req, res) => {

    //dùng destructuring để lấy dữ liệu thực sự cần từ request body
    const { name, email, password } = req.body;

    // tạo biến newUser để lấy dữ liệu từ hàm registerNewUser trong model User
    // hàm registerNewUser trong model User 
    // chịu trách nhiệm thao tác ORM để thêm người dùng mới vào cơ sở dữ liệu
    const newUser = await userModel.registerNewUser({ name, email, password });
    //sau khi lấy được dữ liệu từ model, trả về dữ liệu cho client bằng phương thức res.status(200).json(users)
    res.status(201).json(newUser);

    // sau khi viết xong hàm, do nhận thấy việc truy vấn từ database có lẽ sẽ mất thời gian khá lâu
    // nên cần phải sử dụng async/await để đảm bảo rằng dữ liệu được trả về sau khi truy vấn xong
    // cần đặt cú pháp await trước hàm truy vấn userModel.registerNewUser(data)
    // mà có cú pháp await thì hàm registerNewUser phải được khai báo là async
    // đó là cách sử dụng của async/await trong JavaScript, giúp cho việc xử lý bất đồng bộ trở nên dễ dàng hơn và tránh được callback hell
}


module.exports = {
    getAllUsers,
    registerNewUser
}



