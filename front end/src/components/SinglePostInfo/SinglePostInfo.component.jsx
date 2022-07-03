import React from 'react'

export default function SinglePost() {
  return (
    <>
    <div className='singlePost flex-auto border-8 max-h-full border-red-300'> 
    
    
      <div className="singlePostWrapper p-2 pr-0">
        <img
          className="singlePostImg object-cover pr-2 border-red-300"
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />
        <div className="singlePostTitle font-varela text-5xl text-center mt-4  flex items-center ">
          
          <h1 className='flex-auto'>Lorem ipsum dolor</h1>
          <div className="singlePostEdit float-right mr-4  flex gap-4  text-2xl ">
            <i className="singlePostIcon far fa-edit text-green-500 cursor-pointer"></i>
            <i className="singlePostIcon far fa-trash-alt text-red-600 cursor-pointer"></i>
          </div>
        </div>
        <div className="singlePostInfo mt-4">
          <span className='text-orange-400 font-varelaround'>
            Author:
            <b className="singlePostAuthor">
                abhinandan
            </b>
          </span>
          <span className='float-right mr-4 text-gray-400 font-varelaround'>1 day ago</span>
        </div>
        <p className="singlePostDesc mt-4 p-4 leading-1 text-gray-500 text-xl  first-letter:text-4xl first-letter:font-bold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
          quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
          Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
          eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
          error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
          impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
          odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos!
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
          quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
          Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
          eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
          error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
          impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
          odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
          iusto impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas
          a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
        </p>
      </div>
    
    
    </div>

    </>
    
  )
}
