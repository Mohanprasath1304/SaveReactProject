import React from "react";

import Home from './Home';
import Dashboard from "./Dashboard";
import Contectpage from "./Contectpage";
import Services01 from "./Services01";
import { BrowserRouter,Routes,Route, } from "react-router-dom";
  
function App() {
  return (
    <div className="App">
     
        
      
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/Contectpage" element={<Contectpage/>}/>
          <Route path="/Services01" element={<Services01/>}/>
  
  

        </Routes>
     </BrowserRouter>
     
    </div>
  );
}

export default App;