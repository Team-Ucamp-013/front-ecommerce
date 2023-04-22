import React, { useContext, useEffect } from 'react'
import IndexLayout from './layouts'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
  const { userData } = useContext(UserContext)
  const navigation = useNavigate()

  const content = (
    <div>
      Profile
      <h1>
        UserName: {userData.username}
      </h1>
      <h2>
        Email: {userData.email}
      </h2>
    </div>
  )
  return (
    <IndexLayout render={content} />
  )
}

export default Profile
