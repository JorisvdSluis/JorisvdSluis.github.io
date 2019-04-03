import React from 'react'
import {
    Container,
    Grid,
    Header,
    List,
    Segment,
  } from 'semantic-ui-react'

class Footer extends React.Component  {
  
    render(){
        return(
            <Segment inverted vertical style={{ padding: '5em 0em' }}>
            <Container>
              <Grid divided inverted stackable>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <Header inverted as='h4' content='About' />
                    <List link inverted>
                      <List.Item as='a'>Sitemap</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Header inverted as='h4' content='Services' />
                    <List link inverted>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={7}>
                    <Header as='h4' inverted>
                      Footer Header
                </Header>
                    <p>
                      Disclaimer this is website is still under development.
                </p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Container>
          </Segment>
        )
}}

export default Footer