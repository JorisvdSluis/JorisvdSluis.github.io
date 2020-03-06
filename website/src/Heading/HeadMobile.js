import React from 'react'
import banner from '../assets/banner4kmobile.png'
import './Head.css'
import { FaLanguage } from "react-icons/fa";
import {
    Image, 
  
} from 'semantic-ui-react'
class HeadMobile extends React.Component {
    render() {
        return (
            <>
                      <div
                    
                    onClick={this.props.setLanguage}
                  >
                    <FaLanguage id="mobileLanguage" size = '1.5em'/>
                  </div>
                <Image style={{zindex: 1}} src={banner}  />
            </>
        )
    }
}

export default HeadMobile