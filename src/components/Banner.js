import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function () {
    const bg = require('./pics/downloadland.jpeg')
  return (
    <div>
        <Card className='d-flex align-items-center' id="banner" style={{width: '62.5%', margin: '30px 0px 0px 270px'}}>
            <Card.Img src={bg}/>
            <Card.ImgOverlay>
                <Card.Title>
                    <h1 style={{color: 'white', margin: '480px 0px 0px 13px'}}>Journey through time.</h1>
                </Card.Title>
                <Card.Text>
                    <h5 style={{color: 'white', margin: '0px 0px 0px 13px'}}>Experience the greatness</h5>
                </Card.Text>
            </Card.ImgOverlay>
        </Card>
    </div>
  )
}
