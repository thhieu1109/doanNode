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

const getAllBlogs = async () => {
    return await prisma.blog.findMany();
}

const getBlogById = async (id) => {
    return await prisma.blog.findUnique({ where: { id: id } });
}

const createBlog = async (data) => {
    return await prisma.blog.create({ data: data });
}

const updateBlogById = async (id, data) => {
    return await prisma.blog.update({ where: { id: id }, data: data });
}

const deleteBlogById = async (id) => {
    return await prisma.blog.delete({ where: { id: id } });
}

module.exports = { getAllBlogs, getBlogById, createBlog, updateBlogById, deleteBlogById };