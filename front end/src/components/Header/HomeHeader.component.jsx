import React from 'react'

 function HomeHeader() {
  /**
   * poppins: ["Poppins", "sans-serif"],
        adelia: ["ADELIA", "cursive"],
        sans:[ 'Josefin Sans',' sans-serif'],
        Lora: ['Lora', 'serif'],
        varela: ['Varela', 'sans-serif'],
        varelaround
   */
  return (
  <>
  <div className='header'>
    

    <div className='photoTitle h-screen w-full  mb-8 bg-no-repeat bg-center bg-cover bg-[url("https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80")]'>
      <h1 className='photHeading text-4xl font-Lora  text-center pt-4'>Share your Thoughts</h1>

    </div>



   
    
  </div>
  </>
    
  )
}

export default HomeHeader;