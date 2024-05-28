import React from 'react'
import './cart.css'

function Cart_Module() {
  return (
    <div className='cart'>
        <div className="cart-heading">
            Select the quanity and order the item
        </div>
        <div className="cart-row">
           <div className="cart-detail">
           <div className="cart-img"></div>
            <div className="cart-name"></div>
            <div className="cart-price"></div>
           </div>
           <div className="cart-quantity">
             <div className="cart-plus"></div>
             <div className="cart-input"></div>
             <div className="cart-minus"></div>
           </div>

        </div>
      <div className="cart-total">
        <div className="cart-total-name">Total Price</div>
        <div className="cart-total-price">899</div>
      </div>

      <div className="order-btn">Order Now</div>
    </div>
  )
}

export default Cart_Module
