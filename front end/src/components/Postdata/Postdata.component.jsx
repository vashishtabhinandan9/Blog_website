//single post data 
import React from 'react'
import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  
  Link }   
from 'react-router-dom';  

import "./Postdata.style.css"

export default function Postdata({info}) {
  return(
    <>
    <Link to={`/post/${info._id}`}>
      <div className="post">
      
      <img
        className="postImg"
        src={info.photo}
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
               
        </div>
        
        <span className="postTitle">

           {info.title}
        </span>
       
        
        <hr />
        <span className="postDate">{new Date(info.createdAt).toDateString()}</span>
      </div>
      <p className="postDesc">
        {info.desc}
      </p>
      </div>
        
      </Link>
    
    </>
  
  )
}
