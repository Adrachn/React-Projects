import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import About from "./Pages/About"
import Games from "./Pages/Games"
// Browserrouter being aliased to Router
// Routes called Switch before
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

/*    </Router>
         <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
          </Routes>
      </Router> */

const Home = () => {
    return(
        <div>
            <h1>Home</h1>
        </div>
    )
}




function App() {
  return (
      <Router>
          <div>
              <Navbar/>
              <Home/>

              <Link to="/games">Games</Link> | {""}
              <Link to="/about">About</Link>

          </div> 
          
          <Routes>
              <Route path="games" element={<Games/>}/>
              <Route path="about" element={<About/>}/>
          </Routes>
      </Router>
    
  );
}

export default App;
