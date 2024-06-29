import React, { useContext, useState } from 'react'
import './form.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import ItemContext from '../context/FoodContext';
function Form() {
    const [values, setValues] = useState({
        name: '',
        price: '',
        img: '',
        detail: '',
        size: '',
    })
    const navigate = useNavigate()

    const handleChange = (e) => {

        // e.preventDefault()

        let name = e.target.name;
        let val = e.target.value;

        setValues((pre) =>
        ({
            ...pre, [name]: val
        }
        )
        )

    }


    const handleSubmit=async(e)=>{

      e.preventDefault();
      const formData=new FormData()
      formData.append("img",values.img)
      formData.append("name",values.name)
      formData.append("price",values.price)
      formData.append("detail",values.detail)
      formData.append("size",values.size)


    try{
       const res=await axios.post(
            "http://localhost:5000/api/createItems",
            formData,{
            headers:{
              "Content-Type":"multipart/form-data",
              credentials: 'include'
            }
            }
            ).then(
                setValues({
                    name:'',
                    price:'',
                    img:'',
                    detail:'',
                    size:'',
                })
            )
            if(res){
                navigate('/')
            }





    }
    catch(err){
        console.log(err)
    }

    }
    


    return (
        <div className="form-con">
            <div class="container">
                <div class="text">
                    Add the Item
                </div>
                <form onSubmit={(e) => { handleSubmit(e) }} encType='multipart/form-data'>
                    <div class="form-row">
                        <div class="input-data">
                            <input onChange={(e) => { handleChange(e) }} value={values.name} name="name" type="text" required />
                            <div class="underline"></div>
                            <label for="">Item Name</label>
                        </div>
                        <div class="input-data">
                            <input onChange={(e) => { handleChange(e) }} value={values.size} name="size" type="text" required />
                            <div class="underline"></div>
                            <label for="">size</label>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="input-data">
                            <input onChange={(e) => { handleChange(e) }} value={values.price} name="price" type="text" required />
                            <div class="underline"></div>
                            <label for="">Price</label>
                        </div>
                        <div class="input-data">
                            <input onChange={(e) => setValues(pre => { return { ...pre, [e.target.name]: e.target.files[0] } })} name="img" type="file" accept='image/*' required />
                            <div class="underline"></div>

                        </div>
                    </div>
                    <div class="form-row">
                        <div class="input-data">
                            <input onChange={(e) => { handleChange(e) }} value={values.detail} name="detail" type="text" required />
                            <div class="underline"></div>
                            <label for="">detail</label>
                        </div>

                    </div>
                    <button className="btn" type="submit">Create Item</button>

                </form>
            </div>
        </div>
    )
}

export default Form
