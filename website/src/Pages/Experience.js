import work from './assets/dirk.jpg'
import education from './assets/coding.jpg'
import React from 'react'
import {
  Divider,
  Grid,
  Header,
  Image,
  Segment,
  Label,

} from 'semantic-ui-react'

class Experience extends React.Component  {
    render(){
        return(
            <Segment style={{ padding: '20em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
              <Grid.Row>
                <Grid.Column floated='left' width={5}>
                  <Image bordered rounded size='large' src={education} />
                </Grid.Column>
                <Grid.Column width={8}>
                  <Segment basic>
                    <Header as='h3' style={{ fontSize: '2em' }}>
                      Education
              </Header>
                    <p style={{ fontSize: '1.33em' }}>
                      <Label ribbon>2017 - now</Label><br />
                      <b>Computer science</b> <br />
                      University of applied sciences Rotterdam
              <br />
                      <Label ribbon>2010 - 2016</Label><br />
                      <b>Atheneum</b> <br />
                      DevelsteinCollege
              </p>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
              <Divider />
              <Grid.Row>
                <Grid.Column width={8}>
                  <Segment basic>
                    <Header as='h3' style={{ fontSize: '2em' }}>
                      Work Experience
              </Header>
                    <p style={{ fontSize: '1.33em' }}>
                      <Label ribbon>2014 - now</Label><br />
                      <b>Team Leader</b> <br />
                      Dirk van den Broek
              </p>
                  </Segment>
                </Grid.Column>
                <Grid.Column floated='right' width={5}>
                  <Image bordered rounded size='large' src={work} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
        )
}}

export default Experience