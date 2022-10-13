//single post data 
import React from 'react'
import { Link }from 'react-router-dom';  

import "./Postdata.style.css"

export default function Postdata({info}) {
 // const PF = "https://daily-creative.herokuapp.com/imagesformulter/";
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
               {info.categories.map((c) => (
            <span className="postCat">{c}</span>
          ))}
        </div>
        <Link to={`/post/${info._id}`}>
        <span className="postTitle">

           {info.title}
        </span>
        </Link>
       
        
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
