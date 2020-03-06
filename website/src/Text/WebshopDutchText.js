import React from 'react'
import { Header } from 'semantic-ui-react'

class WebshopDutchText extends React.Component {

    render() {
        return (
            <>
                <Header as='h3' style={{ fontSize: '2em' }}>
                    Marshmallow's webshop
          </Header>
                <p style={{ fontSize: '1.33em' }}>
                    Marshmallow's webshop is een muziek webshop gemaakt met ReactJs, C# en GraphQl. Als state manager hebben we gebruik gemaakt van unstated.
          </p>
                <p style={{ fontSize: '1.33em' }}>
                    Voor dit project werkte ik in een team van vier leden, ik heb meerdere componenten ontwikkeld waaronder de winkelwagen.
                 </p>
                <p style={{ fontSize: '1.33em' }}>
                    Naast de componenten heb ik ook de communicatie tussen het betaalsysteem en React gemaakt.
             
          </p>
                <p style={{ fontSize: '1.33em',marginBottom:'11em' }}>   Dit project is ontwikkeld voor de Hogeschool Rotterdam.
          </p>
            </>
        )
    }
}

export default WebshopDutchText