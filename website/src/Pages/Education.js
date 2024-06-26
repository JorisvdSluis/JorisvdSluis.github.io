import education from "../assets/coding.jpg";
import React from "react";
import { Grid, Header, Image, Segment, Label } from "semantic-ui-react";

class Education extends React.Component {
  render() {
    if (this.props.language) {
      return (
        <Segment style={{ padding: this.props.padding }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
            
              <Grid.Column floated="left" width={5}>
                <Segment basic>
                  <Header as="h3" style={{ fontSize: "2em" }}>
                   Scholing
                  </Header>
                  <Label ribbon>2017 - 2021</Label>
                  <br />
                  <b>Informatica</b> <br />
                  Hogeschool Rotterdam
                  <br />
                  <br />
                  <Label ribbon>02-2021 - 06-2021</Label>
                  <br />
                  <b>Afstudeerstage Informatica</b> <br />
                  Soltegro<br></br>
                  <a href="http://www.soltegro.nl/">Website</a>
                  <br />
                  <br />
                  <Label ribbon>2019 - 2020</Label>
                  <br />
                  <b>Stagiar Informatica</b> <br />
                  LVPReserveringen<br></br>
                  <a href="http://www.ovatic.nl/">Website</a>
                  <br />
                  <br />
                  <Label ribbon>2010 - 2016</Label>
                  <br />
                  <b>Atheneum</b> <br />
                  DevelsteinCollege
                </Segment>
              </Grid.Column>
              <Grid.Column floated="right" width={8}>
                <Image bordered rounded size="huge" src={education} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      );
    } else {
      return (
        <Segment style={{ padding: this.props.padding }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
             
              <Grid.Column floated="left" width={5}>
                <Segment basic>
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    Education
                  </Header>
                  <Label ribbon>2017 - 2021</Label>
                  <br />
                  <b>Computer science</b> <br />
                  University of applied sciences Rotterdam
                  <br />
                  <br />
                  <Label ribbon>02-2021 - 06-2021</Label>
                  <br />
                  <b>Computer science internship</b> <br />
                  Soltegro<br></br>
                  <a href="http://www.soltegro.nl/">Website</a>
                  <br />
                  <br />
                  <Label ribbon>2019 - 2020</Label>
                  <br />
                  <b>Computer science internship</b> <br />
                  LVPReserveringen<br></br>
                  <a href="http://www.ovatic.nl/">Website</a>
                  <br />
                  <br />
                  <Label ribbon>2010 - 2016</Label>
                  <br />
                  <b>Atheneum</b> <br />
                  DevelsteinCollege
                </Segment>
              </Grid.Column>
              <Grid.Column floated="right" width={8}>
                <Image bordered rounded size="huge" src={education} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      );
    }
  }
}

export default Education;
