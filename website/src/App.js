import "./App.css";
import React, { Component } from "react";
import scrollToComponent from "react-scroll-to-component";
import {
  Container,
  Menu,
  Visibility,
  Sidebar,
  Segment,
  Image
} from "semantic-ui-react";
import Footer from "./Pages/Footer";
import Skills from "./Pages/Skills";
import About from "./Heading/About";
import Experience from "./Pages/Experience";
import Head from "./Heading/Head";
import Projects from "./Pages/Projects";
import HeadMobile from "./Heading/HeadMobile";
import { FaArrowDown } from "react-icons/fa";
import Education from "./Pages/Education";
import NL from "../src/assets/nl.png";
import UK from "../src/assets/uk.png";
import Helmet from "react-helmet";
class App extends Component {
  constructor(props) {
    super(props);
    this.aboutRef = React.createRef();
    this.experienceRef = React.createRef();
    this.skillsRef = React.createRef();
    this.projectsRef = React.createRef();
    this.educationRef = React.createRef();
    this.state = {
      width: window.innerWidth,
      languageIsDutch: true,
      fixed: false,
      active: true,
      mount: false
    };
  }
  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentDidMount() {
    setInterval(() => this.setState({ mount: true }), 1000);
  }
  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  state = {};
  showFixedMenu = () => {
    if (this.state.mount) {
      this.setState({ fixed: true, active: false, activeButton: "about" });
      console.log(this.state.fixed);
    }
  };
  hideFixedMenu = () => {
    this.setState({ fixed: false, active: true });
    console.log(this.state.fixed);
  };
  handleSidebarHide = () => this.setState({ sidebarOpened: false });
  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    // const { fixed } = this.state;
    const Scroll = require("react-scroll");
    var scroll = Scroll.animateScroll;
    const { sidebarOpened } = this.state;
    const { active } = this.state;
    //const{activeButton} = this.state;
    if (isMobile) {
      return (
        <>
          <Helmet>
            <meta
              name="google-site-verification"
              content="B7ZfymA0oyRYRpySPxbi7qRT5zjV-1AkclLo6VHhk5A"
            />
          </Helmet>
          {/* <Menu
              as={Menu}
              animation="push"
              inverted
              onHide={this.handleSidebarHide}
              size="medium"
              visible={sidebarOpened}
              fixed={fixed ? "top" : "top"}
            >
              <Menu.Item
                as="a"
                onClick={() =>
                  scrollToComponent(this.aboutRef) && this.handleSidebarHide()
                }
              >
                About
              </Menu.Item>
              <Menu.Item
                as="a"
                onClick={() =>
                  scrollToComponent(this.experienceRef) &&
                  this.handleSidebarHide()
                }
              >
                Experience
              </Menu.Item>
              <Menu.Item
                as="a"
                onClick={() =>
                  scrollToComponent(this.projectsRef) &&
                  this.handleSidebarHide()
                }
              >
                Projects
              </Menu.Item>
              <Menu.Item
                as="a"
                onClick={() =>
                  scrollToComponent(this.skillsRef) && this.handleSidebarHide()
                }
              >
                Skills
              </Menu.Item>
            </Menu> */}
          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              inverted
              textAlign="center"
              style={{ minHeight: 0, padding: "0em 0em" }}
              vertical
            >
              {/* <Container style={{ minHeight: 40, padding: "0em 0em" }} /> */}
              <HeadMobile
                setLanguage={() =>
                  this.setState({
                    languageIsDutch: !this.state.languageIsDutch
                  })
                }
              />
            </Segment>

            <About
              language={this.state.languageIsDutch}
              padding="5em 0em"
              ref={section => {
                this.aboutRef = section;
              }}
            />
            <Experience
              language={this.state.languageIsDutch}
              padding="5em 0em"
              ref={section => {
                this.experienceRef = section;
              }}
            />
            <Education
              language={this.state.languageIsDutch}
              padding="5em 0em"
              ref={section => {
                this.educationRef = section;
              }}
            />
            <Projects
              isMobile={this.isMobile}
              language={this.state.languageIsDutch}
              padding="5em 0em"
              ref={section => {
                this.projectsRef = section;
              }}
            />
            <Skills
              language={this.state.languageIsDutch}
              padding="5em 0em"
              columns={1}
              ref={section => {
                this.skillsRef = section;
              }}
            />
            <Footer language={this.state.languageIsDutch} padding="5em 0em" />
          </Sidebar.Pusher>
        </>
      );
    } else {
      return (
        <>
          <Helmet>
            <meta
              name="google-site-verification"
              content="B7ZfymA0oyRYRpySPxbi7qRT5zjV-1AkclLo6VHhk5A"
            />
          </Helmet>{" "}
          <Head />
          <Visibility
            style={{ marginTop: "-50px", border: "solid 1px red" }}
            once={false}
            onOnScreen={this.hideFixedMenu}
            onOffScreen={this.showFixedMenu}
          ></Visibility>
          <Visibility
            style={{ marginTop: "-50px", border: "solid 1px red" }}
            once={false}
            // onBottomPassed={this.showFixedMenu}
            // onBottomPassedReverse={this.hideFixedMenu}
          >
            <Menu
              fixed="top"
              inverted={!this.state.fixed}
              secondary={!this.state.fixed}
              borderless
              size="huge"
            >
              <Container>
                <Menu.Item position="right">
                  <Menu.Item
                    as="a"
                    active={active}
                    onClick={() => scroll.scrollTo(0)}
                  >
                    Home
                  </Menu.Item>
                  <Menu.Item
                    as="a"
                    onClick={() => scrollToComponent(this.aboutRef)}
                  >
                    {this.state.languageIsDutch ? "Over" : "About"}
                  </Menu.Item>
                  <Menu.Item
                    as="a"
                    onClick={() => scrollToComponent(this.experienceRef)}
                  >
                    {this.state.languageIsDutch ? "Ervaring" : "Experience"}
                  </Menu.Item>
                  <Menu.Item
                    as="a"
                    onClick={() => scrollToComponent(this.educationRef)}
                  >
                    {this.state.languageIsDutch ? "Scholing" : "Education"}
                  </Menu.Item>
                  <Menu.Item
                    as="a"
                    onClick={() => scrollToComponent(this.projectsRef)}
                  >
                    {this.state.languageIsDutch ? "Projecten" : "Projects"}
                  </Menu.Item>
                  <Menu.Item
                    as="a"
                    onClick={() => scrollToComponent(this.skillsRef)}
                  >
                    {this.state.languageIsDutch ? "Kennis" : "Skills"}
                  </Menu.Item>
                  <div
                    style={{
                      paddingLeft: "1em",
                      paddingRight: "0",
                      marginRight: "0",
                      cursor: "pointer"
                    }}
                    onClick={() => this.setState({ languageIsDutch: true })}
                  >
                    <Image id="country" src={NL} />
                  </div>
                  <div
                    style={{
                      paddingLeft: "0",
                      marginLeft: "0",
                      cursor: "pointer"
                    }}
                    onClick={() => this.setState({ languageIsDutch: false })}
                  >
                    <Image id="country" src={UK} />
                  </div>
                </Menu.Item>
              </Container>
            </Menu>
          </Visibility>
          <FaArrowDown
            id="Arrow"
            size="2.5em"
            as="a"
            onClick={() => scrollToComponent(this.aboutRef)}
          />
          <About
            language={this.state.languageIsDutch}
            padding="20em 0em"
            ref={section => {
              this.aboutRef = section;
            }}
          />
          <Experience
            language={this.state.languageIsDutch}
            padding="20em 0em"
            ref={section => {
              this.experienceRef = section;
            }}
          />
          <Education
            language={this.state.languageIsDutch}
            padding="20em 0em"
            ref={section => {
              this.educationRef = section;
            }}
          />
          <Projects
            isMobile={this.isMobile}
            language={this.state.languageIsDutch}
            padding="20em 0em"
            display="none"
            ref={section => {
              this.projectsRef = section;
            }}
          />
          <Skills
            language={this.state.languageIsDutch}
            padding="20em 0em"
            columns={2}
            ref={section => {
              this.skillsRef = section;
            }}
          />
          <Footer language={this.state.languageIsDutch} padding="5em 0em" />
        </>
      );
    }
  }
}
export default App;
