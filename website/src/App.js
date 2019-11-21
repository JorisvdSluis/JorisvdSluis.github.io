import "./App.css";
import React, { Component } from "react";
import scrollToComponent from "react-scroll-to-component";
import {
  Container,
  Menu,
  Visibility,
  Sidebar,
  Segment
} from "semantic-ui-react";
import Footer from "./Pages/Footer";
import Skills from "./Pages/Skills";
import About from "./Heading/About";
import Experience from "./Pages/Experience";
import Head from "./Heading/Head";
import Projects from "./Pages/Projects";
import HeadMobile from "./Heading/HeadMobile";
import { FaArrowDown } from "react-icons/fa";
class App extends Component {
  constructor(props) {
    super(props);
    this.aboutRef = React.createRef();
    this.experienceRef = React.createRef();
    this.skillsRef = React.createRef();
    this.projectsRef = React.createRef();
    this.state = {
      width: window.innerWidth
    };
  }
  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
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
  hideFixedMenu = () => this.setState({ fixed: false, active: true});
  showFixedMenu = () => this.setState({ fixed: true , active: false, activeButton:"about"});
  handleSidebarHide = () => this.setState({ sidebarOpened: false });
  handleToggle = () => this.setState({ sidebarOpened: true });

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    const { fixed } = this.state;
    const Scroll = require("react-scroll");
    var scroll = Scroll.animateScroll;
    const { sidebarOpened } = this.state;
    const {active} = this.state;
    const{activeButton} = this.state;
    if (isMobile) {
      return (
        < >
          <Visibility
          style={{ overflowY: 'hidden', overflowX: 'hidden'}}
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
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
                style={{ minHeight: 0, padding: "0em 0em"}}
                vertical
              >
                {/* <Container style={{ minHeight: 40, padding: "0em 0em" }} /> */}
                <HeadMobile/>
              </Segment>

              <About
              padding='5em 0em'
                ref={section => {
                  this.aboutRef = section;
                }}
              />
              <Experience
              padding='5em 0em'
                ref={section => {
                  this.experienceRef = section;
                }}
              />
              <Projects
              padding='5em 0em'
                ref={section => {
                  this.projectsRef = section;
                }}
              />
              <Skills
              padding='5em 0em'
              columns={1}
                ref={section => {
                  this.skillsRef = section;
                }}
              />
              <Footer padding='5em 0em'/>
            </Sidebar.Pusher>
          </Visibility>
        </>
      );
    } else {
      return (
        <>
          {" "}
          <Head />
          <FaArrowDown
            id="Arrow"
            size="2.5em"
            as="a"
            onClick={() => scrollToComponent(this.aboutRef)}
          />
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Menu
              fixed={fixed ? "top" : "top"}
              inverted={fixed ? !fixed : !fixed}
              secondary={fixed ? !fixed : !fixed}
              borderless
              size="huge"
            >
              <Container>
                <Menu.Item position="right">
                  <Menu.Item as="a" active={active} onClick={() => scroll.scrollTo(0)}>
                    Home
                  </Menu.Item>
                  <Menu.Item
                    as="a"
                    onClick={() => scrollToComponent(this.aboutRef)}
                  >
                    About
                  </Menu.Item>
                  <Menu.Item
                    as="a"
                    onClick={() => scrollToComponent(this.experienceRef)}
                  >
                    Experience
                  </Menu.Item>
                  <Menu.Item
                    as="a"
                    onClick={() => scrollToComponent(this.projectsRef)}
                  >
                    Projects
                  </Menu.Item>
                  <Menu.Item
                    as="a"
                    onClick={() => scrollToComponent(this.skillsRef)}
                  >
                    Skills
                  </Menu.Item>
                </Menu.Item>
              </Container>
            </Menu>
          </Visibility>
          <About
          padding='20em 0em'
            ref={section => {
              this.aboutRef = section;
            }}
          />
          <Experience
           padding='20em 0em'
            ref={section => {
              this.experienceRef = section;
            }}
          />
          <Projects
           padding='20em 0em'
           display="none"
            ref={section => {
              this.projectsRef = section;
            }}
          />
          <Skills
           padding='20em 0em'
           columns={2}
            ref={section => {
              this.skillsRef = section;
            }}
          />
          <Footer padding='5em 0em' />
        </>
      );
    }
  }
}
export default App;
