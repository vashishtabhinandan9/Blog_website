import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar.component'
export default function Settings() {
  return (

    <>    
<div className='flex' >
       <div className="settingsWrapper flex-auto  ml-4">
        <div className="settingsTitle mt-4 flex items-baseline">
          <span className="settingsTitleUpdate text-red-300 text-4xl">Update Your Account</span>
          <span className="settingsTitleDelete text-red-500  justify-end mr-4">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label className='font-bold font-sans text-xl'>Profile Picture</label>
          <div className="settingsPP mt-2  h-16 w-16 rounded-xl ">
            <img
            className='rounded-xl'
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon far fa-user-circle"></i>{" "}
            </label>
            <input
              id="fileInput"
              type="file"
              style={{ display: "none" }}
              className="settingsPPInput"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Safak" name="name" />
          <label>Email</label>
          <input type="email" placeholder="safak@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settingsSubmitButton" type="submit">
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
