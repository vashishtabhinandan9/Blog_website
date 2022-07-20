import React, { useContext } from "react";
import Navbar from "./components/Navbar/Navbar.component";
import HomePage from "./pages/Home.page";
import PostInfoPage from "./pages/PostInfo.page";
import Write from "./pages/Write.page/Write.page";
import Settings from "./pages/Settings.page";
import Signin from "./pages/Register.page/Signin.page";
import Signup from "./pages/Register.page/Signup.page";
import {  
  BrowserRouter as Router,  
  Routes,  
  Route,  
  Link }   
from 'react-router-dom';  
import { Context } from "./context/Context";

function App() {
  const {user}=useContext(Context);
  console.log("user")
  console.log(user)
  return (  
  <>
 <Navbar/>
  <Routes>
    <Route path="/" exact element= {<HomePage/>} />
    <Route path="/posts" exact element= {<HomePage/>} />
    <Route path="/post/:id" exact element=  {<PostInfoPage/>}/>
    <Route path="/write" exact element= {user ? <Write /> : <Signin />} />
    <Route path="/settings" exact element=   {user ? <Settings /> : <Signin />} />
    <Route path="/login" exact element= {user ? <HomePage /> : <Signin />} />
    <Route path="/register" exact element=  {user ? <HomePage /> : <Signup />} />
  </Routes>



      <h1 className="text-3xl font-bold underline">
      
     </h1>
</>
      
  
  )}

export default App;
