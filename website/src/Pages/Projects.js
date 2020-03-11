import React from "react";
import { Grid, Segment, Image, Header } from "semantic-ui-react";
import webshop from "../assets/webshop.jpg";
import WebshopText from "../Text/WebshopText";
import AppText from "../Text/AppText";
import GameText from "../Text/GameText";
import FaceText from "../Text/FaceText";
import CevedeText from "../Text/CevedeText";
import SeatplanText from "../Text/SeatplanText";
import WebshopDutchText from "../Text/WebshopDutchText";
import AppDutchText from "../Text/AppDutchText";
import GameDutchText from "../Text/GameDutchText";
import FaceDutchText from "../Text/FaceDutchText";
import CevedeDutchText from "../Text/CevedeDutchText";
import SeatplanDutchText from "../Text/SeatplanDutchText";
import AppImage from "../assets/App.png";
import GameImage from "../assets/Game.png";
import FaceImage from "../assets/face.jpg";
import cevede from "../assets/cevede.png";
import seatplan from "../assets/seatplan.jpg";
import { FaArrowUp } from "react-icons/fa";
import "./Projects.css";
class Projects extends React.Component {
  projectsEnum = {
    python: 0,
    face: 1,
    app: 2,
    webshop: 3,
    seatplan: 4,
    cevede: 5
  };
  constructor(props) {
    super(props);
    this.state = {
      selectedPhoto: this.projectsEnum.cevede,
      userClicked: false,
    };
  }

  handleClick(photoId) {
    this.setState({ selectedPhoto: photoId, userClicked: true });
  }

  render() {
    return (
      <Segment style={{ padding: this.props.padding }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column floated="right" width={9}>
              <Header
                as="h3"
                style={{ fontSize: "2em", display: this.props.display }}
              >
                Projects
              </Header>
              <Grid columns={2}>
                <Grid.Column>
                  <Image
                    id={
                      this.state.selectedPhoto === this.projectsEnum.cevede
                        ? "Big"
                        : "Small"
                    }
                    style={{ cursor: "pointer" }}
                    bordered
                    rounded
                    size="large"
                    src={cevede}
                    onClick={this.handleClick.bind(
                      this,
                      this.projectsEnum.cevede
                    )}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Image
                    id={
                      this.state.selectedPhoto === this.projectsEnum.seatplan
                        ? "Big"
                        : "Small"
                    }
                    style={{ cursor: "pointer" }}
                    bordered
                    rounded
                    size="large"
                    src={seatplan}
                    onClick={this.handleClick.bind(
                      this,
                      this.projectsEnum.seatplan
                    )}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Image
                    id={
                      this.state.selectedPhoto === this.projectsEnum.webshop
                        ? "Big"
                        : "Small"
                    }
                    style={{ cursor: "pointer" }}
                    bordered
                    rounded
                    size="large"
                    src={webshop}
                    onClick={this.handleClick.bind(
                      this,
                      this.projectsEnum.webshop
                    )}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Image
                    id={
                      this.state.selectedPhoto === this.projectsEnum.app
                        ? "Big"
                        : "Small"
                    }
                    style={{ cursor: "pointer" }}
                    bordered
                    rounded
                    size="large"
                    src={AppImage}
                    onClick={this.handleClick.bind(this, this.projectsEnum.app)}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Image
                    id={
                      this.state.selectedPhoto === this.projectsEnum.face
                        ? "Big"
                        : "Small"
                    }
                    style={{ cursor: "pointer" }}
                    bordered
                    rounded
                    size="large"
                    src={FaceImage}
                    onClick={this.handleClick.bind(
                      this,
                      this.projectsEnum.face
                    )}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Image
                    id={
                      this.state.selectedPhoto === this.projectsEnum.python
                        ? "Big"
                        : "Small"
                    }
                    style={{ cursor: "pointer" }}
                    bordered
                    rounded
                    size="large"
                    src={GameImage}
                    onClick={this.handleClick.bind(
                      this,
                      this.projectsEnum.python
                    )}
                  />
   
                </Grid.Column>
                
              </Grid>
              <FaArrowUp
             id="Arrow2"
            size="2.5em"
           
          /><div id={this.props.isMobile ? "ArrowMobileText":"ArrowText"}>{this.props.language ? "Klik op een afbeelding!" : "Click an image!"}</div>
            </Grid.Column>
            <Grid.Column width={1}>     </Grid.Column>
            <Grid.Column width={6}>
              {this.state.selectedPhoto === this.projectsEnum.app && this.props.language && (
                <AppDutchText />
              )}
                {this.state.selectedPhoto === this.projectsEnum.app && !this.props.language && (
                <AppText />
              )}
              {this.state.selectedPhoto === this.projectsEnum.face && this.props.language && (
                <FaceDutchText />
              )}
              {this.state.selectedPhoto === this.projectsEnum.face && !this.props.language && (
                <FaceText />
              )}
              {this.state.selectedPhoto === this.projectsEnum.python && this.props.language && (
                <GameDutchText />
              )}
               {this.state.selectedPhoto === this.projectsEnum.python && !this.props.language && (
                <GameText />
              )}
              {this.state.selectedPhoto === this.projectsEnum.webshop && this.props.language  && (
                <WebshopDutchText  />
              )}
               {this.state.selectedPhoto === this.projectsEnum.webshop && !this.props.language  && (
                <WebshopText  />
              )}
               {this.state.selectedPhoto === this.projectsEnum.cevede && this.props.language  && (
                <CevedeDutchText />
              )}
                {this.state.selectedPhoto === this.projectsEnum.cevede && !this.props.language  && (
                <CevedeText />
              )}
               {this.state.selectedPhoto === this.projectsEnum.seatplan && this.props.language && (
                <SeatplanDutchText />
              )}
               {this.state.selectedPhoto === this.projectsEnum.seatplan && !this.props.language && (
                <SeatplanText />
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default Projects;
