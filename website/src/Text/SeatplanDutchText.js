import React from 'react'
import { Header } from 'semantic-ui-react'

class SeatplanDutchText extends React.Component {

    render() {
        return (
            <>
                <Header as='h3' style={{ fontSize: '2em' }}>
                   Zaalmaker
          </Header>
                <p style={{ fontSize: '1.33em' }}>
                Deze zaalmaker is ontwikkeld voor LVPReservingen. 
          </p>
                <p style={{ fontSize: '1.33em' }}>
                    Ik ben bij LVP gestart als stagiar om een proof of concept te maken voor de klanten van LVP. 
                    De klanten moesten dankzij de zaalmaker gemakkelijk zaalplattegronden kunnen ontwerpen in Angular.
              </p>
                <p style={{ fontSize: '1.33em' }}> 
                Een klant moet ook alle mogelijke data van de zaal kunnen bewerken. Sommige acties zijn bijvoorbeeld: Roteren, ongedaan maken, rijen uitbreiden en rangen toevoegen.
                
               </p><p style={{ fontSize: '1.33em' }}> 
               Ik heb mijn stage afgerond met een 9.3, daarnaast heeft LVP mij een baan aangeboden om de zaalmaker uit te breiden.
          </p>
                <p style={{ fontSize: '1.33em',marginBottom:'1.5em' }}> Op het moment van schrijven werk ik niet alleen aan de zaalmaker maar ook aan verschillende API's van LVP.
          </p>
            </>
        )
    }
}

export default SeatplanDutchText