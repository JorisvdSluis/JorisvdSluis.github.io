import React from "react";
import { Header } from "semantic-ui-react";

class OvaticText extends React.Component {
  render() {
    return (
      <>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Ovatic
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Ovatic is a product which is created by LVP.{" "}
        </p>
        <p style={{ fontSize: "1.33em" }}>
          This product contains a dashboard with data from all the clients of
          Lvp, these clients can manage and edit their data in Ovatic.
        </p>
        <p style={{ fontSize: "1.33em" }}>
          The dashboard is also used to sell tickets, make reservations and
          manage employees.
        </p>
        <p style={{ fontSize: "1.33em", marginBottom: "11em" }}>
          I create new API calls, connections and components for the dashboard.
        </p>
      </>
    );
  }
}

export default OvaticText;
