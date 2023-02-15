import React from 'react'
import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'

export default function NavbarElement() {
  return (
    <Navbar id="nav">
        <Container>
            <Navbar.Brand id='navbar-title'>Travelon</Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
            <NavDropdown title="Profile">
              <NavDropdown.Item>Account</NavDropdown.Item>
              <NavDropdown.Item>Signout</NavDropdown.Item>
            </NavDropdown>
        </Container>
    </Navbar>
  )
}
