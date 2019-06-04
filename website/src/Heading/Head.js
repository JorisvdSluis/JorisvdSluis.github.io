import React from 'react'
import banner from '../assets/banner4k.png'
import './Head.css'
import { FaLinkedinIn, FaGithub} from 'react-icons/fa';
import {
    Image, 
  
} from 'semantic-ui-react'
class Head extends React.Component {
    render() {
        return (
            <>
          <a href="https://www.linkedin.com/in/joris-van-der-sluis-a39a13152/" > <FaLinkedinIn id = 'LinkedIn' size = '1.5em' /></a>
          <a href="https://github.com/JorisvdSluis" >  <FaGithub id = 'Github' size = '1.5em'/></a>
         
                <Image id ='head' src={banner}  />
                
            </>
        )
    }
}

export default Head