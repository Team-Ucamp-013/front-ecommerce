import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Loginuser = () => {
    const [loginUser, setLoginUser] = useState()
     const url = 'http://localhost:4000/api/v1/auth/login'
     const url2 = 'http://localhost:4000/api/v1/users/me'
     const navigation = useNavigate()
   
     const handleSubmit = async() =>{
        console.log(loginUser)
        axios.post(url, loginUser)
        .then( res =>{
            console.log(res.data)
            return (
                axios.get( url2,{
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        Authorization: `Bearer ${res.data.token}`
                    }
                }).then(response =>{
                    console.log(response.data)
                    navigation('/profile')
                })
            )
        })
     }

   const handleChange = (e) =>{
    const {name,value} = e.target
    setLoginUser({
        ...loginUser,
        [name]: value
    })
    console.log(setLoginUser)
   }

  return (
    <div>
      <h1>Login</h1>

       <form name="form" onSubmit={(e) => e.preventDefault()} >
        <input type="text" name='email' onChange={handleChange}/>
        <input type="text" name='password' onChange={handleChange}/>
        <button onClick={() => handleSubmit()}>Enviar</button>
       </form>
    </div>
  )
}

export default Loginuser
