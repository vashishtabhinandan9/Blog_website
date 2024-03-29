import { useEffect, useState } from "react";
import React from 'react'
import HomeHeader from '../components/Header/HomeHeader.component'
import Posts from '../components/Posts/Posts.component'
import Sidebar from '../components/Sidebar/Sidebar.component'

//import {Axios} from "axios";
import { useLocation } from "react-router";
import { axiosInstance } from "../config";

export default function HomePage() {

  const [posts, setPosts] = useState([]);
 const {search}= useLocation();
 //console.log(search);
 
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axiosInstance.get("/post"+"/"+search);
      setPosts(res.data);
      console.log(res);
    };
    fetchPosts();
  }, [search]);

  return (
    <>
    <HomeHeader/>
    <div className='flex '>
    <Posts allpost={posts}/>
    <Sidebar/>
    </div>
    
    
    </>
    
  )
}
