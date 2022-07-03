import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar.component'
export default function Settings() {
  return (

    <>    
<div className='flex' >
       <div className="settingsWrapper flex-auto  ml-4">
        <div className="settingsTitle mt-4 flex items-baseline">
          <span className="settingsTitleUpdate text-red-300 flex-auto text-4xl">Update Your Account</span>
          <span className="settingsTitleDelete text-red-500   mr-4 cursor-pointer">Delete Account</span>
        </div>
        <form className="settingsForm my-8">
            
          <label className='font-bold font-sans text-xl '>Profile Picture</label>
          <div className="settingsPP mt-4 flex items-center gap-4   ">
            <img
            className=' h-16 w-16 rounded-xl cursor-pointer '
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon text-4xl cursor-pointer far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput "
            />

          </div>
          <div className='mt-4 flex flex-col w-11/12 gap-4 '> 
          <label>Username</label>
          <input className='border-b-2 border-gray-100 pl-4' type="text" placeholder="Safak" name="name" />
          <label>Email</label>
          <input className='border-b-2 border-gray-100 pl-4' type="email" placeholder="safak@gmail.com" name="email" />
          <label>Password</label>
          <input className='border-b-2 border-gray-100 pl-4' type="password" placeholder="Password" name="password" />
          </div>
          
          <button className=" mt-8 block m-auto settingsSubmitButton bg-green-500 w-40 text-white h-12  cursor-pointer rounded-xl" type="submit">
            Update
          </button>
        </form>
      </div>
   <div className=''>
   <Sidebar/>
   </div>


</div>

   

    </>
    

  )
}
