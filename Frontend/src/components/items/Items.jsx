import React, { useContext, useEffect } from 'react'
import { MdDelete } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import './items.css'
import ItemContext from '../context/FoodContext'


function Items() {
  const { itemData, getData } = useContext(ItemContext)






  useEffect(() => {
    getData()
  }, [])


  const deleteItem = async (id) => {

    try {
      const response = await fetch(`http://localhost:5000/api/deleteItem/${id}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": 'application/json'
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
      <div className="items">
        {
          itemData.map((item) => {
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
                <div className="add-cart">Add to Cart <FaCartPlus /> </div>
               </div>
              
              </div>
            )
          })
        }
      </div >

    </div>
  )
}

export default Items
 
