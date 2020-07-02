import React from "react";
import { Header } from "semantic-ui-react";

class OvaticDutchText extends React.Component {
  render() {
    return (
      <>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Ovatic
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Ovatic is het product waar ik aan werk bij LVP.{" "}
        </p>
        <p style={{ fontSize: "1.33em" }}>
          Dit product is een dashboard waarin de aangesloten theaters van Lvp
          hun gegevens kunnen beheren.{" "}
        </p>
        <p style={{ fontSize: "1.33em" }}>
          In het Dashboard is het mogelijk om tickets te verkopen, planningen
          maken en medewerkers de informatie bieden die nodig is om optimaal te
          functioneren.
        </p>
        <p style={{ fontSize: "1.33em", marginBottom: "11em" }}>
          Ik breid hierbij de backend uit met nieuwe aanroepen en maak
          componenten in Angular die in het dashboard gebruikt worden.{" "}
        </p>
      </>
    );
  }
}

export default OvaticDutchText;
