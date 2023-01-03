const express= require("express")
const env=require('dotenv')
env.config()
const multer = require("multer");
const router= require("express").Router()
const path = require('path');
const cors= require('cors')

const dbconnection = require("./mongo");


const app= express();

app.use("/imagesformulter", express.static(path.join(__dirname, "/imagesformulter")));
app.use(express.json());

/**
 * const allowedDomains = ['http://localhost:3000/api', 
'http://localhost:5000/api', 
'https://daily-creative.herokuapp.com/api/']
**/
app.use(cors({
 origin: "*",
    credentials: true,

}));



const indexrouter= require('./Routes/index.route')
app.use('/api', indexrouter);

  //host
console.log("hfaeowh");

if ( process.env.NODE_ENV == "production"){
  const path = require("path");
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, '/frontend/build', 'index.html'));
  })
}

app.listen(process.env.PORT || 5000,()=>{
  
  dbconnection()
  .then(() => console.log("Server is running 🚀 and connected to DB"))
  .catch((error) =>{
  console.log(error);
    console.log("Server is running, but database connection failed... ")
  }
  )
})