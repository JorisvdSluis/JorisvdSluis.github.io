import './App.css'
import React, { Component } from 'react'
import scrollToComponent from 'react-scroll-to-component';
import {
  Container,
  Menu,
  Visibility,
  Divider,
} from 'semantic-ui-react'
import Footer from './Footer';
import Skills from './Skills';
import About from './About';
import Experience from './Experience';
import Head from './Head';
import Projects from './Projects';


class App extends Component {
  constructor(props) {
    super(props);
    this.aboutRef = React.createRef();
    this.experienceRef = React.createRef();
    this.skillsRef = React.createRef();
    this.projectsRef = React.createRef();
  }

  state = {}
  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  render() {
    const { fixed } = this.state
    const Scroll = require('react-scroll');
    var scroll = Scroll.animateScroll;
    return (
      <> <Head />
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}>
          
          <Menu
            fixed={fixed ? 'top' : 'top'}
           inverted={fixed ? !fixed : !fixed}
           secondary={fixed ? !fixed: !fixed}
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
export default App;
