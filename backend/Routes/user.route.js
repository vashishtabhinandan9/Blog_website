const router= require("express").Router()

const {getuserbyid,deleteuser,updateuser} =require("../Controller/user.controller")
//get all user
router.get("/:id",getuserbyid);
//update
router.put("/:id",updateuser);
//delete
router.delete("/:id",deleteuser);

module.exports=router;
