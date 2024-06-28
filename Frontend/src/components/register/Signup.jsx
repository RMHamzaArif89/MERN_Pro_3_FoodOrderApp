import React, { useContext, useState } from 'react'
import {useNavigate} from 'react-router-dom'



function Signup() {
    const [values,setValues]=useState({
        name:'',
        email:'',
        password:'',
        cell:'',
        address:'',



    })

    
    const navigate=useNavigate()

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

    const handleLogin=async(e)=>{
      console.log('login',values)
      e.preventDefault();
 try{
  const response=await fetch('http://localhost:5000/api/signup',{
    method:'POST',
    headers:{
  "Content-Type":'application/json'
    },
    body:JSON.stringify(values),
    credentials: 'include'  
})
console.log(response)
 if(response.ok){
  
  setValues({
    email:'',
    password:'',
    address:'',
    name:'',
    cell:''
})
navigate("/")
 }else{
    console.log('login error')
 }
    }

  catch(e){
    console.log('login error',e)
  }
}

  return (
   <>
   <form onSubmit={(e)=>{handleLogin(e)}} className='container' >

   <div className="mb-3">
    <label htmlFor="exampleInputname" className="form-label">Name</label>
    <input value={values.name} name='name' onChange={(e)=>{handleChange(e)}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

   <div className="mb-3">
    <label htmlFor="exampleInputCell" className="form-label">Cell</label>
    <input value={values.cell} name='cell' onChange={(e)=>{handleChange(e)}} type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

   <div className="mb-3">
    <label htmlFor="exampleInputaddress" className="form-label">Address</label>
    <input value={values.address} name='address' onChange={(e)=>{handleChange(e)}} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>

  


  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input value={values.email} name='email' onChange={(e)=>{handleChange(e)}} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input value={values.password} name='password' onChange={(e)=>{handleChange(e)}} type="password" className="form-control" id="exampleInputPassword1"/>
  </div>

  <button type="submit" className="btn btn-primary">Signup</button>
</form>
   </>
  )
}

export default Signup
