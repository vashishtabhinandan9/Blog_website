const router= require("express").Router()

const {register,login} =require("../Controller/auth.controller")
//get all user
router.get("/",register);
//update
router.put("/",login);
//delete
router.delete("/",login);

module.exports=router;
