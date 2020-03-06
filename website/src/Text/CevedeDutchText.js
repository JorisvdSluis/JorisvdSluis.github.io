import React from 'react'
import { Header } from 'semantic-ui-react'

class CevedeDutchText extends React.Component {

    render() {
        return (
            <>
                <Header as='h3' style={{ fontSize: '2em' }}>
                    Cevede Webshop
          </Header>
                <p style={{ fontSize: '1.33em' }}>
                 Deze webshop heb ik ontwikkeld voor CeVeDe InstallatieTechniek B.V.
          </p>
                <p style={{ fontSize: '1.33em' }}>
                    Ik heb de structuur van de webshop opgezet en de logica uitgebreid met custom javascript, dit was nodig voor de vele varianten van producten.
              </p>
                <p style={{ fontSize: '1.33em' }}> Voor de vele varianten (duizenden) heb ik een Python script geschreven dat de gegevens ophaalt verwerkt en verzend. 
          </p>
                <p style={{ fontSize: '1.33em', marginBottom:'11em'}}> Naast de ontwikkeling verzorg ik ook de SEO en social media intergratie.
          </p>
            </>
        )
    }
}

export default CevedeDutchText