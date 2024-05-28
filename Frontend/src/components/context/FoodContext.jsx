import React, { useEffect } from 'react'
import { createContext, useState } from 'react';

const ItemContext = createContext(null);


export const ContextProvider=({children})=>{
  const  [itemData,setItemData]=useState([])
    



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


    



  return(
    <ItemContext.Provider value={{itemData,getData}}>
    {children}
</ItemContext.Provider>
  )

}

export default ItemContext;