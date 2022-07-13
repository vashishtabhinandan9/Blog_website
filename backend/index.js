const express= require("express")
const env=require('dotenv')
env.config()
const router= require("express").Router()

const dbconnection = require("./mongo");


const app= express();

app.use(express.json());

const indexrouter= require('./Routes/index.route')
app.use('/api', indexrouter);



//multer
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "imagesfrommulter");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });


  //host
console.log("hfaeowh");
app.listen(3000,()=>{
    console.log("server up");
})