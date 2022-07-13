const router= require("express").Router()

const {createpost,updatepost,deletepost,getallpost,getpostbyid} =require("../Controller/post.controller");
const { update } = require("../Models/userModel");
//get all user
router.get("/",getallpost);

//get by id 
router.get("/:id",getpostbyid);

//update
router.put("/:id",updatepost);
//delete
router.delete("/:id",deletepost);
//create
router.post("/",createpost);

module.exports=router;
