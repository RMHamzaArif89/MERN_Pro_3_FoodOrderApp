import React, { useContext } from 'react'
import './order.css'
import ItemContext from '../context/FoodContext';
import { ImCross } from "react-icons/im";

function Order() {
  const {setShowOrderForm}=useContext(ItemContext);
  return (
    <div className='order-form'>
      <div className="cart-close" onClick={()=>{setShowOrderForm(pre=>!pre)}}><ImCross/></div>

      <div className="order-con">
        <div className="brand-logo"></div>
        <div className="brand-title">RM Resturant</div>
        <div className="inputs">
          <label>EMAIL</label>
          <input type="email" placeholder="@gmail.com" />
          <label>Name</label>
          <input type="text" placeholder="Name" />
          <label>Address</label>
          <input type="text" name="address" id="" />
          <label>Postal Code</label>
          <input type="text" name="address" id="" />
          <label>Street</label>
          <input type="text" name="address" id="" />
          <button type="submit">Pay Now</button>
        </div>
      
      </div>

    </div>
  )
}

export default Order
