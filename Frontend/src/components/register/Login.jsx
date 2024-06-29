import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../form/form.css'



function Login() {
    const [values, setValues] = useState({
        email: '',
        password: ''

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
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(values),
                credentials: 'include'
            })
            console.log(response)
            if (response.ok) {

                setValues({
                    email: '',
                    password: ''
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

                    <form onSubmit={(e) => { handleLogin(e) }}  >

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



                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
