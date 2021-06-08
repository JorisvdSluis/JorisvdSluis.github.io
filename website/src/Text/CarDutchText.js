import React from 'react'
import { Header } from 'semantic-ui-react'

class CarDutchText extends React.Component {

    render() {
        return (
            <>
                <Header as='h3' style={{ fontSize: '2em' }}>
                    Team Phidippides
          </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Road segmentatie and obstacle ontwijking voor de Quadriga
          </p>
                <p style={{ fontSize: '1.33em' }}>
                  Tijdens mijn minor op de Hogeschool van Rotterdam heb gewerkt aan de ontwikkeling van een zelfrijdende auto die deel zal nemen aan de Shell Eco Marathon.
              </p>
                <p style={{ fontSize: '1.33em' }}>Met Python en Nvidia neural networks is er een herbruikbare applicatie ontwikkeld waarmee het mogelijk is om het wegdek en obstakels te herkennen.
          </p>
                <p style={{ fontSize: '1.33em', marginBottom:'11em'}}> Met deze applicatie was het uiteindelijk mogelijk om op een circuit zonder bestuurder te rijden.
          </p>
            </>
        )
    }
}

export default CarDutchText