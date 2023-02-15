import React from 'react'
import { Card, Form } from 'react-bootstrap'

export default function () {
  const background = require('./landscape.jpeg')
  return (
    <div className='d-flex justify-content-center align-items-center' id="hero">
      <Card>
        <Card.Img src={background} alt="Card image" style={{width: 900}}/>
        <Card.ImgOverlay>
          <Card.Title>
            <h1 style={{color: 'white', margin:'120px 0px 0px 0px'}} id="cover-title">Hi Divyesh, </h1> 
          </Card.Title>
          <Card.Text>
            <p id="cover-subtext" style={{color: 'white'}}>Discover the world with us and embark on the journey of a lifetime</p>
          </Card.Text>
          <Form>
            <Form.Control id="cover-input" size="m" style={{width: '60%'}} type="text" placeholder="Search destinations, sights and more"/>
          </Form>
        </Card.ImgOverlay>
      </Card>        
    </div>
  )
}
