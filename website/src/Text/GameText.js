import React from 'react'
import { Header } from 'semantic-ui-react'

class GameText extends React.Component {

    render() {
        return (
            <>
                <Header as='h3' style={{ fontSize: '2em' }}>
                    Guitar Shaq
          </Header>
                <p style={{ fontSize: '1.33em' }}>
                    Guitar Shaq is a game created with python and pygame, a library which is created for making multimedia applications.
          </p>
                <p style={{ fontSize: '1.33em' }}>
                    I created this game on my own from scratch, the objective is to play music with your keyboard, everytime you hit the right key you earn points. </p>
                <p style={{ fontSize: '1.33em' }}>The game was designed using Piskel a tool to create pixel art.
          </p>
                <p style={{ fontSize: '1.33em', marginBottom:'11em' }}>This was a project created for the Rotterdam University of Applied Sciences.
          </p>
            </>
        )
    }
}

export default GameText