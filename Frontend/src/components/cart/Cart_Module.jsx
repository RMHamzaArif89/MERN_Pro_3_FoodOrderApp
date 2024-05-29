import React, { useContext } from 'react'
import './cart.css'
import ItemContext from '../context/FoodContext'
import { FaCirclePlus } from "react-icons/fa6";
import { AiFillMinusCircle } from "react-icons/ai";
import { ImCross } from "react-icons/im";

function Cart_Module() {
    const {cartItems,setShowModal,addToCart,removeFromCart,totalPrice,setShowOrderForm}=useContext(ItemContext)
  return (
    <div className='cart'>
    <div className="cart-close" onClick={()=>{setShowModal(pre=>!pre)}}><ImCross/></div>
        <div className="cart-heading">
            Select the quanity and order the item
        </div>

       {
        cartItems.map((item)=>{
            return(
                <div className="cart-row">
                <div className="cart-detail">
                <img className="cart-img" src={'http://localhost:5000/' + item.img} />
                 <div className="cart-name">{item.name}</div>
                 <div className="cart-price">Price {item.price}$</div>
                </div>
                <div className="cart-quantity">
                  <div className="cart-plus"><FaCirclePlus onClick={() => { addToCart(item._id) }}/></div>
                  <div className="cart-input">Quantity:{item.quantity}</div>
                  <div className="cart-minus"><AiFillMinusCircle onClick={() => { removeFromCart(item._id) }}/></div>
                </div>
     
             </div>
            )
        })
       }
    <div className="cart-footer">
             <div className="cart-total">
             <div className="cart-total-name">Total Price</div>
             <div className="cart-total-price">{totalPrice()}$</div>
           </div>
     
           <div className="order-btn" onClick={()=>{setShowOrderForm(pre=>!pre),setShowModal(pre=>!pre)}}>Order Now</div>
    </div>
    </div>
  )
}

export default Cart_Module
