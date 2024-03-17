const multer = require("multer");
const fs = require("fs");

const myStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const path = "./public/uploads";
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }
    cb(null, path);
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split(".").pop();
    const fileName = Date.now() + "." + ext;
    cb(null, fileName);
  },
});

const imageFilter = (req, file, cb) => {
  const ext = file.originalname.split(".").pop();
  if (["jpg", "jpeg", "png", "svg", "webp"].includes(ext.toLowerCase())) {
    cb(null, true);
  } else {
    cb({ code: 422, message: "file format not supported" });
  }
};

const uploader = multer({
  storage: myStorage,
  fileFilter: imageFilter,
  limits: { fileSize: 5000000 },
});

module.exports = uploader;
