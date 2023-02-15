import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function ({place, pic}) {
  return (
    <div>
        <Card style={{width: '18rem', margin: '0px 20px 0px 0px'}}>
            <Card.Img src={pic} alt="City bg" id="bg-image"/>
            <Card.Title className='text-center'>{place}</Card.Title>
            <Card.Text className='text-center'>Starting at $999</Card.Text>
            <Button id="trip-button">Book now</Button>
        </Card>
    </div>
  )
}
