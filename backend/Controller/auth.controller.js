const userModel=require("../Models/userModel")
const bcrypt=require("bcryptjs");



const register= async (req,res)=>{
    const  {username,email,password }=req.body;

    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);

   

   try {
    const userdata= await userModel.findOne({
        email:email
    })

    if (userdata) {
       // throw Error("user email already exist");
       // if (userdata) {
            return res.json({
                success: false,
                message: "User Email Already Exists."
            })
    }

    const newUser={
        email:email,
        username: username,
        password:hashpassword
    }

    const user=new userModel(newUser);
    await user.save();

    return res.status(200).json({
        success:true,
        message: "User has been successfully saved",
        data:user
        });
  
   } catch (error) {
    console.log(error);
    return res.status(500).json({//status 550 means 
        success: false,
        message: "Some Error occurred while searching for existing email. Contact your administrator"
    });
   } 



}

 
const login = async (req, res) => {

    //console.log("-----------start-----------")
    
        const {
            email,
            password
        } = req.body;
       
        userModel.findOne({
            email: email
        }).exec((error, data) => {

            if (error) {
                console.log(error);            
                return res.status(500).json({
                    success: false,
                    message: "DB Error occurred. Contact your administrator"
                });
            }
    
            if (data) {

                 bcrypt.compare(password,data.password,).then((isvalid)=>{
                 
                    //console.log(isvalid + password + data.password);
                    if(isvalid){
                        const { password, ...otherdata } = data._doc;
                        return res.status(200).json({
                            success: true,
                            message: "User Login successfully",
                            data: {
                                otherdata
                        
                            }
                        })    
                    }
                    else{
                         return res.status(400).json("Wrong password!");
                    }
    
                })
             
            } 
            
            else {
                return res.status(400).json({
                    success: false,
                    message: "User Email Does not exist."
                });
            }
        })
    
    }
module.exports={register,login};



