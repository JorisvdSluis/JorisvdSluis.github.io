import lvp from "../assets/lvp.jpg";
import 'react-awesome-slider/dist/styles.css';
import React from "react";
import {
  Grid,
  Header,
  Image,
  Segment,
  Label
} from "semantic-ui-react";

class Experience extends React.Component {
  render() {
  
    return (
      <Segment style={{ padding: this.props.padding }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column floated="left" width={5}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Work Experience
              </Header>
              <Label ribbon>2020 - Now</Label>
              <br />
              <b>Fullstack developer</b> <br />
              LVPReserveringen
              <br />
              <a href="http://www.ovatic.nl/">Website</a>
              <br />
              <br />
              <Label ribbon>2019- Now</Label>
              <br />
              <b>Webshop developer</b> <br />
              Cevede Installatietechniek B.V.
              <br />
              <a href="http://www.cevede.nl/">Website</a>
              <br />
              <br />
              <Label ribbon>2014 - 2020</Label>
              <br />
              <b>Team Leader</b> <br />
              Dirk van den Broek
            </Grid.Column>
            <Grid.Column floated="right" width={9}>
           
              <Image bordered rounded size='huge' src={lvp} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default Experience;
