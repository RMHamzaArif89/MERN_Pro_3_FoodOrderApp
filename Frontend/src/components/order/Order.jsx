import React from 'react'

function Order() {
  return (
    <div className='order-form'>
        
<div class="order-con">
  <div class="brand-logo"></div>
  <div class="brand-title">TWITTER</div>
  <div class="inputs">
    <label>EMAIL</label>
    <input type="email" placeholder="example@test.com" />
    <label>PASSWORD</label>
    <input type="password" placeholder="Min 6 charaters long" />
    <button type="submit">LOGIN</button>
  </div>
  <img src="/images/logo2.jpg" alt="" />
</div>
      
    </div>
  )
}

export default Order
