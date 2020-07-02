import React from "react";
import { Header } from "semantic-ui-react";

class CloudSourcedDutchText extends React.Component {
  render() {
    return (
      <>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Cloudsourced
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Cloudsourced is een applicatie om software componenten te bestellen en
          maken.deze componenten worden gemaakt door andere gebruikers van
          Cloudsourced.
        </p>
        <p style={{ fontSize: "1.33em" }}>
          Cloudsourced werkt net als andere platformen, maak een account en je
          kan aan de slag. Heb je componenten nodig dan kan je een uitleg geven,
          waarna gebruikers zich kunnen aanmelden. Ben je zelf developer dan kan
          je implementaties gaan maken voor andere projecten.
        </p>
        <p style={{ fontSize: "1.33em" }}>
          De developers worden betaald in punten die uitbetaald worden nadat een
          implementatie is goedgekeurd.
        </p>
        <p style={{ fontSize: "1.33em", marginBottom: "11em" }}>
          Dit project is gemaakt met Java, Spring en React en is ontwikkeld
          tijdens de minor Fullstack Java.
        </p>
      </>
    );
  }
}

export default CloudSourcedDutchText;
