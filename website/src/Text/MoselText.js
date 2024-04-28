import React from 'react'
import { Header } from 'semantic-ui-react'

class MoselText extends React.Component {

    render() {
        return (
            <>
                <Header as='h3' style={{ fontSize: '2em' }}>
                   Villa-Mosel.com
          </Header>
                <p style={{ fontSize: '1.33em' }}>
                    This interactive website for Villa Mosel is designed and developed by me.
          </p>
                <p style={{ fontSize: '1.33em' }}>
                It is possible to make reservations, display images and view videos.
              </p>
                <p style={{ fontSize: '1.33em' }}> 
                The website is developed with Angular and uses a NodeJs server to make reservations. 
                The owner also got a dashboard which makes it possible to accept and change reservations.

          </p>
               
            </>
        )
    }
}

export default MoselText