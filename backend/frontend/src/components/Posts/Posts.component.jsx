//to show all the post on the home page in a grid like format 
import React from 'react'
import Postdata from '../Postdata/Postdata.component'

export default function Posts({ allpost }) {
  //console.log("2nd" +allpost);

  return (
    <>
     <div className='flex-auto  max-h-full mt-2  flex flex-wrap'>
       
    
      {
      
      allpost.map((post) =>{
       // console.log( post.title);
      
        return(
          <>
           <div>
           <Postdata  info={post}/>
           </div>
      
          </>
        )
        
       })
      }
      
        
     </div>
    </>
   
  )
}
