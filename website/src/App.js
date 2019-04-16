import './App.css'
import React, { Component } from 'react'
import scrollToComponent from 'react-scroll-to-component';
import {
  Container,
  Menu,
  Visibility,
  Sidebar,
  Segment,

} from 'semantic-ui-react'
import Footer from './Footer';
import Skills from './Skills';
import About from './About';
import Experience from './Experience';
import Head from './Head';
import Projects from './Projects';
import HeadMobile from './HeadMobile';

class App extends Component {
  constructor(props) {
    super(props);
    this.aboutRef = React.createRef();
    this.experienceRef = React.createRef();
    this.skillsRef = React.createRef();
    this.projectsRef = React.createRef();
    this.state = {
      width: window.innerWidth,
    };
  }
  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  state = {}
  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })


  render() {
    const { width } = this.state;
    const isMobile = width <= 500;
    const { fixed } = this.state
    const Scroll = require('react-scroll');
    var scroll = Scroll.animateScroll;
    const { sidebarOpened } = this.state
    if (isMobile) {
      return (
        <>
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}>

            <Menu
              as={Menu}
              animation='push'
              inverted
              onHide={this.handleSidebarHide}
              size ="medium"
              visible={sidebarOpened}
              fixed={fixed ? 'top' : 'top'}
              
            >
              
              <Menu.Item as='a' onClick={() => scrollToComponent(this.aboutRef) && this.handleSidebarHide()} >About</Menu.Item>
              <Menu.Item as='a' onClick={() => scrollToComponent(this.experienceRef) && this.handleSidebarHide()}>Experience</Menu.Item>
              <Menu.Item as='a' onClick={() => scrollToComponent(this.projectsRef) && this.handleSidebarHide()}>Projects</Menu.Item>
              <Menu.Item as='a' onClick={() => scrollToComponent(this.skillsRef) && this.handleSidebarHide()}>Skills</Menu.Item>
            </Menu>
            <Sidebar.Pusher dimmed={sidebarOpened}>
              <Segment
                inverted
                textAlign='center'
                style={{ minHeight: 150, padding: '0em 0em' }}
                vertical
              >
                <Container style={{ minHeight: 40, padding: '0em 0em' }} />
                <HeadMobile />
              </Segment>
             
              <About ref={(section) => { this.aboutRef = section; }} />
              <Experience ref={(section) => { this.experienceRef = section; }} />
              <Projects ref={(section) => { this.projectsRef = section; }} />
              <Skills ref={(section) => { this.skillsRef = section; }} />
              <Footer />
            </Sidebar.Pusher>
          </Visibility>
        </>
      )
    }
    else {
      return (
        <> <Head />
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}>

            <Menu
              fixed={fixed ? 'top' : 'top'}
              inverted={fixed ? !fixed : !fixed}
              secondary={fixed ? !fixed : !fixed}
              borderless

              size='huge'>
              <Container >
                <Menu.Item position='right'>
                  <Menu.Item as='a' active onClick={() => scroll.scrollTo(0)}>
                    Home
                </Menu.Item>
                  <Menu.Item as='a' onClick={() => scrollToComponent(this.aboutRef)} >About</Menu.Item>
                  <Menu.Item as='a' onClick={() => scrollToComponent(this.experienceRef)}>Experience</Menu.Item>
                  <Menu.Item as='a' onClick={() => scrollToComponent(this.projectsRef)}>Projects</Menu.Item>
                  <Menu.Item as='a' onClick={() => scrollToComponent(this.skillsRef)}>Skills</Menu.Item>
                </Menu.Item>
              </Container>
            </Menu>
          </Visibility>
          <About ref={(section) => { this.aboutRef = section; }} />
          <Experience ref={(section) => { this.experienceRef = section; }} />
          <Projects ref={(section) => { this.projectsRef = section; }} />
          <Skills ref={(section) => { this.skillsRef = section; }} />
          <Footer />
        </>
      )
    }
  }
}
export default App;
