import React from 'react'
import { Header } from 'semantic-ui-react'

class SeatplanText extends React.Component {

    render() {
        return (
            <>
                <Header as='h3' style={{ fontSize: '2em' }}>
                    Seatplan Designer
          </Header>
                <p style={{ fontSize: '1.33em' }}>
                  This Seatplan Designer is created for LVPReservingen. 
          </p>
                <p style={{ fontSize: '1.33em' }}>
                I started at LVP as intern to create a proof of concept for the customers of LVP. These customers should be able to create a seatplan within the frontend of Angular without an effort.
              </p>
                <p style={{ fontSize: '1.33em' }}> A customer should be able to create a seatplan but also edit every single bit of seat or row data. Some actions are: rotation, undo/redo, extend rows and adding ranks.
                
               </p><p style={{ fontSize: '1.33em' }}> I finished this internship with a 9.3, and LVP offered me a job to extend the possibilities inside the Seatplan Designer.
          </p>
                <p style={{ fontSize: '1.33em',marginBottom:'1.5em' }}> At the moment of writing this I am working not only on the Seatplan Designer but also on several API's at LVP. 
          </p>
            </>
        )
    }
}

export default SeatplanText