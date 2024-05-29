import React, { useEffect } from 'react'
import { createContext, useState } from 'react';

const ItemContext = createContext(null);


export const ContextProvider=({children})=>{
  const  [itemData,setItemData]=useState([])
  const [showModal,setShowModal]=useState(false)
  const [cartItems,setCartItems]=useState([])
  const [showOrderForm,setShowOrderForm]=useState(false)
    
const totalCartItems=()=>{
  return cartItems.length;
}


    const getData=async()=>{
      try{
        const response=await fetch('http://localhost:5000/api/foodItems',{
          method:'GET',
      
      })
      
       if(response.ok){
        const res= await response.json()
        
        
        
    setItemData(res.data)
  
      
       }
          }
      
        catch(e){
          console.log('data not found',e)
        }
      }
    



    useEffect(()=>{
      getData()
    },[])


    
//add the items to the cart
const addItem = (item) => {
  const isItemInCart = cartItems.find((cartItem) => cartItem._id === item._id); // check if the item is already in the cart

  if (isItemInCart) {
  setCartItems(
      cartItems.map((cartItem) => // if the item is already in the cart, increase the quantity of the item
      cartItem._id === item._id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem // otherwise, return the cart item
      )
  );
  } else {
  setCartItems([...cartItems, { _id:item._id, detail:item.detail, price:item.price, img:item.img, quantity: 1 }]); // if the item is not in the cart, add the item to the cart
  }
};



const removeFromCart = (_id) => {
  const isItemInCart = cartItems.find((cartItem) => cartItem._id === _id);

  if (isItemInCart.quantity === 1) {
    setCartItems(cartItems.filter((cartItem) => cartItem._id !== _id));
  } else {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem._id === _id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
  }
};
const addToCart = (_id) => {
  const isItemInCart = cartItems.find((cartItem) => cartItem._id === _id);

  if (isItemInCart) 
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem._id === _id
          ? { ...cartItem, quantity: cartItem.quantity + 1 } 
          : cartItem
      )
    );
  };



  const clearCart = () => {
    setCartItems([]);
  };


  const totalPrice=()=>{
   
      return cartItems.reduce((total, item) => total + item.price * item.quantity, 0); // calculate the total price of the items in the cart
  }



  return(
    <ItemContext.Provider value={{itemData,getData,showModal,setShowModal,addItem,cartItems
    ,addToCart,removeFromCart,totalPrice,clearCart,totalCartItems,
    showOrderForm,setShowOrderForm}}>
    {children}
</ItemContext.Provider>
  )

}

export default ItemContext;