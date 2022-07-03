import React from 'react'

import "./Postdata.style.css"

export default function Postdata() {
  return(
    <>
     <div className="post">
      <img
        className="postImg"
        src="https://images.unsplash.com/photo-1656312185259-359c742c2044?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8eGpQUjRobGtCR0F8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
          
              Music
            
          </span>
          <span className="postCat">
           
              Life
           
          </span>
        </div>
        <span className="postTitle">
         
            Lorem ipsum dolor sit amet
         
        </span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
    </>
  
  )
}
