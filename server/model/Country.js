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

const getAllCountry = async () => {
    return await prisma.country.findMany();
}

const getCountryById = async (id) => {
    return await prisma.country.findUnique({ where: { id: parseInt(id) } });
}

const createCountry = async (data) => {
    return await prisma.country.create({ data: data });
}

const updateCountryById = async (id, data) => {
    return await prisma.country.update({ where: { id: parseInt(id) }, data: data });
}

const deleteCountryById = async (id) => {
    return await prisma.country.delete({ where: { id: parseInt(id) } });
}
module.exports = {
    getAllCountry,
    getCountryById,
    createCountry,
    updateCountryById,
    deleteCountryById
};