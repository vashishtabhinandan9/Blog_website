const router= require("express").Router()
const authrouter=require("./auth.route")
const userrouter=require("./user.route")

router.use("/",authrouter);
router.use("/:id",userrouter);

module.exports=router;

