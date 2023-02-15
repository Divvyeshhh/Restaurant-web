import React from 'react'
import Trip from './Trip'

export default function PopularTrip() {
    const imgDubai = require('./pics/download.jpeg')
    const imgGreece = require('./pics/downloadg.jpeg')
    const imgVietnam = require('./pics/downloadv.jpeg')
    const imgSwiss = require('./pics/downloads.jpeg')
    const imgAus = require('./pics/downloada.jpeg')
  return (
    <div>
        <h3 style={{color: '#3B7197', margin: '20px 0px 0px 135px'}}>Our specials</h3>
        <div className='d-flex' style={{margin: '20px 0px 0px 135px'}}>
            <Trip place="Dubai" pic={imgDubai} />
            <Trip place="Greece" pic={imgGreece} />
            <Trip place="Vietnam" pic={imgVietnam} />
            <Trip place="Switzerland" pic={imgSwiss} />
            {/* <Trip place="Australia" pic={imgAus} /> */}
        </div>
    </div>
  )
}
