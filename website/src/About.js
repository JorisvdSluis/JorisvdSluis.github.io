import React from 'react'
import {
    Button,
    Grid,
    Header,
    Image,
    Segment,
  } from 'semantic-ui-react'
  import pdf from './assets/cvs.pdf';
  import rug from './assets/rug.jpg';
class About extends React.Component  {
  
    render(){
        return(
            
<Segment style={{ padding: '1.0em 0em' }} vertical>
          <Grid  style={{ padding: '25.0em 0em' }} container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                 About me
            </Header>
                <p style={{ fontSize: '1.33em' }}>
                  I'm a second year student at the Rotterdam university of applied sciences. My passion lies with creating software solutions with upcoming technologies.
                   As a Team leader at Dirk I learned how to work with others and how to carry responsibility, which is very usefull with working in teams.
            </p>
              </Grid.Column>
              <Grid.Column floated='right' width={5}>
                <Image bordered rounded size='large' src={rug} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <a href={pdf} download><Button size='huge' >Download my CV</Button></a>

              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        )
}}

export default About