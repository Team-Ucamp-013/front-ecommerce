import React from 'react'
import { Link } from "react-router-dom";
import { Button, Row, Container } from 'react-bootstrap';
import IndexLayout from './components/Layouts';
import './App.css'

const App = () => {

  const content = (
    <section className="bg-hero">
      <Container maxWidth="lg" >
        <h1>Adentrate en el mundo de los videojuegos</h1>
        <Row>
          <Link to='/register'>register</Link>
          <Link to='/login'>login</Link>
        </Row>
      </Container>
    </section>
  )

  return (
    <IndexLayout render={content} />
  )
}

export default App
