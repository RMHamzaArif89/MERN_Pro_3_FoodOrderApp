const express=require('express')
const router=express.Router()
const Users=require('../model/userSchema')
const bodyParser=require('body-parser')
const cookieParser=require('cookie-parser')
const bcrypt=require('bcryptjs')

const path=require('path')
router.use(cookieParser())



//this is middleWare use to encode the form&body request value //example req.body from form
router.use(bodyParser.urlencoded({extended:false}));
router.use(express.json())




router.post('/signup',async(req,res)=>{
  console.log('signup')
 
    try{
      const emailExist=await Users.findOne({email:req.body.email})
      if(emailExist){
        return  res.status(400).json('email already exist')
      }
        const userData=new Users({
            name:req.body.name,
            cell:req.body.cell,
            email:req.body.email,
            password:req.body.password,
            address:req.body.address
        })
        //or simply second method
       // const userData=new userSchema(req.body)
       const token= await userData.generateToken()
       const refreshToken= await userData.generateRefreshToken()
  
       const create= await Users.create(userData)
       const options= {
        httpOnly:true,
        secure:true,
        maxAge:100000,
        sameSite:'strict'
       }
     if(create){
      return   res.status(200)
      .cookie("accessToken", token,options)
      .cookie("refreshToken",refreshToken,options)
      .json(userData)
     }
        
    }
   
    catch(err){
    return  res.status(400).json('false')
    }
  })
  
  
  router.post('/login', async(req,res)=>{
  // console.log('cookietoken',req.cookies.accessToken)
  
  try{
    const email=req.body.email;
    const password=req.body.password;
    console.log('login',password)
    if(!email ||  !password){
      return  res.status(400).json('please fill the form feilds')
    }
    const data= await Users.findOne({email:email})
    if(!data){
      console.log('not find data')
      return  res.status(400).json('invalid login details')
    }
  
   
    const passwordMatch= await bcrypt.compare(password,data.password)
    const token=await data.generateToken()
    const refreshToken= await data.generateRefreshToken()
    const options= {
      httpOnly:true,
      secure:true,
      maxAge:3000000,
      sameSite:'strict'
     }
     if(!passwordMatch){
      console.log('not match pwd')
     }
  
   
  
    if(passwordMatch){
        console.log('password match')
        return res.status(200)
        .cookie("accessToken", token, options)
        .cookie("refreshToken",refreshToken,options)
        .json({
          id:data._id
        })
  // console.log('okay')
        
    }else{
      return  res.status(400).json('invalid login details')
        console.log('not okay')
    }
  }
  catch(e){
    res.status(400).send(e)
  }
    
  })
  
  router.get('/logout', async(req,res)=>{
    console.log('logout enter')
    try{
     res.status(200).clearCookie('accessToken')
     .json('logout')
     
    }
    catch(err){
      res.status(400).json({msg:err})
    }
    
  })

  
  module.exports=router;