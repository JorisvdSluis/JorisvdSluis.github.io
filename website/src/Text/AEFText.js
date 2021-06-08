import React from 'react'
import { Header } from 'semantic-ui-react'

class AEFText extends React.Component {

    render() {
        return (
            <>
                <Header as='h3' style={{ fontSize: '2em' }}>
                    Algorithm Evaluation Framework
          </Header>
                <p style={{ fontSize: '1.33em' }}>
                  I developed a framework to compare and develop algorithms to predict solar energy during my internship at Soltegro.
          </p>
                <p style={{ fontSize: '1.33em' }}>
                  The framework is developed with .Net framework and is capable of running algorithms, gathering data, processing data and much more.
              </p>
                <p style={{ fontSize: '1.33em' }}> The framework is build to develop algorithms which predict solar energy and energy usage to prevent high energy peaks inside households. 
          </p>
               
            </>
        )
    }
}

export default AEFText