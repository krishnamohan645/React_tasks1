import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./header.css"

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Product Listing</Navbar.Brand>
          <Nav className="me-auto">
            <Link to={"/"} className='navbar1'>Home</Link>
            <Link to={"/products"} className='navbar1'>Products</Link>
            <Link to={"/contact"} className='navbar1'>Contact</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;