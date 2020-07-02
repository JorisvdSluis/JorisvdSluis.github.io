import React from "react";
import { Header } from "semantic-ui-react";

class ExcelDutchText extends React.Component {
  render() {
    return (
      <>
        <Header as="h3" style={{ fontSize: "2em" }}>
          AutomatedExcelModifier
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Dit project is een oplossing gemaakt voor Cevede.
        </p>
        <p style={{ fontSize: "1.33em" }}>
          De producten van Cevede worden aangeleverd als Excel bestand. Er zijn
          meer dan 90 product types en elk product type heeft een individueel
          Excel bestand.
        </p>
        <p style={{ fontSize: "1.33em" }}>
          Omdat het mij dagen zou kosten om alle bestanden te converteren naar
          csv ,voor gebruik in de webshop, heb ik een python script geschreven
          die dit voor mij doet.
        </p>
        <p style={{ fontSize: "1.33em", marginBottom: "11em" }}>
          Nadat dit script af was moest ik nog steeds aanpassingen doen zoals:
          volgorde veranderen en kolommen aanpassen. Om deze reden heb ik het
          script zo uitgebreid dat het gebruikers invoer ondersteund.
        </p>
      </>
    );
  }
}

export default ExcelDutchText;
