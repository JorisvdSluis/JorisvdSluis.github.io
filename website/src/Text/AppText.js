import React from 'react'
import { Header } from 'semantic-ui-react'

class AppText extends React.Component {

    render() {
        return (
            <>
                <Header as='h3' style={{ fontSize: '2em' }}>
                    Lucky Llama
          </Header>
                <p style={{ fontSize: '1.33em' }}>
                    Lucky Llama is a Fortnite companion App created with Flutter and several Fortnite API's
          </p>
                <p style={{ fontSize: '1.33em' }}>
                    I created this app with Maikel Veen. The app is an addition to the popular game Fortnite, it shows the user stats, news and much more.
              </p>
                <p style={{ fontSize: '1.33em' }}>I created several pages in the app, and created the communication between personal user stats and the Fortnite API.
          </p>
                <p style={{ fontSize: '1.33em',marginBottom:'11em' }}>This was a project created for the Rotterdam University of Applied Sciences.
          </p>
            </>
        )
    }
}

export default AppText