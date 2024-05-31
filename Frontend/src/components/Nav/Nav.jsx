import React, { useContext } from 'react'
import { FcHome } from "react-icons/fc";
import { IoIosAddCircleOutline } from "react-icons/io";
import './nav.css'
import {NavLink} from 'react-router-dom'
import ItemContext from '../context/FoodContext';
import { BsCart4 } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";


function Nav() {
const{totalCartItems}=useContext(ItemContext)
  return (
    <div className='nav'>
     
   
      <img src="/images/logo1.jpg" className="logo-img" alt="" />
    
        <ul>
            <li><NavLink  className="navlink" to="/">Home</NavLink><FcHome/></li>
            <li><NavLink className='navlink' to="/form">Add Item</NavLink><IoIosAddCircleOutline/></li>
            <li><NavLink className='navlink' to="/orders">Order Items</NavLink><IoFastFoodOutline/></li>
        </ul>

      
          <div className="nav-cart-total">
       <div className="cart-value"> {totalCartItems()}</div><BsCart4/>
          </div>
       

      
    </div>
  )
}

export default Nav
