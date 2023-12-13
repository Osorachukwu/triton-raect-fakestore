import React from "react"
import Header from "./components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Pages/Home"
import Products from "./components/Pages/Products"
import Signin from "./components/Pages/Signin"
import Signup from "./components/Pages/Signup"
import Cart from "./components/Pages/Cart"
import Electronics from "./components/Pages/Electronics"
import Jewelries from "./components/Pages/Jewelries"
import MensClothing from "./components/Pages/MensClothing"
import WomensClothing from "./components/Pages/WomensClothing"


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home /> }/>
      <Route path="products" element={ <Products /> }/>
      <Route path="cart" element={ <Cart /> }/>
      <Route path="signin" element={ <Signin /> }/>
      <Route path="signup" element={ <Signup /> }/>

      {/* NormalNav☝......ProductNav👇 */}
      
      <Route path="electronics" element={ <Electronics /> } />
      <Route path="jew" element={ <Jewelries /> } />
      <Route path="mens" element={ <MensClothing /> } />
      <Route path="women" element={ <WomensClothing /> } />




    </Routes>
    </BrowserRouter>
     
  )
}

export default App
