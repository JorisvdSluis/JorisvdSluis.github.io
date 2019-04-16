import React from 'react'
import { Header } from 'semantic-ui-react'

class WebshopText extends React.Component {

    render() {
        return (
            <>
                <Header as='h3' style={{ fontSize: '2em' }}>
                    Marshmallow's webshop
          </Header>
                <p style={{ fontSize: '1.33em' }}>
                    Marshmallow's webshop is a music webshop created with ReactJs, C# and GraphQl. As state manager we used a library called unstated.
          </p>
                <p style={{ fontSize: '1.33em' }}>
                    I worked in a team of four members, where I designed several components including the shopping cart. </p>
                <p style={{ fontSize: '1.33em' }}>Besides designing I created the communication between the backend and the payment system.
          </p>
                <p style={{ fontSize: '1.33em' }}>This was a project created for the Rotterdam University of Applied Sciences.
          </p>
            </>
        )
    }
}

export default WebshopText