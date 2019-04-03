import React from 'react'
import banner from './assets/bg3.jpg'
import './App.css'
import {
    Image, Container,
  
} from 'semantic-ui-react'
class Head extends React.Component {
    render() {
        return (
            <>
                <Image className="Image" src={banner}  />
            </>
        )
    }
}

export default Head