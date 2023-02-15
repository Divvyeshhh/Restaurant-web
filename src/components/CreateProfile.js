import React from 'react'
import { Card, Button } from 'react-bootstrap'

export default function () {
  return (
    <div>
        <Card className='d-flex align-items-center' style={{width: '62.5%', margin: '30px 0px 0px 270px', padding: '15px'}}>
            <h1 id="plan-title">Plan your own journey</h1>
            <p id="plan-subtxt">Start planning your next getaway from scratch with some help</p>
            <Button variant='primary' id="create-button" style={{width: '35%'}}>Create my trip</Button>
        </Card>
    </div>
  )
}
