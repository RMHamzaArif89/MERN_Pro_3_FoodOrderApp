//this collection will be use to find filter or search the products|data ...
require('dotenv').config()
const mongoose=require('mongoose')


const foodItems= new mongoose.Schema({
    //these are the names of input...name='name'
    name:{
        type:String,
        // required:true

    },
    price:{
        type:Number,
        // required:true

    },
    img:{
        type:String,
        // required:true

    },
    detail:{
        type:String,
        // required:true

    },
    data:{
        type:String
    }

    

})








// mongoose collection name specfied//created the new collection|table
const Food_Items= new mongoose.model("FoodDelivery",foodItems)

//export the schema that will be import in the main.js file
module.exports=Food_Items;
