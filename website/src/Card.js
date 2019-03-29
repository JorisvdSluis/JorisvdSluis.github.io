import React from 'react'
import { Image, Header} from 'semantic-ui-react'

class LangCard extends React.Component  {
  
    render(){
        return(
  <div>
    <Image src={this.props.image}  size = "small" centered rounded/>
 
      <Header>{this.props.title}</Header>
      <p>{this.props.subtitle}</p>
    
    </div>
        )
}}

export default LangCard