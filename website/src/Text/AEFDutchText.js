import React from 'react'
import { Header } from 'semantic-ui-react'

class AEFDutchText extends React.Component {

    render() {
        return (
            <>
                <Header as='h3' style={{ fontSize: '2em' }}>
                    Algorithm Evaluation Framework
          </Header>
                <p style={{ fontSize: '1.33em' }}>
                    Tijdens mijn afstudeerstage heb ik een framwork ontwikkeld voor het maken en vergelijken van algoritmes.
          </p>
                <p style={{ fontSize: '1.33em' }}>
                    Dit framework is ontwikkeld aan de hand van .Net framework en kan onder andere, algoritmes uitvoeren, data ophalen en verwerken. 
              </p>
                <p style={{ fontSize: '1.33em' }}> Het framework is ontwikkeld om tijdens de energietransitie algoritmes te ontwikkelen die voorkomen dat huishoudens te veel stroom leveren of verbuiken. 
          </p>
               
            </>
        )
    }
}

export default AEFDutchText