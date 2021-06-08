import React from "react";
import { Button, Grid, Header, Image, Segment } from "semantic-ui-react";
import pdf from "../assets/cvs.pdf";
import rug from "../assets/rug.jpg";
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
                  Ik werk momenteel bij LVP en CeVeDe, als fullstack en webshop
                  developer. Daarnaast heb ik enkele jaren bij Dirk van den
                  Broek gewerkt als teamleider. Bij dit baantje heb ik meerdere
                  skills geleerd zoals het commercieel neerzetten van een
                  winkel, werken in teamverband en aansturen van werknemers.
                </p>
                <p style={{ fontSize: "1.33em" }}>
                  Mijn grootste hobby is software maken, maar daarnaast vind ik
                  het ook leuk om met mijn auto op pad te gaan. In de
                  toekomst zie ik mijzelf als developer bij een
                  bedrijf waar ik constant kan innoveren en nieuwe dingen kan leren. 
                  Op basis van dit doel heb ik ervoor gekozen om
                  tijdens mijn studie zo breed mogelijk te ontwikkelen, dit
                  zorgt ervoor dat ik de vele verschillende ervaringen kan
                  gebruiken in mijn verdere loopbaan.
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={5}>
                <Image bordered rounded size="large" src={rug} />
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
                
                  I currently work at LVP and CeVeDe as fullstack developer.
                  I have also worked as as a Team Leader at Dirk van den Broek. At
                  this job I carried a lot of responsibility, because I had to
                  make sure that the store is commercially at its best. During
                  the day i work with multiple teams, which has boosted my
                  social skills. 
                                  </p>
                <p style={{ fontSize: "1.33em" }}>
                  My biggest hobby is of course software development, but
                  besides that I also like to drive my car in the
                  weekends.{" "}
                </p>
              </Grid.Column>
              <Grid.Column floated="right" width={5}>
                <Image bordered rounded size="large" src={rug} />
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
