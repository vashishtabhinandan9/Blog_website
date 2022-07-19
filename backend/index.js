const express= require("express")
const env=require('dotenv')
env.config()
const multer = require("multer");
const router= require("express").Router()

const dbconnection = require("./mongo");


const app= express();


app.use(express.json());

const indexrouter= require('./Routes/index.route')
app.use('/api', indexrouter);





  //host
console.log("hfaeowh");

app.listen(5000,()=>{
  
    console.log("server up");
})