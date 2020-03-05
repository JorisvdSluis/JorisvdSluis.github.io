import React from 'react'
import { Header } from 'semantic-ui-react'

class CevedeText extends React.Component {

    render() {
        return (
            <>
                <Header as='h3' style={{ fontSize: '2em' }}>
                    Cevede Webshop
          </Header>
                <p style={{ fontSize: '1.33em' }}>
                  This webshop is created for CeVeDe InstallatieTechniek B.V.
          </p>
                <p style={{ fontSize: '1.33em' }}>
                I have designed the structure of the webshop and created extra javascript logic to handle the many variants of products.
              </p>
                <p style={{ fontSize: '1.33em' }}>Because of the many products (thousands of variants) I created a python script to edit, manage and import all products. 
          </p>
                <p style={{ fontSize: '1.33em', marginBottom:'11em'}}> Besides the creation of this webshop I'm also in charge of the SEO and social media. 
          </p>
            </>
        )
    }
}

export default CevedeText