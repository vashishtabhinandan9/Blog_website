const express= require("express")
const env=require('dotenv')
env.config()

const dbconnection = require("./mongo");


const app= express();

app.use(express.json());

console.log("hfaeowh");
app.listen(3000,()=>{
    console.log("server up");
})