import React from "react";
import { Container, Grid, Header, List, Segment } from "semantic-ui-react";

class Footer extends React.Component {
  render() {
    return (
      <Segment inverted vertical style={{ padding: this.props.padding }}>
        <Container>
          <Grid divided inverted stackable>
            <Grid.Row>
              <Grid.Column width={7}>
                <Header as="h4" inverted>
                  About
                </Header>
                <p>
                  This website is created with React.
                  <br />
                  For more info contact me via{" "}
                  <a
                    style={{ color: "lime" }}
                    href="https://www.linkedin.com/in/joris-van-der-sluis-a39a13152/"
                  >
                    {" "}
                    LinkedIn.
                  </a>
                </p>
                <List link inverted>
                  <List.Item> Copyright © 2019 All rights reserved.</List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    );
  }
}

export default Footer;
