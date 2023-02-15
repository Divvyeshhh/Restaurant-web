import React from 'react'
import { Card, FormControl, InputGroup, Form, Button } from 'react-bootstrap'

export default function Contact() {
  return (
    <div>
        <Card id="contact-card" style={{width: '62%', margin: '30px 0px 0px 273px', padding: '15px'}}>
            <h1 style={{color: '#3b7197'}}>Let us help you make that travel decision.</h1>
            <p style={{color: '#3b7197'}}>Our travel experts will get in touch with you</p>
            <InputGroup id="contact-input">
                <InputGroup.Text>Name</InputGroup.Text>
                <FormControl type="text"/>
            </InputGroup>
            <InputGroup id="contact-input">
                <InputGroup.Text>Mail</InputGroup.Text>
                <FormControl type="email"/>
            </InputGroup>
            <InputGroup id="contact-input">
                <InputGroup.Text>Mobile</InputGroup.Text>
                <FormControl type="mobile"/>
            </InputGroup>
            <Form.Check className='mt-3' type='checkbox' style={{color: '#3b7197'}} label='You agree to our friendly privacy policy' />
            <Button id='contact-button' className='mt-3'>Contact</Button>
        </Card>
    </div>
  )
}
