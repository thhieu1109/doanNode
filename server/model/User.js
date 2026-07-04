/*
 * PrismaClient là class được Prisma tự động generate. vào thư mục 'generated' sẽ thấy file 'client.js' chứa class này. 
 * Class này có tất cả các method để thao tác với database, được tạo dựa trên schema.prisma của bạn.
 * Đây là destructuring assignment, bạn có thể import trực tiếp PrismaClient từ file client.js mà không cần phải import cả file.
 * Cần tạo một object từ class này để có thể thao tác với database.
 * Object 'prisma' sẽ được dùng để CRUD dữ liệu:
 * - prisma.user.findMany()
 * - prisma.user.create()
 * - prisma.product.update()
 * ... 
 */

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

const getUserById = async (id) => {
    // sử dụng phương thức findUnique của prisma để tìm kiếm người dùng theo id
    return await prisma.user.findUnique({ where: { id: parseInt(id) } });
}


const updateUserById = async (id, data) => {
    // sử dụng phương thức update của prisma để cập nhật thông tin người dùng theo id
    return await prisma.user.update({ where: { id: parseInt(id) }, data: data });
}
const deleteUserById = async (id) => {
    // sử dụng phương thức delete của prisma để xóa người dùng theo id
    return await prisma.user.delete({ where: { id: parseInt(id) } });
}


const getUserByEmail = async (email) => {
    return await prisma.user.findUnique({ where: { email } });
}
module.exports = {
    getAllUsers,
    registerNewUser,
    getUserById,
    updateUserById,
    deleteUserById,
    getUserByEmail
}