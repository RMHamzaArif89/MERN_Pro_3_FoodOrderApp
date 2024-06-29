import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../form/form.css'


function Signup() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        cell: '',
        address: '',



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

    const handleLogin = async (e) => {
        console.log('login', values)
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/signup', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(values),
                // credentials: 'include'
            })
            console.log(response)
            if (response.ok) {

                setValues({
                    email: '',
                    password: '',
                    address: '',
                    name: '',
                    cell: ''
                })
                navigate("/")
            } else {
                console.log('login error')
            }
        }

        catch (e) {
            console.log('login error', e)
        }
    }

    return (
        <>
            <div className="form-con">
                <div className="container">
                    <form onSubmit={(e) => { handleLogin(e) }} >

                        <div className="form-row">
                        <div class="input-data">
                            <input onChange={(e) => { handleChange(e) }} value={values.name} name="name" type="text" required />
                            <div class="underline"></div>
                            <label for="">Name</label>
                        </div>
                        </div>

                     <div className="form-row">
                     <div class="input-data">
                            <input onChange={(e) => { handleChange(e) }} value={values.cell} name="cell" type="number" required />
                            <div class="underline"></div>
                            <label for="">Cell</label>
                        </div>
                     </div>

                      <div className="form-row">
                      <div class="input-data">
                            <input onChange={(e) => { handleChange(e) }} value={values.address} name="address" type="text" required />
                            <div class="underline"></div>
                            <label for="">Address</label>
                        </div>
                      </div>
                      <div className="form-row">
                      <div class="input-data">
                            <input onChange={(e) => { handleChange(e) }} value={values.email} name="email" type="email" required />
                            <div class="underline"></div>
                            <label for="">Email</label>
                        </div>
                      </div>
                    <div className="form-row">
                    <div class="input-data">
                            <input onChange={(e) => { handleChange(e) }} value={values.password} name="password" type="password" required />
                            <div class="underline"></div>
                            <label for="">password</label>
                        </div>

                    </div>





                        <button type="submit" className="btn btn-primary">Signup</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup
