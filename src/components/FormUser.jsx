import React, { useState } from 'react'
import axios from 'axios'

const FormUser = () => {
     const [userData,setData] = useState()

     const saveUser = async() =>{
      const url = 'http://localhost:4000/api/v1/register'
      const result = await axios.post(url, userData)
      console.log(result)
     }
    
     const handleChange = (e) =>{
      const {name, value} = e.target
      setData({
        ...userData,
        [name]: value
      })
      console.log(setData)
     }


  return (
    <div>
      <h1>Registro Recio</h1>
      <form>
        <input type="text" placeholder='Nombre' name='name' onChange={handleChange}/>
        <input type="text" placeholder='Apellido' name='lastname' onChange={handleChange}/>
        <input type="text" placeholder='Username' name='username' onChange={handleChange}/>
        <input type="text" placeholder='email' name='email' onChange={handleChange}/>
        <input type="text" placeholder='password' name='password' onChange={handleChange}/>
        <button onClick={()=> saveUser()}>Enviar</button>
      </form>
    </div>
  )
}

export default FormUser
