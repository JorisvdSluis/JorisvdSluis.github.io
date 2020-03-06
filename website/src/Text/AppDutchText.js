import React from 'react'
import { Header } from 'semantic-ui-react'

class AppDutchText extends React.Component {

    render() {
        return (
            <>
                <Header as='h3' style={{ fontSize: '2em' }}>
                    Lucky Llama
          </Header>
                <p style={{ fontSize: '1.33em' }}>
                    Lucky Llama is een Fortnite companion App gemaakt met Flutter en openbare Fortnite API's
          </p>
                <p style={{ fontSize: '1.33em' }}>
                    Deze applicatie heb ik gemaakt in samenwerking met Maikel Veen. De app is een uitbreiding voor de populaire game onder jongeren. In de app is het mogelijk om gebruikersinformatie, nieuws en veel meer op te halen.
              </p>
                <p style={{ fontSize: '1.33em' }}>Ik heb meerdere pagina's ontworpen en gemaakt, daarnaast heb ik de communicatie tussen de fortnite api gemaakt.
          </p>
                <p style={{ fontSize: '1.33em',marginBottom:'11em' }}>Dit project is gemaakt als opdracht voor de Hogeschool Rotterdam
          </p>
            </>
        )
    }
}

export default AppDutchText