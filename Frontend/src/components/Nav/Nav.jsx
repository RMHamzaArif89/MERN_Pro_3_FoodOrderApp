import React from 'react'
import { FcHome } from "react-icons/fc";
import { IoIosAddCircleOutline } from "react-icons/io";
import './nav.css'
import {NavLink} from 'react-router-dom'


function Nav() {
  return (
    <div className='nav'>
        <ul>
            <li><NavLink  className="navlink" to="/">Home</NavLink><FcHome/></li>
            <li><NavLink className='navlink' to="/form">Add Item</NavLink><IoIosAddCircleOutline/></li>
        </ul>


      
    </div>
  )
}

export default Nav
