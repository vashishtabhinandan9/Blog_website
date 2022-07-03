import React from 'react';

export default function Sidebar() {
  return (
    <>
    <div className='border-8 w-80 max-h-full bg-gray-100 border-blue-500'>
        <div className='sidebarItems flex flex-col  items-center' >

    
            <h1 className='mx-4 w-11/12 my-4 text-center border-y-4'>
                ABOUT ME
            </h1>

           {/*<hr />*/}


           <div className=' w-72  m-auto block '>
           <img className='bg-contain  block' src="https://images.unsplash.com/photo-1655837804588-472faea586ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfFM0TUtMQXNCQjc0fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
            alt="profile" />
           </div>
          

            <div className=' mt-2  block text-center'>
            <p className=' '>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                 Veritatis velit, quis iusto eum, qui voluptates nihil deleniti assumenda
            
            </p>
            </div>

        </div>


        <div className='sidebarItems flex flex-col items-center mt-8' >
          
            <span className="sidebarTitle text-center w-11/12 border-y-4">CATEGORIES</span>
          <ul className="sidebarList flex flex-col flex-wrap gap-2 ">
          <li className="sidebarListItem cursor-pointer">
                     Life
          </li>
          <li className="sidebarListItem cursor-pointer">
                     Music
          </li>
          <li className="sidebarListItem cursor-pointer">
                     Sport
          </li>
          <li className="sidebarListItem cursor-pointer">
                     Style
          </li>
          <li className="sidebarListItem cursor-pointer">
                     Tech
          </li>
          <li className="sidebarListItem cursor-pointer">
      
              Cinema
          </li>
        </ul>
        </div>

        <div className='sidebarItems flex flex-col ' >
        <span className="sidebarTitle  flex justify-center mt-4 mx-4 w-11/12 border-y-4">FOLLOW US</span>
        <div className="sidebarSocial flex justify-center gap-3 my-2 text-3xl">
          <i className="sidebarIcon fab fa-facebook-square cursor-pointer"></i>
          <i className="sidebarIcon fab fa-instagram-square cursor-pointer"></i>
          <i className="sidebarIcon fab fa-pinterest-square cursor-pointer"></i>
          <i className="sidebarIcon fab fa-twitter-square cursor-pointer"></i>
        </div>
            
            
        </div>
        
    </div>
    </>
  )
}
