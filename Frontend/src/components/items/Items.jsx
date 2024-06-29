import React, { useContext, useEffect } from 'react'
import { MdDelete } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import './items.css'
import ItemContext from '../context/FoodContext'
import Cart_Module from '../cart/Cart_Module';
import Order from '../order/Order';


function Items() {
  const { itemData, getData ,showModal,setShowModal,addItem,showOrderForm} = useContext(ItemContext)






  useEffect(() => {
    getData(),
    itemData
  }, [])


  const deleteItem = async (id) => {

    try {
      const response = await fetch(`http://localhost:5000/api/deleteItem/${id}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": 'application/json',
          credentials: 'include'
        },
        // body:JSON.stringify(values)
      })
      // console.log(response)
      const data = await response.json()
      if (response.ok) {

        getData()
      }
    }

    catch (e) {
      console.log('item error', e)
    }
  }





  return (
    <div className='items-con'>
      {
        showModal&&<Cart_Module/>
      }
      {
        showOrderForm&&<Order/>
      }
      <div className="items">
        {
    itemData?itemData.map((item) => {
      // cosnt{name,email,age}=item
      return (
        <div className="item-card">
          <img src={'http://localhost:5000/' + item.img} className='item-img' />
         <div className="item-card-text">
         <div className="item-name">{item.name}</div>
          <div className="item-price">price:{item.price}$</div>
          {/* <div className="item-detail"></div> */}
          <div className="item-edit"><Link className='edit' to={`/updateForm/${item._id}`}>update</Link></div>
          <div className="delete" onClick={() => deleteItem(item._id)}>delete<MdDelete /> </div>
          <div className="add-cart" onClick={()=>{setShowModal(pre=>!pre),addItem(item)}}>Add to Cart <FaCartPlus /> </div>
         </div>
        
        </div>
      )
    }):<h1 style={{color:'red'}}>Login First</h1>
    
        }
      </div >

    </div>
  )
}

export default Items
 
