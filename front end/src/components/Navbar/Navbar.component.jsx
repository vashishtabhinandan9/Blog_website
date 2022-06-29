import React from 'react'

export default function Navbar () {
  return (
    <>
    <div className=' h-20 w-full flex  bg-red-500 pt-4 '>
      
      <div className=" topLeft flex justify-center flex-auto  bg-blue-200 gap-4">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>

      <div className="topCenter flex justify-around flex-auto">
        <ul className="topList flex justify-around gap-4">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>

      <div className="topRight  flex justify-around flex-auto bg-green-200">
        <div className='profilePicture'>
            <img src="" alt="person" />
        </div>

        <div>
            <ul className='text flex gap-4'>
                <li>LOGIN</li>
                <li>REGISTER</li>
            </ul>
        </div>

        <div className='searchIcon'>
        <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>


    </div>
    </>
  )
}

