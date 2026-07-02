const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllUsers = async (data) => {
    return await prisma.user.findMany();

    // sau khi viết xong hàm, do nhận thấy việc truy vấn từ database có lẽ sẽ mất thời gian khá lâu
    // nên cần phải sử dụng async/await để đảm bảo rằng dữ liệu được trả về sau khi truy vấn xong
    // cần đặt cú pháp await trước hàm truy vấn findMany() của prisma.user
    // mà có cú pháp await thì hàm getAllUsers phải được khai báo là async
}


const registerNewUser = async (data) => {
    // do bên controler đã dùng destructuring để lấy dữ liệu thực sự cần từ request body
    // nên ở đây ORM dùng destructuring để lấy dữ liệu thực sự cần từ data
    // nếu không dùng destructuring thì ORM sẽ lấy tất cả dữ liệu từ data, kể cả những dữ liệu không cần thiết
    // và khi đó sẽ gây ra lỗi khi thêm người dùng mới vào cơ sở dữ liệu, vì cơ sở dữ liệu chỉ chấp nhận những trường dữ liệu cần thiết
    return await prisma.user.create({ data: { name: data.name, email: data.email, password: data.password } });
}



module.exports = {
    getAllUsers,
    registerNewUser
}