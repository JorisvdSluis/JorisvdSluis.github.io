import React from 'react'
import banner from '../assets/banner4kmobile.png'
import '../App.css'
import {
    Image, 
  
} from 'semantic-ui-react'
class HeadMobile extends React.Component {
    render() {
        return (
            <>
                <Image className="Image" src={banner}  />
            </>
        )
    }
}

export default HeadMobile