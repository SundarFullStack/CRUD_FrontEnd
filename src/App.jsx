import { useState,useEffect } from 'react'
import './App.css'
import {Routes,Route} from "react-router-dom";
import Home from "./Pages/Home"
import Create from "./Pages/Create"
import Update from "./Pages/Update"
import Data from "./Pages/Data"

function App() {


  return (
    <>
      
      <div style={{ backgroundColor: "#f5e2e291", height: "660px" }}>
      <Data/>
      <Routes>


<Route path="/" element={<Home/>} />
<Route path="/create" element={<Create/>} />
<Route path="/update/:id" element={<Update/>} />

</Routes>
  </div>
      
 </>
  )
}

export default App
