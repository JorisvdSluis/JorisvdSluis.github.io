import "./App.css";
import React, { Component } from "react";
import scrollToComponent from "react-scroll-to-component";
import {
  Container,
  Menu,
  Visibility,
  Sidebar,
  Segment,
  Image,
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
    };
  }
  componentWillMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };
  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });
  state = {};

  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    const Scroll = require("react-scroll");
    var scroll = Scroll.animateScroll;
    const { active } = this.state;

    if (isMobile) {
      return (
        <>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 0, padding: "0em 0em" }}
            vertical
          >
            <HeadMobile
              setLanguage={() =>
                this.setState({
                  languageIsDutch: !this.state.languageIsDutch,
                })
              }
            />
          </Segment>

          <About
            language={this.state.languageIsDutch}
            padding="5em 0em"
            ref={(section) => {
              this.aboutRef = section;
            }}
          />
          <Experience
            language={this.state.languageIsDutch}
            padding="5em 0em"
            ref={(section) => {
              this.experienceRef = section;
            }}
          />
          <Education
            language={this.state.languageIsDutch}
            padding="5em 0em"
            ref={(section) => {
              this.educationRef = section;
            }}
          />
          <Projects
            isMobile={true}
            language={this.state.languageIsDutch}
            padding="5em 0em"
            ref={(section) => {
              this.projectsRef = section;
            }}
          />
          <Skills
            language={this.state.languageIsDutch}
            padding="5em 0em"
            columns={1}
            ref={(section) => {
              this.skillsRef = section;
            }}
          />
          <Footer language={this.state.languageIsDutch} padding="5em 0em" />
        </>
      );
    } else {
      return (
        <>
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
            style={{ maxHeight: "85%" }}
          >
            {" "}
            <Head />
            <Menu
              fixed={this.state.fixed ? "top" : "top"}
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
                      cursor: "pointer",
                    }}
                    onClick={() => this.setState({ languageIsDutch: true })}
                  >
                    <Image id="country" src={NL} />
                  </div>
                  <div
                    style={{
                      paddingLeft: "0",
                      marginLeft: "0",
                      cursor: "pointer",
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
            ref={(section) => {
              this.aboutRef = section;
            }}
          />
          <Experience
            language={this.state.languageIsDutch}
            padding="20em 0em"
            ref={(section) => {
              this.experienceRef = section;
            }}
          />
          <Education
            language={this.state.languageIsDutch}
            padding="20em 0em"
            ref={(section) => {
              this.educationRef = section;
            }}
          />
          <Projects
            isMobile={false}
            language={this.state.languageIsDutch}
            padding="20em 0em"
            display="none"
            ref={(section) => {
              this.projectsRef = section;
            }}
          />
          <Skills
            language={this.state.languageIsDutch}
            padding="20em 0em"
            columns={2}
            ref={(section) => {
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
