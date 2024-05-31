import React, { useContext, useEffect } from 'react'
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import './orderItem.css'
import ItemContext from '../context/FoodContext'



function OrderItems() {
  const { orderData,getOrderData} = useContext(ItemContext)






  useEffect(() => {
   getOrderData()
  }, [])


  const deleteItem = async (id) => {

    try {
      const response = await fetch(`http://localhost:5000/api/deleteOrder/${id}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": 'application/json'
        },
        // body:JSON.stringify(values)
      })
      // console.log(response)
      const data = await response.json()
      if (response.ok) {

        getOrderData()
      }
    }

    catch (e) {
      console.log('item error', e)
    }
  }





  return (
    <div className='orders-con'>
      <div className="orders">
        {
          orderData.map((order,i) => {
            // cosnt{name,email,age}=item
            return (
              <div className="orders-row">
               
              <div className="order">{i+1}</div>
               <div className="order-name">Name:{order.name}</div>
                <div className="order-price">Total price:{order.totalPrice}$</div>
                <div className="order-price">Address:{order.address}</div>
                <div className="order-price">Postal Code:{order.postalCode}</div>
                <div className="order-price">Street:{order.street}</div>
                <div className="order-price">Email:{order.email}</div>
                {/* <div className="order-detail"></div> */}
                <div className="order-edit"><Link className='edit' to={`/updateForm/${order._id}`}>update</Link></div>
                <div className="delete" onClick={() => deleteItem(order._id)}>delete<MdDelete /> </div>
                </div>
             
            )
          })
        }
      </div >

    </div>
  )
}

export default OrderItems
 