import PropTypes from 'prop-types'
import banner from './assets/bannersmall.png'
import rug from './assets/rug.jpg'
import work from './assets/dirk.jpg'
import flutter from './assets/flutter.png'
import c from './assets/c.png'
import javascript from "./assets/javascript.png"
import typescript from './assets/typescript.png'
import html from './assets/html.png'
import python from './assets/python.png'
import education from './assets/coding.jpg'
import React, { Component } from 'react'
import LangCard from './Card.js'
import pdf from './assets/cvs.pdf'
import scrollToComponent from 'react-scroll-to-component';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Visibility,
  Label,
  GridRow,
  GridColumn,
} from 'semantic-ui-react'
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.Education = React.createRef();
    this.Skills = React.createRef();
  }
  state = {}
  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })
  render() {
    const { children } = this.props
    const { fixed } = this.state
    const Scroll = require('react-scroll');
    var scroll = Scroll.animateScroll;
    return (
      <>


        <>
          <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
            <Visibility
              once={false}
              onBottomPassed={this.showFixedMenu}
              onBottomPassedReverse={this.hideFixedMenu}>
              <Image src={banner} />
              <Menu
                fixed={fixed ? 'top' : 'top'}
                inverted={fixed ? fixed : !fixed}
                secondary={!fixed}
                size='huge'>
                <Container >
                  <Menu.Item position='right'>
                    <Menu.Item as='a' active onClick={() => scroll.scrollTo(0)}>
                      Home
                </Menu.Item>
                    <Menu.Item as='a' onClick={() => scrollToComponent(this.myRef)} >About</Menu.Item>
                    <Menu.Item as='a' onClick={() => scrollToComponent(this.Education)}>Experience</Menu.Item>
                    <Menu.Item as='a' onClick={() => scrollToComponent(this.Skills)}>Skills</Menu.Item>
                  </Menu.Item>

                </Container>
              </Menu>
            </Visibility>
            {children}
          </Responsive>
        </>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>
                <br />  <br /><br /> <br /> About me
            </Header>
                <p style={{ fontSize: '1.33em' }}>
                  I'm a second year student at the Rotterdam university of applied sciences. My passion lies with creating software solutions with upcoming technologies.
                   As a Team leader at Dirk I learned how to work with others and how to carry responsibility, which is very usefull with working in teams.
            </p>
              </Grid.Column>
              <Grid.Column floated='right' width={5}>
                <Image bordered rounded size='large' src={rug} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
                <a href={pdf} download><Button size='huge' >Download my CV</Button></a>

              </Grid.Column>
            </Grid.Row>
          </Grid><section className='myref' ref={(section) => { this.myRef = section; }}></section>
        </Segment>
        <br /><br /> <br />
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column floated='left' width={5}>
                <Image bordered rounded size='large' src={education} />
              </Grid.Column>
              <Grid.Column width={8}>
                <Segment basic>
                  <Header as='h3' style={{ fontSize: '2em' }}>
                    Education
            </Header>
                  <p style={{ fontSize: '1.33em' }}>
                    <Label ribbon>2017 - now</Label><br />
                    <b>Computer science</b> <br />
                    University of applied sciences Rotterdam
            <br />
                    <Label ribbon>2010 - 2016</Label><br />
                    <b>Atheneum</b> <br />
                    DevelsteinCollege
            </p>
                  <section className='education' ref={(section) => { this.Education = section; }}></section>
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Divider />
            <Grid.Row>
              <Grid.Column width={8}>
                <Segment basic>
                  <Header as='h3' style={{ fontSize: '2em' }}>
                    Work Experience
            </Header>
                  <p style={{ fontSize: '1.33em' }}>
                    <Label ribbon>2014 - now</Label><br />
                    <b>Team Leader</b> <br />
                    Dirk van den Broek
            </p>
                </Segment>
              </Grid.Column>
              <Grid.Column floated='right' width={5}>
                <Image bordered rounded size='large' src={work} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid columns={2} textAlign='center'>
            <GridRow>
              {/* <GridColumn>
                <Header as='h3' style={{ fontSize: '2em' }}>
                  Projects
            </Header>
              </GridColumn> */}
              <GridColumn>
                <Header as='h3' style={{ fontSize: '2em' }}>
                Skills
            </Header>
           
              </GridColumn>
            </GridRow>
          </Grid>
          <Grid columns={2} textAlign='center'>
          
         
            <Grid.Row verticalAlign='middle'>
            
            
              {/* <Grid.Column>
            
            <Grid columns={2} textAlign='center'>
              <GridRow>
                <section className='skills' ref={(section) => { this.Skills = section; }}></section>
                <GridColumn><LangCard image={rug} title="Webshop" subtitle="Created with ReactJs and GraphQl" ></LangCard></GridColumn>
                <GridColumn><LangCard image={rug} title="Guitar hero" subtitle="Created with Pygame" ></LangCard></GridColumn>
              </GridRow>
              
              <GridRow>
                <GridColumn><LangCard image={rug} title="Lucky Lama" subtitle="Created with Flutter(Dart)" ></LangCard></GridColumn>
                <GridColumn><LangCard image={rug} title="Face recogniton" subtitle="" ></LangCard></GridColumn>
              </GridRow>
            </Grid>
          </Grid.Column> */}
              <Grid.Column>
            
                <Grid columns={2} textAlign='center'>
                  <GridRow>
                    <GridColumn><LangCard image={c} title="C#" subtitle="" ></LangCard></GridColumn>
                    <GridColumn><LangCard image={flutter} title="Flutter" subtitle="Created with Dart" ></LangCard></GridColumn>
                  </GridRow>
                  <section className='skills' ref={(section) => { this.Skills = section; }}></section>
                  <GridRow>
                  
                    <GridColumn><LangCard image={typescript} title="TypeScript" subtitle="" ></LangCard></GridColumn>
                    
                    <GridColumn><LangCard image={javascript} title="JavaScript" subtitle="" ></LangCard></GridColumn>
                  </GridRow>
                  <GridRow>
                    <GridColumn><LangCard image={html} title="HTML" subtitle="" ></LangCard></GridColumn>
                    <GridColumn><LangCard image={python} title="Python" subtitle="" ></LangCard></GridColumn>
                  </GridRow>
                </Grid>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item as='a'>Sitemap</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Services' />
                  <List link inverted>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>
                    Footer Header
              </Header>
                  <p>
                    Disclaimer this is website is still under development.
              </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </>
    )
  }
}
export default App;
