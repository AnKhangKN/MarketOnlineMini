const fs = require("fs");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = "./uploads/shopAvatars"; // Nơi lưu ảnh

        // Tạo thư mục nếu chưa có
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true }); // recursive để tạo folder lồng nhau nếu cần
        }

        cb(null, dir);
    },

    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const fileName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
        cb(null, fileName);
    },
});

const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpg|jpeg|png|gif|bmp/;
    const ext = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mime = allowedTypes.test(file.mimetype);

    if (ext && mime) cb(null, true);
    else cb(new Error("Chỉ cho phép upload file ảnh"));
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
