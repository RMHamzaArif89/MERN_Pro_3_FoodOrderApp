const express=require('express')
const router=express.Router()
const food_Items=require('../model/schema')
const bodyParser=require('body-parser')

const multer=require('multer')
const path=require('path')



//this is middleWare use to encode the form&body request value //example req.body from form
router.use(bodyParser.urlencoded({extended:false}));
router.use(express.json())


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







router.post('/createItem',upload.single('img'),async(req,res)=>{
 
   
    try{
      
     const data=await food_Items.find({name:req.body.name})
     if(data){
      return res.status(400).json({msg:'product item already exist'})
     }
        const foodData=new food_Items({
            name:req.body.name,
            price:req.body.price,
            img:req.file.filename,
            detail:req.body.detail,
            date:req.body.date
        })
      
       const create= await food_Items.create(foodData)
     if(create){
      return   res.status(200).json({msg:'Food Item has been created'})
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
router.get('/foodItems/:id',async(req,res)=>{
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
router.delete('/deleteProduct/:id',async(req,res)=>{
 try{
  const _id=req.params.id
  
  await food_Items.findByIdAndDelete({_id})
  

   return res.status(200).json({msg:'success'})
 
 }
 catch(e){
  res.status(400).json({
    msg:e
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







 

module.exports=router;