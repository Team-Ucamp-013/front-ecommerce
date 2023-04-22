import React, { useState, useContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../context/LoginContext';

const Loginuser = () => {
  const { loginUser, setLoginUser } = useContext(LoginContext)
  const url = 'https://back-ecommerce-bpeweln3e-arlequine.vercel.app/api/v1/auth/login'
  const url2 = 'https://back-ecommerce-bpeweln3e-arlequine.vercel.app/api/v1/users/me'
  const navigation = useNavigate()

  const handleSubmit = async () => {
    console.log(loginUser)
    axios.post(url, loginUser)
      .then(res => {
        console.log('primer paso', res.data)
        return (
          axios.get(url2, {
            headers: {
              'Access-Control-Allow-Origin': '*',
              Authorization: `Bearer ${res.data.token}`
            }
          }).then(response => {
            console.log('segundo paso', response.data)
            navigation('/profile')
          })
        )
      })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setLoginUser({
      ...loginUser,
      [name]: value
    })
    console.log(loginUser)
  }

  return (
    <div>
      <h1>Login</h1>

      <form name="form" onSubmit={(e) => e.preventDefault()} >
        <input type="text" name='email' onChange={handleChange} />
        <input type="text" name='password' onChange={handleChange} />
        <button onClick={() => handleSubmit()}>Enviar</button>
      </form>
    </div>
  )
}

export default Loginuser
