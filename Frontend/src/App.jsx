import React from 'react'
import { useState } from 'react'
import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Items from './components/items/Items'
import Form from './components/form/Form'
import Header from './components/Header'
import Nav from './components/Nav/Nav'
// import OrderItems from './components/order/OrderItems'
import OrderItems from './components/order/OrderItems'
import Login from './components/register/Login'
import Signup from './components/register/Signup';
import Logout from './components/register/Logout';

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Nav/>
      <Routes>
        
          <Route index element={<Login />} />
          <Route path="/" element={<Items />} />
          <Route path="form" element={<Form />} />
          <Route path="orders" element={<OrderItems />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="logout" element={<Logout />} />
      
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
