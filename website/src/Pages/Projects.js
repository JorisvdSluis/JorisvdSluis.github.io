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
import car from "../assets/car.jpg";
import Afstudeerstage from "../assets/afstudeer.png";
import excel from "../assets/excel.png";
import cloudsourced from "../assets/cloudsourced.png";
import ovatic from "../assets/ovatic.png";
import { FaArrowUp } from "react-icons/fa";
import { MdArrowBack, MdArrowForward, MdClose } from "react-icons/md";
import "./Projects.css";
import ExcelText from "../Text/ExcelText";
import ExcelDutchText from "../Text/ExcelDutchText";
import OvaticDutchText from "../Text/OvaticDutchText";
import OvaticText from "../Text/OvaticText";
import CloudSourcedDutchText from "../Text/CloudSourcedDutchText";
import CloudSourcedText from "../Text/CloudsourcedText";
import CarText from "../Text/CarText";
import CarDutchText from "../Text/CarDutchText";
import AEFDutchText from "../Text/AEFDutchText";
import AEFText from "../Text/AEFText";
class Projects extends React.Component {
  projectsEnum = {
    AEF: 0,
    car: 1,
    cevede: 2,
    seatplan: 3,
    webshop: 4,
    app: 5,
    face: 6,
    python: 7,
    cloudsourced: 8,
    ovatic: 9,
    excel: 10,
  };
  constructor(props) {
    super(props);
    this.state = {
      selectedPhoto: this.projectsEnum.AEF,
      userClicked: false,
    };
  }

