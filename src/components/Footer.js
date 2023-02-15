import React from 'react'
import { Nav } from 'react-bootstrap'

export default function Footer() {
  return (
    <div>
        <hr style={{margin: '20px 70px'}}/>
        <div className='d-flex justify-content-center align-items-center'>
            <Nav>
                <Nav.Link id="footer-link">About</Nav.Link>
                <Nav.Link id="footer-link">Privacy</Nav.Link>
                <Nav.Link id="footer-link">Terms</Nav.Link>
                <Nav.Link id="footer-link">Feedback</Nav.Link>
                <Nav.Link id="footer-link">Contribute</Nav.Link>
                <Nav.Link id="footer-link">Help Center</Nav.Link>
            </Nav>
        </div>
    </div>
  )
}
