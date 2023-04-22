import React, { useContext } from 'react'
import { Navbar, Container, Nav, Form } from 'react-bootstrap'
import { ThemeContext } from '../../context/ThemeContext';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const IndexLayout = ({ render }) => {
  console.log(render)
  const navigation = useNavigate()
  const { theme, toggleTheme, logout } = useContext(ThemeContext)
  const { userData } = useContext(UserContext)

  return (
    <>
      <Navbar bg={theme} variant={theme}>
        <Container>
          <Navbar.Brand href="#home">Arlequin Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {!userData &&
              <Nav.Link href="/regiter">Registrarse</Nav.Link>
            }
            {!userData &&
              <Nav.Link href="/login">Iniciar sesion</Nav.Link>
            }
            {
              userData &&
              <Nav.Link href="/profile">{userData.username}</Nav.Link>
            }
          </Nav>
          <Form>
            <Form.Check // prettier-ignore
              type="switch"
              id="custom-switch"
              onChange={() => toggleTheme()}
            />
          </Form>

        </Container>
      </Navbar>
      {render}
    </>
  )
}

export default IndexLayout