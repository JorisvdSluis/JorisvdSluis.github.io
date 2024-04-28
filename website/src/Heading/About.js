import React from "react";
import { Button, Grid, Header, Image, Segment } from "semantic-ui-react";
import pdf from "../assets/cvs.pdf";
import desert from "../assets/desert.jpg";
class About extends React.Component {
  render() {
    if (this.props.language) {
      return (
        <Segment style={{ padding: this.props.padding }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Over mij
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  Ik ben Joris van der Sluis een enthousiaste en gedreven software ontwikkelaar.  
                  
                </p>
                <p style={{ fontSize: "1.33em" }}>
                  Mijn passie ligt bij het maken van software oplossingen met
                  nieuwe technologieën. Ik heb meerdere projecten ontwikkeld met
                  C#, Python, java en Typescript.
                </p>
                <p style={{ fontSize: "1.33em" }}>
                  Ik werk momenteel bij LVP als fullstack developer. 
                  Daarnaast heb ik enkele jaren bij Dirk van den
                  Broek gewerkt als teamleider. Bij dit baantje heb ik meerdere
                  skills geleerd zoals het commercieel neerzetten van een
                  winkel, werken in teamverband en aansturen van werknemers.
                </p>
                <p style={{ fontSize: "1.33em" }}>
                  Naast mijn passie voor software ontwikkeling reis ik graag om meer van de wereld te zien en mij verder te ontwikkelen. 
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={6}>
                <Image bordered rounded size="huge" src={desert} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <a href={pdf} download>
                  <Button size="huge">Download mijn CV</Button>
                </a>
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
              <Grid.Column width={8}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  About me
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  I'm Joris van der Sluis a software developer with passion!
                </p>
                <p style={{ fontSize: "1.33em" }}>
                  My passion lies with creating software solutions with upcoming
                  technologies. I created several projects with C#, Python and
                  Typescript.
                </p>
                <p style={{ fontSize: "1.33em" }}>
                
                  I currently work at LVP as fullstack developer.
                  I have also worked as as a Team Leader at Dirk van den Broek. At
                  this job I carried a lot of responsibility, because I had to
                  make sure that the store is commercially at its best. During
                  the day i work with multiple teams, which has boosted my
                  social skills. 
                                  </p>
                <p style={{ fontSize: "1.33em" }}>
                  Traveling is one of my other hobbies besides software development.{" "}
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={6}>
                <Image bordered rounded size="huge" src={desert} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <a href={pdf} download>
                  <Button size="huge">Download my CV</Button>
                </a>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      );
    }
  }
}

export default About;
