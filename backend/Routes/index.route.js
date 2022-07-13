const router= require("express").Router()
const authrouter=require("./auth.route")
const userrouter=require("./user.route")
const postrouter=require("./post.route")
router.use("/",authrouter);
router.use("/user",userrouter);
router.use("/post",postrouter)

module.exports=router;

