import React from "react"
import './styles/App.css'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import { Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/work" element={<Work/>}/>
      </Routes>
    </div>
  );
}

export default App;
