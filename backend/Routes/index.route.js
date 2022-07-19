const router= require("express").Router()
const authrouter=require("./auth.route")
const userrouter=require("./user.route")
const postrouter=require("./post.route")
const categoryrouter=require("./category.route")
const upload = require("../Middleware/multer.middleware")
router.use("/",authrouter);
router.use("/user",userrouter);
router.use("/post",postrouter);
router.use("/categories",categoryrouter);

router.post("/upload",upload.single("file"),(req, res) => {
    res.status(200).json("File has been uploaded");
  });
  

module.exports=router;

