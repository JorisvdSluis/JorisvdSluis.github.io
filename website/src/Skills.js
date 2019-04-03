import React from 'react'
import {
  Grid,
  Header,
  Segment,
  GridRow,
  GridColumn,
} from 'semantic-ui-react'
import flutter from './assets/flutter.png'
import c from './assets/c.png'
import javascript from "./assets/javascript.png"
import typescript from './assets/typescript.png'
import html from './assets/html.png'
import python from './assets/python.png'
import LangCard from './Card.js'

class Skills extends React.Component {

  render() {
    return (
      <Segment style={{ padding: '5em 0em' }} vertical>
        <Grid columns={2} textAlign='center'>
          <GridRow>
            {/* <GridColumn>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  Projects
            </Header>
              </GridColumn> */}
            <GridColumn>
              <Header as='h3' style={{ fontSize: '2em' }}>
              <br/>
                Skills
            </Header>

            </GridColumn>
          </GridRow>
        </Grid>
        <Grid columns={2} textAlign='center'>
          <Grid.Row verticalAlign='middle'>
            {/* <Grid.Column> 
            <Grid columns={2} textAlign='center'>
              <GridRow>
                <section className='skills' ref={(section) => { this.Skills = section; }}></section>
                <GridColumn><LangCard image={rug} title="Webshop" subtitle="Created with ReactJs and GraphQl" ></LangCard></GridColumn>
                <GridColumn><LangCard image={rug} title="Guitar hero" subtitle="Created with Pygame" ></LangCard></GridColumn>
              </GridRow>
              
              <GridRow>
                <GridColumn><LangCard image={rug} title="Lucky Lama" subtitle="Created with Flutter(Dart)" ></LangCard></GridColumn>
                <GridColumn><LangCard image={rug} title="Face recogniton" subtitle="" ></LangCard></GridColumn>
              </GridRow>
            </Grid>
          </Grid.Column> */}
            <Grid.Column>
              <Grid columns={2} textAlign='center'>
                <GridRow>
                  <GridColumn><LangCard image={c} title="C#" subtitle="" ></LangCard></GridColumn>
                  <GridColumn><LangCard image={flutter} title="Flutter" subtitle="Created with Dart" ></LangCard></GridColumn>
                </GridRow>
                <GridRow>
                  <GridColumn><LangCard image={typescript} title="TypeScript" subtitle="" ></LangCard></GridColumn>
                  <GridColumn><LangCard image={javascript} title="JavaScript" subtitle="" ></LangCard></GridColumn>
                </GridRow>
                <GridRow>
                  <GridColumn><LangCard image={html} title="HTML" subtitle="" ></LangCard></GridColumn>
                  <GridColumn><LangCard image={python} title="Python" subtitle="" ></LangCard></GridColumn>
                </GridRow>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }
}

export default Skills