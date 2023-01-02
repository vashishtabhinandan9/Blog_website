import React from 'react'
import { useEffect,useState,useContext } from 'react';
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Context } from "../../context/Context";
import {axiosInstance} from '../../config';

export default function SinglePost() {
  const PF = "https://daily-creative.herokuapp.com/imagesformulter/";
 

 const location = useLocation()
 const { user } = useContext(Context);
 
 const [post,setPost]= useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);
  const navigate=useNavigate()
  
  
  var rightuser;

  if(user) { rightuser = post.username ===  user.data.otherdata.username}
 else rightuser=false;

 const path=location.pathname.split("/")[2]; 
//console.log(path);
console.log("post id "+ path)
console.log(post)
if(user) console.log(post.username ===  user.data.otherdata.username)
const getpostbyID = async ()=>{
  const res = await axiosInstance.get("/post/"+path) 
  console.log("1st   "+ res);
  setPost(res.data);
  setTitle(res.data.title);
  setDesc(res.data.desc);
  window.scrollTo(0,0)
}
 useEffect(()=>{
 
  getpostbyID();
 
}
,[path]);



const handleDelete=async()=>{
  try {
   
    await axiosInstance.delete("/post"+"/"+path,{
      data:{"username":user.data.otherdata.username}
    })
    navigate('/')

    //window.location.replace("/")
  } catch (error) {
    console.log(error)
  }

}
const handleUpdate=async()=>{
  try {
    await axiosInstance.put("/post/"+path,{
      username:user.data.otherdata.username,
      title,
      desc,
    })
    setUpdateMode(false)
  } catch (error) {
    console.log(error)
  }
}


return (
    <>
    <div className='singlePost flex-auto  max-h-full '> 
    
     <div className="singlePostWrapper p-2 pr-0">
        <img
          className="singlePostImg object-fill pr-2 mx-auto  rounded-md"
          src={post.photo}
          alt="image N/A"
        />

        <div className="singlePostTitle font-varela text-5xl text-center mt-4 place-content-center flex items-center ">
          
       {updateMode ? 
          <input
            type="text"
            value={title}
            className="singlePostTitleInput text-center text-slate-400 border-2 border-gray-400 rounded-md focus-none "
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        
        :(
          <>
          <h1 className='flex-auto'>{title}</h1>
          {rightuser &&(
          <div className="singlePostEdit float-right mr-4  flex gap-4  text-2xl ">
            <i className="singlePostIcon far fa-edit text-green-500 cursor-pointer"  
            onClick={() => setUpdateMode(true)} ></i>
            <i className="singlePostIcon far fa-trash-alt text-red-600 cursor-pointer"
             onClick={handleDelete} ></i>
          </div>
         
          )}
          </>
        )
          }  
        </div>

        <div className="singlePostInfo mt-4">
          <span className='text-orange-400 font-varelaround'>
            Author:
            <Link to={`/?user=${post.username}`}>
            <b className="singlePostAuthor">
                {post.username}
            </b>
            </Link>
            
          </span>
          <span className='float-right mr-4 text-gray-400 font-varelaround'>{new Date(post.createdAt).toDateString()}</span>
        </div>

       { updateMode?
        <textarea  value={desc} onChange={(e) => setDesc(e.target.value)} className=' w-full h-80 text-slate-400 text-xl border-2 border-gray-400 rounded-md '/>
        :(
        <>
        <p className="singlePostDesc mt-4 p-4 leading-1 text-gray-500 text-xl  first-letter:text-4xl first-letter:font-bold">
         {desc}
        </p>
        </>
        )
        }

          {updateMode && (
          <button className="singlePostButton float-right m-20 text-gray-100 text-xl w-36 h-12 p-2 boder-4 bg-green-400 rounded-lg" 
          onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    
    
    </div>

    </>
    
  )
}
