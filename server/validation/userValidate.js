//gọi tới module User đ để thao tác với cơ sở dữ liệu(tìm email đã tồn tại hay chưa, thêm người dùng mới vào cơ sở dữ liệu)
const userModel = require("../model/User");

const validateRegisterNewUser = (data) => {
    //tạo biến errors để lưu trữ các lỗi validate
    const errors = {}

    if (!data.name || data.name.trim() === '') {
        errors.name = 'Name is required';
    }
    if (!data.email || data.email.trim() === '') {
        errors.email = 'Email is required';
    }
    if (!data.password || data.password.trim() === '') {
        errors.password = 'Password is required';
    }

    //trả về biến errors để kiểm tra xem có lỗi validate hay không
    return errors;


}

const validateUniqueEmail = async (email) => {
    //tạo biến errors để lưu trữ các lỗi validate
    const errors = {}

    // kiểm tra xem email đã tồn tại trong cơ sở dữ liệu hay chưa
    const existingEmail = await userModel.getUserByEmail(email);
    if (existingEmail) {
        errors.email = 'Email already exists';
    }

    //trả về biến errors để kiểm tra xem có lỗi validate hay không
    return errors;
}

const validateEmailFormat = (email) => {
    //tạo biến errors để lưu trữ các lỗi validate
    const errors = {}

    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
    if (!emailRegex.test(email)) {
        errors.email = 'Invalid email format';
    }

    //trả về biến errors để kiểm tra xem có lỗi validate hay không
    return errors;
}

const validatePhoneNumberFormat = (phoneNumber) => {

    //tạo biến errors để lưu trữ các lỗi validate
    const errors = {}

    if (phoneNumber && phoneNumber.length > 10) {
        errors.phone = "Phone must not exceed 10 digits";
    }

    //trả về biến errors để kiểm tra xem có lỗi validate hay không    
    return errors;
}

const avatarFormat = (avatar) => {
    //tạo biến errors để lưu trữ các lỗi validate
    const errors = {}

    const allowedFormat = ['image/jpeg', 'image/png', 'image/gif', 'image/jpg'];

    if (avatar && !allowedFormat.includes(avatar.mimetype)) {
        errors.avatar = 'Invalid avatar format. Only JPEG, PNG, GIF, and JPG are allowed.';
    }

    const maxSize = 1024 * 1024; // 1MB
    if (avatar && avatar.size > maxSize) {
        errors.avatar = 'Avatar file size exceeds the limit of 1MB.';
    }

    return errors;
}
module.exports = {
    validateRegisterNewUser,
    validateUniqueEmail,
    validateEmailFormat,
    validatePhoneNumberFormat,
    avatarFormat
}