import React from 'react'
import { useEffect,useState,useContext } from 'react';
import axios from "axios";
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Context } from "../../context/Context";

export default function SinglePost() {
  const PF = "http://localhost:5000/imagesformulter/";
 

 const location = useLocation()
 const { user } = useContext(Context);
 
 const [post,setPost]= useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

 
 const path=location.pathname.split("/")[2]; 
console.log(path);
console.log("post id")
console.log(post)
console.log(post.username ===  user.data.otherdata.username)

 useEffect(()=>{
  const getpostbyID = async ()=>{
    const res = await axios.get("/post/"+path) 
    console.log(res);
    setPost(res.data);
    setTitle(res.data.title);
    setDesc(res.data.desc);
    window.scrollTo(0,0)
  }

  getpostbyID();
 
}
,[path]);



const handleDelete=async()=>{
  try {
   
    await axios.delete("/post"+"/"+path,{
      data:{"username":user.data.otherdata.username}
    })
  window.location.replace("/")
  } catch (error) {
    console.log(error)
  }

}
const handleUpdate=async()=>{
  try {
    await axios.put("/post/"+path,{
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
          className="singlePostImg object-cover pr-2  rounded-md"
          src={PF+post.photo}
          alt=""
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
          {post.username ===  user.data.otherdata.username &&(
          <div className="singlePostEdit float-right mr-4  flex gap-4  text-2xl ">
            <i className="singlePostIcon far fa-edit text-green-500 cursor-pointer"  onClick={() => setUpdateMode(true)} ></i>
            <i className="singlePostIcon far fa-trash-alt text-red-600 cursor-pointer" onClick={handleDelete} ></i>
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
          <button className="singlePostButton float-right mt-20 text-gray-100 text-xl w-36 h-12 p-2 boder-4 bg-green-400 rounded-lg" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    
    
    </div>

    </>
    
  )
}
