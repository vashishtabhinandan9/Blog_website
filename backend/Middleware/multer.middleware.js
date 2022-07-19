
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./imagesformulter");
  },
  filename: (req, file, cb) => {
    cb(null,"hello.jpg");
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
