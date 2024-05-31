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

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Nav/>
      <Routes>
        
          <Route index element={<Items />} />
          <Route path="/" element={<Items />} />
          <Route path="form" element={<Form />} />
          <Route path="orders" element={<OrderItems />} />
      
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
