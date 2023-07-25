import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import { Form, Modal } from 'react-bootstrap';
import {Link} from 'react-router-dom'


function NavBar() {
  const [showModal, setShowModal] = useState(false);
  const handleSignInClick = () => {
    setShowModal(true);
  };
  return (
    <div>
        <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home">
          <h1 style={{color: "white",fontFamily: 'Montserrat', fontSize: "30px", fontWeight:"700", letterSpacing:' 2px', textTransform: "uppercase", textShadow: "2px 2px #000000"}}>MOVIE CENTRAL</h1>

          </Navbar.Brand>
          
          <Button variant="danger" onClick={handleSignInClick}>Sign In / Sign Up</Button>
        

          <Modal show={showModal} onHide={() => setShowModal(false)}>
  <Modal.Header closeButton>
    <Modal.Title>Sign In</Modal.Title>
  </Modal.Header>
  <Modal.Body>
  <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      
    </Form>
  </Modal.Body>
</Modal>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar