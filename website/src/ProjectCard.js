import React from 'react'
import { Image, Header, Card } from 'semantic-ui-react'

class ProjectCard extends React.Component {

    render() {
        return (
            <Card>
                <Image src={this.props.image} size='medium'/>
                <Card.Content>
                    <Card.Header>{this.props.title}</Card.Header>
                    <Card.Meta>{this.props.subtitle}</Card.Meta>
                    <Card.Description>{this.props.description}</Card.Description>
                </Card.Content>
            </Card>

        )
    }
}

export default ProjectCard