import React from 'react'
import {
  Grid,
  Header,
  Segment,
  GridRow,
  GridColumn,
} from 'semantic-ui-react'
import flutter from '../assets/flutter.png'
import c from '../assets/c.png'
import javascript from "../assets/javascript.png"
import typescript from '../assets/typescript.png'
import html from '../assets/html.png'
import python from '../assets/python.png'
import LangCard from '../UI/Card.js'
import css from '../assets/css.png'
import angular from '../assets/angular.png'
import react from '../assets/react.png'
import net from '../assets/net.png'
import dart from '../assets/dart.png'
import mysql from '../assets/mysql.jpg'

class Skills extends React.Component {

  render() {
    return (
      <Segment style={{ padding: this.props.padding  }} vertical>
        <Grid columns={2} textAlign='center'>
          <GridRow>
            <GridColumn>
              <Header as='h3' style={{ fontSize: '2em' }}>
              <br/>
                Skills
            </Header>

            </GridColumn>
          </GridRow>
        </Grid>
        <Grid columns={this.props.columns} textAlign='center'>
          <Grid.Row verticalAlign='middle'>
            <Grid.Column>
              <Grid columns={4} textAlign='center'>
                <GridRow>
                  <GridColumn><LangCard image={c} title="C#" subtitle="" ></LangCard></GridColumn>
                  <GridColumn><LangCard image={typescript} title="TypeScript" subtitle="" ></LangCard></GridColumn>
                  <GridColumn><LangCard image={python} title="Python" subtitle="" ></LangCard></GridColumn>
                  <GridColumn><LangCard image={dart} title="Dart" subtitle="" ></LangCard></GridColumn>
                </GridRow>
                <GridRow>
                <GridColumn><LangCard image={react} title="React" subtitle="Created with Typescript" ></LangCard></GridColumn>
                <GridColumn><LangCard image={flutter} title="Flutter" subtitle="Created with Dart" ></LangCard></GridColumn>
                <GridColumn><LangCard image={angular} title="Angular" subtitle="Created with Typescript" ></LangCard></GridColumn>
                <GridColumn><LangCard image={net} title=".NET" subtitle="" ></LangCard></GridColumn>

                </GridRow>
                <GridRow>
                <GridColumn><LangCard image={javascript} title="JavaScript" subtitle="" ></LangCard></GridColumn>
                <GridColumn><LangCard image={html} title="HTML" subtitle="" ></LangCard></GridColumn>
                <GridColumn><LangCard image={css} title="Css" subtitle="" ></LangCard></GridColumn>
                <GridColumn><LangCard image={mysql} title="MySQL" subtitle="" ></LangCard></GridColumn>
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