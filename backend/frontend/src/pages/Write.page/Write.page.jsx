import React from "react";
import { useContext, useState } from "react";

import "./Write.style.css"
import axios from "axios";
import { Context } from "../../context/Context";
import { axiosInstance } from "../../config";
import { useEffect } from "react";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);//for image
  const { user } = useContext(Context);
  const[photourl,setPhotourl]=useState("");

  const newPost = {
    "username": user.data.otherdata.username,
    "title":title,
    "desc":desc,
  };

const updatetomongo=async()=>{
    try{
      console.log("in tomongo 4th ");

      console.log(newPost); 
      //console.log(proxy);
     const res= await axiosInstance.post("/post/",newPost)
     console.log(res)
      window.location.replace("/post/" + res.data._id);//take us to the post page
    }catch(err){
      console.log(err);
     }
  }


  useEffect(()=>{
    
    if(photourl!=""){
      try {
        console.log("in usefefect  2nd ");

        newPost.photo = photourl;
        updatetomongo()
      } catch (error) {
        console.log(error)
      }
     
    }
  },[photourl])
 
  const handleSubmit =  (e) => {
   
     e.preventDefault();
   
//****uplaida to coloudinary */
    const dataupload = new FormData()
    dataupload.append("file",file)//this is the image file we are trying to send
    dataupload.append("upload_preset","blogmern")//this is the preset we are uploading to 
    //you can see above we have given name upload preset
    dataupload.append("cloud_name","dqwkrd0xd")//this is our cloud name 
   //#####post to cloudinary
  
   fetch("https://api.cloudinary.com/v1_1/dqwkrd0xd/image/upload",{
    method:"post",
    body:dataupload
})
.then(res=>res.json())//this is the response we have got we convert it to json by res.json()
.then(data=>{
  console.log("photoin cloudninary 1st    "+data)

  setPhotourl(data.url)
   newPost.photo = photourl;
   console.log("in cloudinary  3rd "+newPost);

})
.catch(err=>{
    console.log(err)
})

    /**  
     // ****upload to multer
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axiosInstance.post("/upload", data);
      } catch (err) {
        console.log(err)
      }
    }
    */
      
    }
  return (
    <div className="write">
      {file && (
        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}