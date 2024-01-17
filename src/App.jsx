import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import "./components/Blue"
import "./components/Red"
import Blue from './components/Blue';
import Red from './components/Red';
import Home from "./components/Home"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div id="container">
      <h1></h1>
      <div id="navbar">
      <Link to="/Home">Home</Link>
      <Link to="/blue">Blue</Link>
      <Link to="/red">Red</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/blue" components={Blue} />
          <Route path="/red" components={Red} />
        </Routes>
      </div>
    </div>
    </>
  )
}

export default App
