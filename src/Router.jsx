import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './Pages/LandingPage/LandingPage';
import SignUp from './Pages/Auth/SignUp'
import Payment from './Pages/Payment/Payment'
import Orders from './Pages/Orders/Orders'
import Cart from './Pages/Cart/Cart'
import Results from './Pages/Results/Results';
import ProductDetail from './Pages/ProductDetail/ProductDetail'

function Routing() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/auth" element={<SignUp/>} />
            <Route path="/payments" element={<Payment/>} />
            <Route path="/orders" element={<Orders/>} />
            <Route path="/category/:categoryName" element={<Results/>} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart/>} />

        </Routes>
      </Router>
    </div>
  )
}

export default Routing
