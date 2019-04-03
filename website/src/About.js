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
            
<Segment style={{ padding: '20.0em 0em' }} vertical>
          <Grid   container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                 About me
            </Header>
                <p style={{ fontSize: '1.33em' }}>
                  I'm a computer science student at the Rotterdam University of Applied Sciences. I have a pre-university(vwo) degree with computer science as an optional subject.
            </p>
            <p style={{ fontSize: '1.33em' }}>
                My passion lies with creating software solutions with upcoming technologies. I created several projects with C#, Python and Typescript. 
            </p>
            <p style={{ fontSize: '1.33em' }}>
                I have a side job at Dirk van den Broek as a Team Leader. At this job I carry a lot of responsibility, 
                because I have to make sure that the store is commercially at its best. 
                During the day i work with multiple teams, which has boosted my sociality.   
                These skills are very useful for me and my future.
            </p>
            <p style={{ fontSize: '1.33em' }}>
                  My biggest hobby is of course software development, but besides that I also like to maintain my Mazda Mx5 in the weekends. </p>
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