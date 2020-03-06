import React from 'react'
import { Header } from 'semantic-ui-react'

class GameDutchText extends React.Component {

    render() {
        return (
            <>
                <Header as='h3' style={{ fontSize: '2em' }}>
                    Guitar Shaq
          </Header>
                <p style={{ fontSize: '1.33em' }}>
                    Guitar Shaq is een game die ik gemaakt heb met Python en pygame, een bibliotheek die het mogelijkmaakt om multimedia applicaties te maken.
                             </p>
                <p style={{ fontSize: '1.33em' }}>
                    Ik heb deze game van de grond af ontwikkeld , het doel is om muziek te spelen door het gebruik van je toetsenbord. Als je de toets op het juiste moment raakt verdien je punten.
                    </p>
                <p style={{ fontSize: '1.33em' }}>De graphics heb ik zelg getekend met Piskel een tool om pixel art te tekenen.
          </p>
                <p style={{ fontSize: '1.33em', marginBottom:'11em' }}>          Dit project is ontwikkeld voor de Hogeschool Rotterdam.
          </p>
            </>
        )
    }
}

export default GameDutchText