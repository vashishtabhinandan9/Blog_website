import React from "react";
import Navbar from "./components/Navbar/Navbar.component";
import HomePage from "./pages/Home.page";
import PostInfoPage from "./pages/PostInfo.page";
import Write from "./pages/Write.page/Write.page";
import Settings from "./pages/Settings.page";
function App() {
  return (  
  <>
      <Navbar/>
    {  /*<HomePage/>*/}
    {/*<PostInfoPage/>*/}
    {/*<Write/>*/}
    <Settings/>
      <h1 className="text-3xl font-bold underline">
      Hello world!
     </h1>
</>
      
  
  );
}

export default App;
