import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Context } from '../../context/Context';
import { useContext } from 'react';

export default function Navbar () {
  const {user,dispatch}=useContext(Context);
  const navigate=useNavigate()

  const handleLogout=()=>{
    dispatch({ type: "LOGOUT" }); 
    navigate("/")
  }
  const PF = "https://daily-creative.herokuapp.com/imagesformulter/";
 

  return (

    <>
    <div className=' z-[999] h-30 w-full flex items-center bg-slate-50/10 pt-4 text-3xl text-nav-300 mb-1  sticky bg-gray-100 top-0 left-0'>
      
      <div className=" topLeft  flex justify-center flex-auto gap-4">
        <i className="topIcon cursor-pointer fab fa-facebook-square"></i>
        <i className="topIcon cursor-pointer fab fa-instagram-square"></i>
        <i className="topIcon cursor-pointer fab fa-pinterest-square"></i>
        <i className="topIcon cursor-pointer fab fa-twitter-square"></i>
      </div>

      <div className="topCenter flex justify-around flex-auto ">
        <ul className="topList flex justify-around gap-4 font-sans text-xl ">
          <li className="topListItem cursor-pointer">
          <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem cursor-pointer">ABOUT</li>
          <li className="topListItem cursor-pointer">CONTACT</li>
          <li className="topListItem cursor-pointer">
          <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
         
          {user && <li className="topListItem cursor-pointer" onClick={handleLogout}>LOGOUT</li>}
         
        </ul>
      </div>

      <div className="topRight  flex justify-around flex-auto items-center font-sans text-xl h-16 w-16 ">
      

        <Link to="/settings">
         {user&&<div className='profilePicture cursor-pointer h-16 w-16  object-center 
        rounded-full border-2 border-black '>
            
            <img  className="object-cover object-center  h-full w-full rounded-full"
            src={user.data.otherdata.profilePic}
            alt="person" />
          
        </div>
}
        </Link>
         
         

        <div>
            <ul className='text flex gap-4'>
              { !user&& <li className='cursor-pointer'>
              <Link className='link' to="/login">
              LOGIN
              </Link>
              </li>}
               {!user&& <li className='cursor-pointer'>
               <Link className='link' to="/register">
              REGISTER
              </Link>
                </li>}
            </ul>
        </div>

        <div className='searchIcon mr-8 cursor-pointer'>
        <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>


    </div>
    </>
  )
}

