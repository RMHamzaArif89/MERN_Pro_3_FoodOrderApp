const express=require('express')
const router=express.Router()
const food_Items=require('../model/schema')
const order_Items=require('../model/orderSchema')

const bodyParser=require('body-parser')

const multer=require('multer')
const path=require('path')
const userAuth=require('../userAuth')




//this is middleWare use to encode the form&body request value //example req.body from form
router.use(bodyParser.urlencoded({extended:false}));
router.use(express.json())

//for authenticate user
router.use(userAuth)


//for upload file
router.use(express.static('upload'))


//upload img logic
// img upload
const Storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./upload")
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now()
    return cb(null,`${uniqueSuffix}-${file.originalname}`)
  }
})

const upload = multer({ storage:Storage })







router.post('/createItems',upload.single('img'),async(req,res)=>{
//  console.log(req.file)
   
    try{
      
        const foodData=new food_Items({
            name:req.body.name,
            price:req.body.price,
            img:req.file.filename,
            detail:req.body.detail,
            size:req.body.size
        })
      
       const create= await food_Items.create(foodData)
     if(create){
      return   res.status(200).json({msg:'Food Item has been created',data:foodData})
     }
        
    }
   
    catch(err){
    return  res.status(400).json({msg:'could not find the connection || data is wrong'})
    }
})







//Get the data
router.get('/foodItems',async(req,res)=>{
  
 try{
  let Data=await food_Items.find({})
  if(Data){
   return  res.status(200).json({data:Data,msg:'Data has been collected from the backend'})

  }

    return res.status(400).json({msg:'data not found || wrong inoformation given'})
  
 }
 catch(e){
  res.status(400).json({msg:'could not process the request'})
 }

})



//Get the single Data
router.get('/foodItem/:id',async(req,res)=>{
 try{
  const _id=req.params.id
  let Data=await food_Items.findById({_id})
  if(Data){
   return  res.status(200).json({data:Data, msg:'find the single data of required item'})

  }
    return res.status(400).json({msg:'could not process the request'})
  
 }
 catch(e){
  res.status(400).json({msg:'wrong information given'})
 }

})





//Delete the data by id
router.delete('/deleteItem/:id',async(req,res)=>{
 try{
  const _id=req.params.id
  
  await food_Items.findByIdAndDelete({_id})
  

   return res.status(200).json({msg:'deleted the item'})
 
 }
 catch(e){
  res.status(400).json({
    msg:'could not process the delete request '
  })
 }
})


//update the data by id
router.patch('/updateItem/:id',async(req,res)=>{
 try{
  const _id=req.params.id
  
  await food_Items.findByIdAndUpdate(
    {_id},{
    name:req.body.name,
    price:req.body.price,
    img:req.body.img,
    detail:req.body.detail
  })
  

   return res.status(200).json({msg:'data has been updated'})
 
 }
 catch(e){
  res.status(400).json({
    msg:'could not process the request for the update'
  })
 }
})










//create the order


router.post('/createOrder',async(req,res)=>{
  console.log(req.body)
    
     try{
       
         const orderData=new order_Items({
             email:req.body.email,
             name:req.body.name,
             address:req.body.address,
             postalCode:req.body.postalCode,
             street:req.body.street,
             totalPrice:req.body.totalPrice
         })
       
        const create= await order_Items.create(orderData)
      if(create){
       return   res.status(200).json({msg:'Food Item has been created',data:orderData})
      }
         
     }
    
     catch(err){
     return  res.status(400).json({msg:'could not find the connection || data is wrong'})
     }
 })



 //get the orders data
 //Get the data
router.get('/orders',async(req,res)=>{
  
  try{
   let Data=await order_Items.find({})
   if(Data){
    return  res.status(200).json({data:Data,msg:'Data has been collected from the backend'})
 
   }
 
     return res.status(400).json({msg:'data not found || wrong inoformation given'})
   
  }
  catch(e){
   res.status(400).json({msg:'could not process the request'})
  }
 
 })
 

 //Delete the data by id
router.delete('/deleteOrder/:id',async(req,res)=>{
  try{
   const _id=req.params.id
   
   await order_Items.findByIdAndDelete({_id})
   
 
    return res.status(200).json({msg:'deleted the item'})
  
  }
  catch(e){
   res.status(400).json({
     msg:'could not process the delete request '
   })
  }
 })
 

module.exports=router;