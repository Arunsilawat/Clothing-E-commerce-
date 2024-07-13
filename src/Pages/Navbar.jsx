import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link,Outlet } from 'react-router-dom';

const Nevbar=()=>{
  return(
    <> 
    <Navbar  expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#" style={{fontWeight:'bold',fontSize:25}}>Arun Silawat</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link style={{margin:10,textDecoration:'none',color:'black',fontSize:20}} to="home">Home</Link>
            <Link style={{margin:10,textDecoration:'none',color:'black',fontSize:20}} to="men">Men's</Link>
            <Link style={{margin:10,textDecoration:'none',color:'black',fontSize:20}} to="women">Women's</Link>
            <Link style={{margin:10,textDecoration:'none',color:'black',fontSize:20}} to="kids">Kid's</Link>

            <NavDropdown style={{margin:3,fontSize:20}} title="Pages" id="pages">
              <NavDropdown.Item href="about">About Us</NavDropdown.Item>
              <NavDropdown.Item href="contact">
                Contant Us
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="product">
                Products
              </NavDropdown.Item>
            </NavDropdown>
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}
export default Nevbar;