import React, { useContext } from 'react'
import { LoginContext } from '../context/LoginContext'
import { Container, Grid, Box } from '@mui/material'

import './styles.css'


const Profile = () => {
  const { loginUser } = useContext(LoginContext)
  console.log(loginUser)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        Profile
        <Grid container spacing={4} justify="center">
          <Grid item xs={6}>
            <div className="border-example" >xs=12</div>
          </Grid>
          <Grid item xs={6}>
            <div className="border-example">xs=12</div>
          </Grid>
          <Grid item xs={12}>
            <div className="border-example">xs=12</div>
          </Grid>
          <Grid item xs={8}>
            <div className="border-example">xs=8</div>
          </Grid>
        </Grid>

        <Box
          sx={{
            width: 300,
            height: 300,
            backgroundColor: 'primary.dark',
            '&:hover': {
              backgroundColor: 'primary.main',
              height: 150,
              width: 150,
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
      </Container>
    </Box>
  )
}

export default Profile
