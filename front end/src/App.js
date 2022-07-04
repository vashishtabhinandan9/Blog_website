import React from "react";
import Navbar from "./components/Navbar/Navbar.component";
import HomePage from "./pages/Home.page";
import PostInfoPage from "./pages/PostInfo.page";
import Write from "./pages/Write.page/Write.page";
import Settings from "./pages/Settings.page";
import Signin from "./pages/Register.page/Signin.page";
import Signup from "./pages/Register.page/Signup.page";

function App() {
  return (  
  <>
      <Navbar/>
    {  /*<HomePage/>*/}
    {/*<PostInfoPage/>*/}
    {/*<Write/>*/}
    {/*<Settings/>*/}
     {/*<Signin/>*/}

     <Signup/>


      <h1 className="text-3xl font-bold underline">
      
     </h1>
</>
      
  
  );
}

export default App;
