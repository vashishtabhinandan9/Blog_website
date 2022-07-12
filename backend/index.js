const express= require("express")
const env=require('dotenv')
env.config()
const router= require("express").Router()

const dbconnection = require("./mongo");


const app= express();

app.use(express.json());

const indexrouter= require('./Routes/index.route')
app.use('/api', indexrouter);



console.log("hfaeowh");
app.listen(3000,()=>{
    console.log("server up");
})