const router= require("express").Router()
const authrouter=require("./auth.route")
const userrouter=require("./user.route")
const postrouter=require("./post.route")
const categoryrouter=require("./category.route")

router.use("/",authrouter);
router.use("/user",userrouter);
router.use("/post",postrouter);
router.use("/categories",categoryrouter);


module.exports=router;

