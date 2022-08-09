import { Link } from "react-router-dom"
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'



export const Navbarr = () => {
  return (
    <>

      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/toppings">Toppings</Nav.Link>
            <Nav.Link href="/animals">Animals</Nav.Link>
            <Nav.Link href="/locations">Locations</Nav.Link>
            <Nav.Link href="/animals/register">Register a New Animal</Nav.Link>
          </Nav>
        </Container>
      </Navbar>







    </>
  );
};
