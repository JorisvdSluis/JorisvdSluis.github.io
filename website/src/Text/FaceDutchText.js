import React from 'react'
import { Header } from 'semantic-ui-react'

class FaceDutchText extends React.Component {

    render() {
        return (
            <>
                <Header as='h3' style={{ fontSize: '2em' }}>
                    Face Recognition
          </Header>
                <p style={{ fontSize: '1.33em' }}>
                    Face recognition is een project dat ebstond uit het oplossen van een probleem uit de tourisme branch in samenwerking met Methylium. 
          </p>
                <p style={{ fontSize: '1.33em' }}>
                    We hebben een proof of concept gemaakt die bestond uit het registreren van een gebruiker waarna hij met z'n gezicht een hoteldeur kon openen.
          </p>
                <p style={{ fontSize: '1.33em' }}>
                    Uit het onderzoek is gebleken dat Amazon Rekognition de beste optie was voor de implementatie van dit concept.

          </p>
                <p style={{ fontSize: '1.33em', marginBottom:'11em'}}>
                    Dit project is ontwikkeld voor de Hogeschool Rotterdam.
                  </p>
            </>
        )
    }
}

export default FaceDutchText