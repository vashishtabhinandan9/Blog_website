
const multer = require("multer");
const path = require('path');


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,path.join(path.dirname(__dirname),"imagesformulter"));
  },
  filename: (req, file, cb) => {
    cb(null,req.body.name);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
