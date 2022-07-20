import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar.component'
import { useContext, useState } from "react";
import { Context } from '../context/Context';
import axios from "axios";

export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleSubmit = async (e) => {
    console.log(user.data.otherdata._id)
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user.data.otherdata._id,
      "username":username,
      "email":email,
      "password":password
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload",data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("/user/" + user.data.otherdata._id,
       updatedUser
       );

  
       
       console.log(res.data)
       console.log(updatedUser)
      setSuccess(true);

      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };

  return (
    <>    
<div className='flex' >
       <div className="settingsWrapper flex-auto  ml-4">
        <div className="settingsTitle mt-4 flex items-baseline">
          <span className="settingsTitleUpdate text-red-300 flex-auto text-4xl">Update Your Account</span>
          <span className="settingsTitleDelete text-red-500   mr-4 cursor-pointer">Delete Account</span>
        </div>
        <form className="settingsForm my-8" onSubmit={handleSubmit}>
            
          <label className='font-bold font-sans text-xl '>Profile Picture</label>
          <div className="settingsPP mt-4 flex items-center gap-4   ">
            <img
            className=' h-16 w-16 rounded-xl cursor-pointer '
            src={file ? URL.createObjectURL(file) : PF+user.data.otherdata.profilePic}
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon text-4xl cursor-pointer far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput "
              onChange={(e) => setFile(e.target.files[0])}
            />

          </div>
          <div className='mt-4 flex flex-col w-11/12 gap-4 '> 
          <label>Username</label>
          <input className='border-b-2 border-gray-100 pl-4' type="text"
           onChange={(e) => setUsername(e.target.value)}
           placeholder={user.data.otherdata.username} 
          name="name" />
          <label>Email</label>
          <input className='border-b-2 border-gray-100 pl-4' 
          type="email" 
          onChange={(e) => setEmail(e.target.value)}
          placeholder= {user.data.otherdata.email} 
          name="email" />
          <label>Password</label>
          <input className='border-b-2 border-gray-100 pl-4' 
          type="password" 
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password" 
          name="password" />
          </div>
          
          <button className=" mt-8 block m-auto settingsSubmitButton bg-green-500 w-40 text-white h-12  cursor-pointer rounded-xl" 
          type="submit">
            Update
          </button>
          {success && (
            <span
              className='text-green-500 text-center mt-8'
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
   <div className=''>
   <Sidebar/>
   </div>


</div>

   

    </>
    

  )
}
