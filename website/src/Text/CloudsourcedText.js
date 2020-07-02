import React from "react";
import { Header } from "semantic-ui-react";

class CloudSourcedText extends React.Component {
  render() {
    return (
      <>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Cloudsourced
        </Header>
        <p style={{ fontSize: "1.33em" }}>
          Cloudsourced is an application to order software components. These
          components will be created by other users of Cloudsourced.
        </p>
        <p style={{ fontSize: "1.33em" }}>
          Cloudsourced works like other platforms, create an account, ask for
          software components or create implementations for other projects.
        </p>
        <p style={{ fontSize: "1.33em" }}>
          The users will gain credit for creating implementations when a
          implementation is reviewed and approved.
        </p>
        <p style={{ fontSize: "1.33em", marginBottom: "11em" }}>
          This project is created with Java, Spring and React. I created this
          project during the minor Fullstack Java.
        </p>
      </>
    );
  }
}

export default CloudSourcedText;
