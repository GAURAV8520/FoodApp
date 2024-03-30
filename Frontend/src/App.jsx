import React from "react"
import Navbar from "./Components/Navbar"
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Cart from "./Pages/Cart/Cart"
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder"

function App() {
  

  return (
    <>
    <Navbar/>
  
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Cart" element={<Cart/>}/>
    <Route path="/PlaceOrder" element={<PlaceOrder/>}/>
   </Routes>
      
    </>
  )
}

export default App
