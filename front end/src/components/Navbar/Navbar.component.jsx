import React from 'react'

export default function Navbar () {
  return (
    <>
    <div className=' h-30 w-full flex items-center bg-slate-50/10 pt-4 text-3xl text-nav-300'>
      
      <div className=" topLeft  flex justify-center flex-auto gap-4">
        <i className="topIcon cursor-pointer fab fa-facebook-square"></i>
        <i className="topIcon cursor-pointer fab fa-instagram-square"></i>
        <i className="topIcon cursor-pointer fab fa-pinterest-square"></i>
        <i className="topIcon cursor-pointer fab fa-twitter-square"></i>
      </div>

      <div className="topCenter flex justify-around flex-auto ">
        <ul className="topList flex justify-around gap-4 font-sans text-xl ">
          <li className="topListItem cursor-pointer">HOME</li>
          <li className="topListItem cursor-pointer">ABOUT</li>
          <li className="topListItem cursor-pointer">CONTACT</li>
          <li className="topListItem cursor-pointer">WRITE</li>
          <li className="topListItem cursor-pointer">LOGOUT</li>
        </ul>
      </div>

      <div className="topRight  flex justify-around flex-auto items-center font-sans text-xl ">
        <div className='profilePicture cursor-pointer h-16 w-16  object-center rounded-full border-8 border-indigo-600 '>
            <img  className="object-cover object-center  h-full w-full rounded-full"src="https://th.bing.com/th/id/OIP.telKGniTl6KmAgxs9VKbogHaFj?w=248
            &h=185&c=7&r=0&o=5&dpr=1.5
            &pid=1.7" alt="person" />
        </div>

        <div>
            <ul className='text flex gap-4'>
                <li className='cursor-pointer'>LOGIN</li>
                <li className='cursor-pointer'>REGISTER</li>
            </ul>
        </div>

        <div className='searchIcon mr-8 cursor-pointer'>
        <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>


    </div>
    </>
  )
}

