import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./header.css"
// import { useContext } from 'react';
// import { DataShare } from '../navigation-stack/navigation-stack';
const ColorSchemesExample=()=> {
  return (
    <>

      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Product Listing</Navbar.Brand>
          <Nav className="me-auto">
            <Link to={"/"} className='navbar1'>Home</Link>
            <Link to={"/recipes"} className='navbar1'>Products</Link>
            <Link to={"/contact"} className='navbar1'>Contact</Link>
            <Link to={"/login"} className='navbar1'>Login</Link>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;