import React from 'react'
import HomeHeader from '../components/Header/HomeHeader.component'
import Posts from '../components/Posts/Posts.component'
import Sidebar from '../components/Sidebar/Sidebar.component'

export default function HomePage() {
  return (
    <>
    <HomeHeader/>
    <div className='flex '>
    <Posts/>
    <Sidebar/>
    </div>
    
    <div>Home</div>
    </>
    
  )
}
