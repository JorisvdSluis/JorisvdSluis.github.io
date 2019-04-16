import React from 'react'
import {
    Grid,
    Header,
    Segment,
    Button,
    Image,
    label
} from 'semantic-ui-react'
import webshop from './assets/webshop.jpg'
import WebshopText from "./WebshopText"
import AppText from "./AppText"
import GameText from "./GameText"
import FaceText from "./FaceText"
import AppImage from "./assets/App.png"
import GameImage from "./assets/Game.png"
import FaceImage from "./assets/face.jpg"
class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {Webshop: true,
            App:false,
            Game:false,
            Face:false};
        this.handleWebshop= this.handleWebshop.bind(this);
        this.handleApp= this.handleApp.bind(this);
        this.handleGame= this.handleGame.bind(this);
        this.handleFace= this.handleFace.bind(this);
      }
     
      handleWebshop() {
        this.setState({
            App: false,
            Webshop: true,
            Game: false,
            Face: false
        });
      }
    
      handleApp() {
        this.setState({
         App: true,
         Webshop: false,
         Game: false,
         Face: false
        });
      }
      handleGame() {
        this.setState({
         App: false,
         Webshop: false,
         Game: true,
         Face: false
        });
      }
      handleFace() {
        this.setState({
         App: false,
         Webshop: false,
         Game: false,
         Face: true
        });
      }
    
        
    
    render() {
        return (
            <Segment style={{ padding: '20.0em 0em' }} vertical >
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column floated='right' width={10}>
                            <Grid columns={2}>
                                <Grid.Column>
                                    <Image bordered rounded size='large' src={webshop}  onClick={this.handleWebshop} /></Grid.Column>
                                <Grid.Column>
                                    <Image bordered rounded size='large' src={AppImage} onClick={this.handleApp}/></Grid.Column>
                                <Grid.Column>
                                    <Image bordered rounded size='large' src={FaceImage} onClick={this.handleFace}/></Grid.Column>
                                <Grid.Column>
                                    <Image bordered rounded size='large' src={GameImage} onClick={this.handleGame}/></Grid.Column>


                            </Grid>


                        </Grid.Column>
                        <Grid.Column width={6}>
                        { this.state.App && <AppText/>}
                        { this.state.Face && <FaceText/>}
                        { this.state.Game && <GameText/>}
                            { this.state.Webshop && <WebshopText/>}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }
}

export default Projects