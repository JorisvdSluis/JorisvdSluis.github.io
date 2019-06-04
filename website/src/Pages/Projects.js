import React from 'react'
import {
    Grid,
    Segment,
    Image,
} from 'semantic-ui-react'
import webshop from '../assets/webshop.jpg'
import WebshopText from "../Text/WebshopText"
import AppText from "../Text/AppText"
import GameText from "../Text/GameText"
import FaceText from "../Text/FaceText"
import AppImage from "../assets/App.png"
import GameImage from "../assets/Game.png"
import FaceImage from "../assets/face.jpg"
import './Projects.css'
class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Webshop: true,
            App: false,
            Game: false,
            Face: false,
            WebshopId: "Big",
            AppId: "Small",
            FaceId: "Small",
            Gameid: "Small"
        };
        this.handleWebshop = this.handleWebshop.bind(this);
        this.handleApp = this.handleApp.bind(this);
        this.handleGame = this.handleGame.bind(this);
        this.handleFace = this.handleFace.bind(this);
    }

    handleWebshop() {
        this.setState({
            App: false,
            Webshop: true,
            Game: false,
            Face: false,
            WebshopId: "Big",
            AppId: "Small",
            FaceId: "Small",
            Gameid: "Small"
        });
    }

    handleApp() {
        this.setState({
            App: true,
            Webshop: false,
            Game: false,
            Face: false,
            WebshopId: "Small",
            AppId: "Big",
            FaceId: "Small",
            Gameid: "Small"
        });
    }
    handleGame() {
        this.setState({
            App: false,
            Webshop: false,
            Game: true,
            Face: false,
            WebshopId: "Small",
            AppId: "Small",
            FaceId: "Small",
            Gameid: "Big",
        });
    }
    handleFace() {
        this.setState({
            App: false,
            Webshop: false,
            Game: false,
            Face: true,
            WebshopId: "Small",
            AppId: "Small",
            FaceId: "Big",
            Gameid: "Small"
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
                                    <Image id={this.state.WebshopId} style={{ cursor: 'pointer' }} bordered rounded size='large' src={webshop} onClick={this.handleWebshop} /></Grid.Column>
                                <Grid.Column>
                                    <Image  id={this.state.AppId} style={{ cursor: 'pointer' }} bordered rounded size='large' src={AppImage} onClick={this.handleApp} /></Grid.Column>
                                <Grid.Column>
                                    <Image  id={this.state.FaceId} style={{ cursor: 'pointer' }} bordered rounded size='large' src={FaceImage} onClick={this.handleFace} /></Grid.Column>
                                <Grid.Column>
                                    <Image  id={this.state.Gameid} style={{ cursor: 'pointer' }} bordered rounded size='large' src={GameImage} onClick={this.handleGame} /></Grid.Column>
                            </Grid>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            {this.state.App && <AppText />}
                            {this.state.Face && <FaceText />}
                            {this.state.Game && <GameText />}
                            {this.state.Webshop && <WebshopText />}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        )
    }
}

export default Projects