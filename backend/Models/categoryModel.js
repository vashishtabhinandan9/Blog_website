const mongoose=require("mongoose")

 const categoryschema=mongoose.Schema({
        name: {
          type: String,
          required: true,
          unique: true,
        }
 },
 
 {timestamp:true}
 )


 module.exports= mongoose.model("Category",categoryschema)