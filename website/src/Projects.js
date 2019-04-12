import React from 'react'
import {
    Grid,
    Image,
    Segment,
    Header,
    Container,

} from 'semantic-ui-react'
import webshop from './assets/webshop.jpg'
import ProjectCard from './ProjectCard';

class Projects extends React.Component {

    render() {
        return (


            // <Segment style={{ padding: '5em' }} textAlign="center" vertical>

            //     <Header as='h3' style={{ fontSize: '2em' }}>
            //         <br />
            //         Projects
            //     </Header>
                <Container >
                <Grid centered columns={3} >
                    <Grid.Row>
                        <Grid.Column><ProjectCard image={webshop} title="Webshop" subtitle="Created with React" description="This is a music webshop" /></Grid.Column>
                        <Grid.Column><ProjectCard image={webshop} title="Webshop" subtitle="Created with React" description="This is a music webshop" /></Grid.Column>

                        <Grid.Column><ProjectCard image={webshop} title="Webshop" subtitle="Created with React" description="This is a music webshop" /></Grid.Column>

                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column><ProjectCard image={webshop} title="Webshop" subtitle="Created with React" description="This is a music webshop" /></Grid.Column>
                        <Grid.Column><ProjectCard image={webshop} title="Webshop" subtitle="Created with React" description="This is a music webshop" /></Grid.Column>
                        <Grid.Column><ProjectCard image={webshop} title="Webshop" subtitle="Created with React" description="This is a music webshop" /></Grid.Column>
                    </Grid.Row>
                </Grid>
                </Container>

            // </Segment>
        )
    }
}

export default Projects