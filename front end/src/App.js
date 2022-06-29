import React from "react";
import Navbar from "./components/Navbar/Navbar.component";
import HomePage from "./pages/Home.pages";
function App() {
  return (  
  <>
      <Navbar/>
      <HomePage/>
      <h1 className="text-3xl font-bold underline">
      Hello world!
     </h1>
</>
      
  
  );
}

export default App;
