import { useEffect, useState } from "react";
import React from 'react'
import HomeHeader from '../components/Header/HomeHeader.component'
import Posts from '../components/Posts/Posts.component'
import Sidebar from '../components/Sidebar/Sidebar.component'

import axios from "axios";
import { useLocation } from "react-router";

export default function HomePage() {
  
  const [posts, setPosts] = useState([]);
 // const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/post");
      setPosts(res.data);
      console.log(res);
    };
    fetchPosts();
  }, []);


  return (

    <>
    <HomeHeader/>
    <div className='flex '>
    <Posts allpost={posts}/>
    <Sidebar/>
    </div>
    
    <div>Home</div>
    </>
    
  )
}
