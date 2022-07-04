import React from 'react'
import { Link } from 'react-router-dom'

export default function Signin() {
  return (

    <>
   <div className="bg-loginbg
   h-screen w-full object-contain font-adelia flex flex-col justify-center   items-end  ">


    <div className=' w-96 h-4/6  mr-72 drop-shadow-xl flex flex-col gap-4'>
      <span className="loginTitle text-center text-5xl font-bold ">Login</span>
      <form className="loginForm flex flex-col gap-4 m-2">
        <label className='text-xl'>Email</label>
        <input className="loginInput w-11/12 rounded-lg p-2" type="text" placeholder="Enter your email..." />
        <label className='text-xl'>Password</label>
        <input className="loginInput w-11/12 rounded-lg p-2" type="password" placeholder="Enter your password..." />
        <button className="loginButton drop-shadow-2xl bg-red-500 text-white w-1/2 h-12 m-auto mt-2 items-center  rounded-full ">Login</button>
      </form>

     
      <button className="loginRegisterButton drop-shadow-2xl bg-blue-500 text-white 
       w-1/2 h-12 m-auto items-center  rounded-full">
         <Link className='link' to="/register">
        Register
        </Link>
        </button>      
     

    </div>

    </div>
    </>
    
  )
}
