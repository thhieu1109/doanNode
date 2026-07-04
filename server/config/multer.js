const multer = require('multer');
const path = require('path');


// Thiết lập Multer để xử lý tệp hình ảnh
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/users'); // Thư mục lưu trữ tệp hình ảnh (phải tạo sẵn)
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage }).single('avatar'); // 'avatar' là tên trường trong form gửi lên

module.exports = upload;