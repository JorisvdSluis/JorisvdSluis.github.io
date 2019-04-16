import React from 'react'
import { Image, Header, Card, Button } from 'semantic-ui-react'

class FaceText extends React.Component {

    render() {
        return (
            <>
            <Header as='h3' style={{ fontSize: '2em' }}>
               Face Recognition
          </Header>
              <p style={{ fontSize: '1.33em' }}>
               Face recognition, is a project to create a solution for the hospitality branch in collaboration with Methylium.
          </p>
          <p style={{ fontSize: '1.33em' }}>
          We created a proof of concept which consisted of registering a user, which could then open his hotel door with his face.
          </p>
          <p style={{ fontSize: '1.33em' }}>
         After a full research we desided to use Amazon Rekognition for the proof of concept.
          </p>
          <p style={{ fontSize: '1.33em' }}>
          This was a project created for the Rotterdam University of Applied Sciences. </p>
</>
        )
    }
}

export default FaceText