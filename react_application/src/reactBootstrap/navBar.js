import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./styling/styles.css"
import logo from "./logo.jpg"


function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" >
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="Image_loading" width={100} height={80}  className='imageLogo'/></Navbar.Brand>
        <Nav.Link href='#home' className='head'>Pack Your Bags<br/>
Exploring the world in comfort.</Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            
          <Nav className="me-auto">

            <Nav.Link href="#home" className='home'>Home</Nav.Link>
            <Nav.Link href="#About us" className='about'>About Us</Nav.Link>
            <NavDropdown title="India" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Delhi Tour</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                The Golden Temple, Amritsar
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">The taj Mahal, Agra</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.4">
                Pangong Lake, Ladakh
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Valley of Flowers, Nainital</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">ghats at Varanasi, Uttar Pradesh</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">Backwaters, Kerela</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.8">Old Goa</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.9">Old Bombay, Mumbai</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.0">Tirupati, Chittor</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="International" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/4.1">Bangkok and Bali</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.2">
                Bhutan
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/4.3">Dubai</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/4.4">
                Malaysia
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/4.5">Nepal</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.6">Sri Lanka</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.7">Switzerland</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.8">Vietnam</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.9">Cambodia</NavDropdown.Item>
              <NavDropdown.Item href="#action/5.0">Maldives</NavDropdown.Item>
              <NavDropdown.Item href="#action/5.1">Australia</NavDropdown.Item>
              <NavDropdown.Item href="#action/5.2">Europe</NavDropdown.Item>
              <NavDropdown.Item href="#action/5.3">Zurich and Paris, Itinerary</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href='#Packages' className='packages'>Packages</Nav.Link>
          <Nav.Link href='#Enquiry' className='enquiry'>Enquiry</Nav.Link>
          <Nav.Link href='#careers'className='career'>Careers</Nav.Link>
          <NavDropdown title="Admin" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/5.4">Login</NavDropdown.Item>
              <NavDropdown.Item href="#action/5.5">
                Email Login
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/5.6">Time Sheet</NavDropdown.Item>
            </NavDropdown>
          <Nav.Link href='#Contact Us' className='contact'>Contact Us</Nav.Link>
          </Nav>





          {/* <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;




