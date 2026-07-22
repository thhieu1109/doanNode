const multer = require('multer');
const path = require('path');

// Hàm tạo storage dùng chung cho nhiều loại upload (users, blogs, ...)
// chỉ cần truyền tên thư mục lưu trữ tương ứng
function createStorage(folderName) {
    return multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, `public/uploads/${folderName}`); // thư mục phải tạo sẵn
        },
        filename: (req, file, cb) => {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
            cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
        },
    });
}

// Upload avatar cho User — field 'avatar', lưu vào public/uploads/users
const uploadUserAvatar = multer({ storage: createStorage('users') }).single('avatar');

// Upload ảnh cho Blog — field 'image', lưu vào public/uploads/blogs
const uploadBlogImage = multer({ storage: createStorage('blogs') }).single('image');

module.exports = { uploadUserAvatar, uploadBlogImage };