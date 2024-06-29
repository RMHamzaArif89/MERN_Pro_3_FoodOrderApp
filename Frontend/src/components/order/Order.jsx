import React, { useContext, useState } from 'react'
import './order.css'
import ItemContext from '../context/FoodContext';
import { ImCross } from "react-icons/im";
import {useNavigate} from 'react-router-dom'

function Order() {
  const {setShowOrderForm,totalPrice}=useContext(ItemContext);

  
  const [values,setValues]=useState({
    name:'',
    totalPrice:totalPrice(),
    email:'',
    postalCode:'',
    address:'',
    street:'',
  })

  const navigate= useNavigate()

  const handleChange=(e)=>{
      // e.preventDefault()

      let name=e.target.name;
      let val=e.target.value;
     
  setValues((pre)=>
      ({
          ...pre,[name]:val
      }  
      )
  )

  }
//update data
  const handleSubmit=async(e)=>{

    // console.log(values)
    e.preventDefault();
try{
const response=await fetch(`http://localhost:5000/api/createOrder`,{
  method:'POST',
  headers:{
"Content-Type":'application/json',
credentials:'include'
  },
  body:JSON.stringify(values)
})
// console.log(response)
if(response.ok){

setValues({
  name:'',
  totalPrice:'',
  email:'',
  postalCode:'',
  address:'',
  street:'',
})
console.log(response.data)
navigate('/orders')
}
  }

catch(e){
  console.log('send error',e)
}
}
  return (
    <div className='order-form'>
      <div className="cart-close" onClick={()=>{setShowOrderForm(pre=>!pre)}}><ImCross/></div>

      <div className="order-con">
        <div className="brand-logo"></div>
        <div className="brand-title">RM Resturant</div>
        <form className="inputs" onSubmit={(e)=>{handleSubmit(e)}}>
          <label>EMAIL</label>
          <input type="email" placeholder="@gmail.com" name="email" onChange={(e)=>{handleChange(e)}} value={values.email} />
          <label>Name</label>
          <input type="text" placeholder="Name" name="name" onChange={(e)=>{handleChange(e)}} value={values.name}/>
          <label>Address</label>
          <input type="text"  id="" name="address" onChange={(e)=>{handleChange(e)}} value={values.address} />
          <label>Postal Code</label>
          <input type="text"  id="" name="postalCode" onChange={(e)=>{handleChange(e)}} value={values.postalCode}/>
          <label>Street</label>
          <input type="text"  id="" name="street" onChange={(e)=>{handleChange(e)}} value={values.street}/>
          <label>Total Price</label>
          <input type="text"  id="" disabled name="totalPrice"  value={values.totalPrice} placeholder={totalPrice()}/>
          <button type="submit">Pay Now</button>
        </form>
      
      </div>

    </div>
  )
}

export default Order