  handleClick(photoId) {
    this.setState({ selectedPhoto: photoId, userClicked: true });
  }
  handleClose() {
    this.setState({ selectedPhoto: null, userClicked: false });
  }
  render() {
    return (
      <Segment style={{ padding: this.props.padding }} vertical>
        {!this.props.isMobile ? (
          !this.state.userClicked ? (
            <Grid container stackable verticalAlign="middle">
              <Grid.Column floated="right">
                <Header
                  as="h3"
                  style={{ fontSize: "2em", display: this.props.display }}
                >
                  Projects
                </Header>
                <Grid columns={4}>
                  <Grid.Column>
                    <Image
                      id={
                        this.state.selectedPhoto === this.projectsEnum.AEF
                          ? "Big"
                          : "Small"
                      }
                      style={{ cursor: "pointer" }}
                      bordered
                      rounded
                      size="large"
                      src={Afstudeerstage}
                      onClick={this.handleClick.bind(
                        this,
                        this.projectsEnum.AEF
                      )}
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <Image
                      id={
                        this.state.selectedPhoto === this.projectsEnum.car
                          ? "Big"
                          : "Small"
                      }
                      style={{ cursor: "pointer" }}
                      bordered
                      rounded
                      size="large"
                      src={car}
                      onClick={this.handleClick.bind(
                        this,
                        this.projectsEnum.car
                      )}
                    />
                  </Grid.Column>
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
                      onClick={this.handleClick.bind(
                        this,
                        this.projectsEnum.app
                      )}
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
                  <Grid.Column>
                    <Image
                      id={
                        this.state.selectedPhoto ===
                        this.projectsEnum.cloudsourced
                          ? "Big"
                          : "Small"
                      }
                      style={{ cursor: "pointer" }}
                      bordered
                      rounded
                      size="large"
                      src={cloudsourced}
                      onClick={this.handleClick.bind(
                        this,
                        this.projectsEnum.cloudsourced
                      )}
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <Image
                      id={
                        this.state.selectedPhoto === this.projectsEnum.ovatic
                          ? "Big"
                          : "Small"
                      }
                      style={{ cursor: "pointer" }}
                      bordered
                      rounded
                      size="large"
                      src={ovatic}
                      onClick={this.handleClick.bind(
                        this,
                        this.projectsEnum.ovatic
                      )}
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <Image
                      id={
                        this.state.selectedPhoto === this.projectsEnum.excel
                          ? "Big"
                          : "Small"
                      }
                      style={{ cursor: "pointer" }}
                      bordered
                      rounded
                      size="large"
                      src={excel}
                      onClick={this.handleClick.bind(
                        this,
                        this.projectsEnum.excel
                      )}
                    />
                  </Grid.Column>
                </Grid>
                <FaArrowUp id="Arrow2" size="2.5em" />
                <div id={this.props.isMobile ? "ArrowMobileText" : "ArrowText"}>
                  {this.props.language
                    ? "Klik op een afbeelding!"
                    : "Click an image!"}
                </div>
              </Grid.Column>
            </Grid>
          ) : (
            <div style={{ height: "500px" }}>
              <MdArrowBack
                style={{ cursor: "pointer" }}
                id="back"
                size="2em"
                onClick={this.handleClick.bind(
                  this,
                  this.state.selectedPhoto == 0
                    ? 10
                    : this.state.selectedPhoto - 1
                )}
              />
              <MdClose
                size="2em"
                style={{ cursor: "pointer" }}
                id="close"
                onClick={this.handleClose.bind(this)}
              />
              <MdArrowForward
                size="2em"
                style={{ cursor: "pointer" }}
                id="next"
                onClick={this.handleClick.bind(
                  this,
                  this.state.selectedPhoto == 10
                    ? 0
                    : this.state.selectedPhoto + 1
                )}
              />
              <Grid container stackable>
                <Grid.Row>
                  <Grid.Column width={8}>
                    <Image
                      style={{ cursor: "pointer" }}
                      bordered
                      rounded
                      size="huge"
                      src={
                        this.state.selectedPhoto === this.projectsEnum.app
                          ? AppImage
                          : this.state.selectedPhoto ===
                            this.projectsEnum.cloudsourced
                          ? cloudsourced
                          : this.state.selectedPhoto ===
                            this.projectsEnum.cevede
                          ? cevede
                          : this.state.selectedPhoto === this.projectsEnum.excel
                          ? excel
                          : this.state.selectedPhoto ===
                            this.projectsEnum.python
                          ? GameImage
                          : this.state.selectedPhoto === this.projectsEnum.face
                          ? FaceImage
                          : this.state.selectedPhoto ===
                            this.projectsEnum.webshop
                          ? webshop
                          : this.state.selectedPhoto ===
                            this.projectsEnum.ovatic
                          ? ovatic
                          : this.state.selectedPhoto ===
                            this.projectsEnum.car
                          ? car
                          : this.state.selectedPhoto ===
                            this.projectsEnum.AEF
                          ? Afstudeerstage
                          : seatplan
                      }
                    />
                  </Grid.Column>
                  <Grid.Column width={8}>
                    {this.state.selectedPhoto === this.projectsEnum.app ? (
                      this.props.language ? (
                        <AppDutchText />
                      ) : (
                        <AppText />
                      )
                    ) : this.state.selectedPhoto ===
                      this.projectsEnum.cloudsourced ? (
                      this.props.language ? (
                        <CloudSourcedDutchText />
                      ) : (
                        <CloudSourcedText />
                      )
                    ) : this.state.selectedPhoto ===
                      this.projectsEnum.cevede ? (
                      this.props.language ? (
                        <CevedeDutchText />
                      ) : (
                        <CevedeText />
                      )
                    ) : this.state.selectedPhoto === this.projectsEnum.excel ? (
                      this.props.language ? (
                        <ExcelDutchText />
                      ) : (
                        <ExcelText />
                      )
                    ) : this.state.selectedPhoto ===
                      this.projectsEnum.python ? (
                      this.props.language ? (
                        <GameDutchText />
                      ) : (
                        <GameText />
                      )
                    ) : this.state.selectedPhoto === this.projectsEnum.face ? (
                      this.props.language ? (
                        <FaceDutchText />
                      ) : (
                        <FaceText />
                      )
                    ) : this.state.selectedPhoto ===
                      this.projectsEnum.webshop ? (
                      this.props.language ? (
                        <WebshopDutchText />
                      ) : (
                        <WebshopText />
                      )
                    ) : this.state.selectedPhoto ===
                      this.projectsEnum.ovatic ? (
                      this.props.language ? (
                        <OvaticDutchText />
                      ) : (
                        <OvaticText />
                      )
                    ) : this.state.selectedPhoto ===
                    this.projectsEnum.car ? (
                    this.props.language ? (
                      <CarDutchText />
                    ) : (
                      <CarText />
                    )
                  ) : this.state.selectedPhoto ===
                  this.projectsEnum.AEF ? (
                  this.props.language ? (
                    <AEFDutchText />
                  ) : (
                    <AEFText />
                  )
                )
                  : this.props.language ? (
                      <SeatplanDutchText />
                    ) : (
                      <SeatplanText />
                    )}
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          )
        ) : (
          <Grid container stackable verticalAlign="middle">
            <Grid.Column floated="right">
              <Header
                as="h3"
                style={{ fontSize: "2em", display: this.props.display }}
              >
                Projects
              </Header>
              <Grid columns={4}>
              <Grid.Column>
                  <Image
                    id={
                      this.state.selectedPhoto === this.projectsEnum.AEF
                        ? this.props.isMobile
                          ? ""
                          : "Big"
                        : "Small"
                    }
                    style={{ cursor: "pointer" }}
                    bordered
                    rounded
                    size="large"
                    src={Afstudeerstage}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Image
                    id={
                      this.state.selectedPhoto === this.projectsEnum.car
                        ? this.props.isMobile
                          ? ""
                          : "Big"
                        : "Small"
                    }
                    style={{ cursor: "pointer" }}
                    bordered
                    rounded
                    size="large"
                    src={car}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Image
                    id={
                      this.state.selectedPhoto === this.projectsEnum.cevede
                        ? this.props.isMobile
                          ? ""
                          : "Big"
                        : "Small"
                    }
                    style={{ cursor: "pointer" }}
                    bordered
                    rounded
                    size="large"
                    src={cevede}
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
                  />
                </Grid.Column>
                <Grid.Column>
                  <Image
                    id={
                      this.state.selectedPhoto ===
                      this.projectsEnum.cloudsourced
                        ? "Big"
                        : "Small"
                    }
                    style={{ cursor: "pointer" }}
                    bordered
                    rounded
                    size="large"
                    src={cloudsourced}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Image
                    id={
                      this.state.selectedPhoto === this.projectsEnum.ovatic
                        ? "Big"
                        : "Small"
                    }
                    style={{ cursor: "pointer" }}
                    bordered
                    rounded
                    size="large"
                    src={ovatic}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Image
                    id={
                      this.state.selectedPhoto === this.projectsEnum.excel
                        ? "Big"
                        : "Small"
                    }
                    style={{ cursor: "pointer" }}
                    bordered
                    rounded
                    size="large"
                    src={excel}
                  />
                </Grid.Column>
              </Grid>
            </Grid.Column>
          </Grid>
        )}
      </Segment>
    );
  }
}

export default Projects;
