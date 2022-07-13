const router= require("express").Router()

const {createcategory,getcategory} =require("../Controller/category.controller")
//create
router.post("/",createcategory);

//get all
router.get("/",getcategory);

module.exports=router;
 