
// gọi tới module userModel để thao tác với cơ sở dữ liệu
const userModel = require('../model/User');

// gọi tới module userValidate để validate dữ liệu người dùng
const userValidation = require('../validation/userValidate');

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

    // tạo biến input errors để lưu trữ các lỗi validate ở input,
    //  nếu có lỗi validate thì trả về lỗi cho client bằng phương thức res.status(400).json(errors)
    //gọi tới hàm validateRegisterNewUser trong module userValidate để validate dữ liệu người dùng
    // do destructuring ở trên nên chỉ cần truyền vào 3 trường dữ liệu thực sự cần là name, email, password
    const inputErrors = userValidation.validateRegisterNewUser({ name, email, password })

    //nếu độ dài của object errors lớn hơn 0 thì có nghĩa là có lỗi validate,
    //  trả về lỗi cho client bằng phương thức res.status(400).json(errors)
    if (Object.keys(inputErrors).length > 0) {
        return res.status(400).json(inputErrors);
    }

    // tạo biến uniqueEmailErrors để lưu trữ các lỗi validate email đã tồn tại hay chưa
    //gọi tới hàm validateUniqueEmail trong module userValidate để validate email đã tồn tại hay chưa
    // do destructuring ở trên nên chỉ cần truyền vào trường dữ liệu email
    const uniqueEmailErrors = await userValidation.validateUniqueEmail(email);

    //nếu độ dài của object errors lớn hơn 0 thì có nghĩa là có lỗi validate,
    //  trả về lỗi cho client bằng phương thức res.status(400).json(errors)
    if (Object.keys(uniqueEmailErrors).length > 0) {
        return res.status(400).json(uniqueEmailErrors);
    }

    // tạo biến emailFormatErrors để lưu trữ các lỗi validate định dạng email
    //gọi tới hàm validateEmailFormat trong module userValidate để validate định dạng email
    // do destructuring ở trên nên chỉ cần truyền vào trường dữ liệu email
    const emailFormatErrors = userValidation.validateEmailFormat(email);

    //nếu độ dài của object errors lớn hơn 0 thì có nghĩa là có lỗi validate,
    //  trả về lỗi cho client bằng phương thức res.status(400).json(errors)
    if (Object.keys(emailFormatErrors).length > 0) {
        return res.status(400).json(emailFormatErrors);
    }

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

const getUserById = async (req, res) => {
    // tạo biến id để lấy dữ liệu từ request
    const { id } = req.params;
    // tạo biến user để lấy dữ liệu từ hàm getUserById trong model
    // truyền id vào hàm getUserById trong model User
    const user = await userModel.getUserById(id);
    // check nếu user tồn tại thì trả về dữ liệu cho client bằng phương thức res.status(200).json(user)
    // nếu không tồn tại thì trả về lỗi 404 cho client bằng phương thức res.status(404).json({ message: "User not found" })
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
}

const updateUserById = async (req, res) => {
    // tạo biến id để lấy dữ liệu từ request
    const { id } = req.params;
    // tạo biến data để lấy dữ liệu từ request body
    const data = req.body;
    // front-end dùng form-data append, nên ghi gửi req sẽ là string nên cần parseInt để nó chuyển qua number                                                                                                                                                                                                                  
    data.level = parseInt(data.level);
    // lấy đường dẫn tệp hình ảnh từ request file,
    //  nếu không có thì gán giá trị null
    const avatarName = req.file ? req.file.filename : null;

    //format của req.file như thế này:
    // {
    //   fieldname: "avatar",                         // tên của input trong form
    //   originalname: "me.jpg",                      // tên file gốc người dùng upload
    //   encoding: "7bit",                            // encoding
    //   mimetype: "image/jpeg",                      // loại file

    //   destination: "public/uploads/users",         // thư mục lưu
    //   filename: "avatar-1783171563543-709470632.jpg", // tên file sau khi Multer đổi
    //   path: "public/uploads/users/avatar-1783171563543-709470632.jpg", // đường dẫn
    //   size: 35672                                 // kích thước (byte)
    // }
    //  nên để lấy tên file thì chỉ cần lấy req.file.filename là được

    // tạo biến input errors để lưu trữ các lỗi validate ở input,
    //  nếu có lỗi validate thì trả về lỗi cho client bằng phương thức res.status(400).json(errors)
    //gọi tới hàm validateRegisterNewUser trong module userValidate để validate dữ liệu người dùng
    // do destructuring ở trên nên chỉ cần truyền vào 3 trường dữ liệu thực sự cần là name, email, password
    const inputErrors = userValidation.validateRegisterNewUser({ name: data.name, email: data.email, password: data.password });

    //nếu độ dài của object errors lớn hơn 0 thì có nghĩa là có lỗi validate,
    //  trả về lỗi cho client bằng phương thức res.status(400).json(errors)
    if (Object.keys(inputErrors).length > 0) {
        return res.status(400).json(inputErrors);
    }

    // tạo biến emailFormatErrors để lưu trữ các lỗi validate định dạng email
    //gọi tới hàm validateEmailFormat trong module userValidate để validate định dạng email
    // do destructuring ở trên nên chỉ cần truyền vào trường dữ liệu email
    const emailFormatErrors = userValidation.validateEmailFormat(data.email);

    //nếu độ dài của object errors lớn hơn 0 thì có nghĩa là có lỗi validate,
    //  trả về lỗi cho client bằng phương thức res.status(400).json(errors)
    if (Object.keys(emailFormatErrors).length > 0) {
        return res.status(400).json(emailFormatErrors);
    }

    // tạo biến input errors để lưu trữ các lỗi validate ở input,
    //  nếu có lỗi validate thì trả về lỗi cho client bằng phương thức res.status(400).json(errors)
    //gọi tới hàm validateRegisterNewUser trong module userValidate để validate dữ liệu người dùng

    const phoneNumberFormatErrors = userValidation.validatePhoneNumberFormat(data.phone);

    if (Object.keys(phoneNumberFormatErrors).length > 0) {
        return res.status(400).json(phoneNumberFormatErrors);
    }

    // tạo biến avatarFormatErrors để lưu trữ các lỗi validate định dạng tệp hình ảnh
    //gọi tới hàm avatarFormat trong module userValidate để validate định dạng tệp hình ảnh
    // cần truyền luôn req.file vào hàm avatarFormat để kiểm tra định dạng tệp hình ảnh
    // bởi vì req.file ms có minetype để check, còn data.avatar chỉ có tên tệp hình ảnh thôi, không có minetype
    const avatarFormatErrors = userValidation.avatarFormat(req.file);

    if (Object.keys(avatarFormatErrors).length > 0) {
        return res.status(400).json(avatarFormatErrors);
    }

    if (avatarName) {
        // check nếu có tệp hình ảnh up lên thì gán đường dẫn tệp hình ảnh vào data.avatar
        data.avatar = avatarName;
    }

    // tạo biến updatedUser để lấy dữ liệu từ hàm updateUserById trong model
    // truyền id và data vào hàm updateUserById trong model User
    const updatedUser = await userModel.updateUserById(id, data);

    res.status(200).json(updatedUser);
}

const deleteUserById = async (req, res) => {
    // tạo biến id để lấy dữ liệu từ request
    const { id } = req.params;
    // tạo biến deletedUser để lấy dữ liệu từ hàm deleteUserById trong model
    // truyền id vào hàm deleteUserById trong model User
    const deletedUser = await userModel.deleteUserById(id);

    res.status(200).json({ message: `User with id ${id} has been deleted successfully` });
}



module.exports = {
    getAllUsers,
    registerNewUser,
    getUserById,
    updateUserById,
    deleteUserById
}




