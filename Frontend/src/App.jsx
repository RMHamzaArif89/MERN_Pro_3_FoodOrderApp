import React from 'react'
import { useState } from 'react'
import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Items from './components/items/Items'
import Form from './components/form/Form'
import Header from './components/Header'
import Nav from './components/Nav/Nav'

function App() {
  

  return (
    <>
    <BrowserRouter>
    <Nav/>
      <Routes>
        
          <Route index element={<Items />} />
          <Route path="/" element={<Items />} />
          <Route path="form" element={<Form />} />
      
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
