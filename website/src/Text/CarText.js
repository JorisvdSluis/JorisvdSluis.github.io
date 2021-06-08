import React from 'react'
import { Header } from 'semantic-ui-react'

class CarText extends React.Component {

    render() {
        return (
            <>
                <Header as='h3' style={{ fontSize: '2em' }}>
                    Team Phidippides
          </Header>
                <p style={{ fontSize: '1.33em' }}>
                  Road segmentation and obstacle avoidance for the Quadriga
          </p>
                <p style={{ fontSize: '1.33em' }}>
                During my Minor at the University of Rotterdam i've helped developing a self driving car to compete in the Shell Eco Marathon.
              </p>
                <p style={{ fontSize: '1.33em' }}>With Python and Nvidia neural networks we've combined obstacle detection and road segmantion into one reusable package.
          </p>
                <p style={{ fontSize: '1.33em', marginBottom:'11em'}}> It is possible to drive around a circuit with this package without any human interference.
          </p>
            </>
        )
    }
}

export default CarText