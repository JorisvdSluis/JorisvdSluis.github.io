import React from 'react'
import { Header } from 'semantic-ui-react'

class MoselDutchText extends React.Component {

    render() {
        return (
            <>
                <Header as='h3' style={{ fontSize: '2em' }}>
                   Villa-Mosel.com
          </Header>
                <p style={{ fontSize: '1.33em' }}>
                    Deze interactieve website voor Villa Mosel heb ik volledig ontworpen en ontwikkeld. 
          </p>
                <p style={{ fontSize: '1.33em' }}>
                   Binnen de website is het mogelijk om reserveringen te plaatsen, afbeeldingen te bekijken en video's af te spelen.
              </p>
                <p style={{ fontSize: '1.33em' }}> 
                De website is ontwikkeld met Angular en maakt gebruikt van een NodeJs server om reserveringen te plaatsen.
                Naast de website beschikt de eigenaar ook over een dashboard waarin de reserveringen bijgehouden kunnen worden.
          </p>
               
            </>
        )
    }
}

export default MoselDutchText