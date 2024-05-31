//this collection will be use to find filter or search the products|data ...
require('dotenv').config()
const mongoose=require('mongoose')


const orderItems= new mongoose.Schema({
    //these are the names of input...name='name'
    name:{
        type:String,
        // required:true

    },
    email:{
        type:String,
        // required:true

    },
    address:{
        type:String,
        // required:true

    },
    postalCode:{
        type:String,
        // required:true

    },
    street:{
        type:String
    },
    totalPrice:{
        type:Number,
        // required:true

    },

    

})








// mongoose collection name specfied//created the new collection|table
const order_Items= new mongoose.model("order_Items",orderItems)

//export the schema that will be import in the main.js file
module.exports=order_Items;
