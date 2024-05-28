import React from 'react'
import { FcHome } from "react-icons/fc";
import { IoIosAddCircleOutline } from "react-icons/io";


function Nav() {
  return (
    <div className='nav'>
        <ul>
            <li><FcHome/><NavLink to="/">Home</NavLink></li>
            <li><IoIosAddCircleOutline/><NavLink to="/form">Add Item</NavLink></li>
        </ul>


      
    </div>
  )
}

export default Nav
