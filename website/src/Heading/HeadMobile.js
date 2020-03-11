import React from "react";
import banner from "../assets/banner4kmobile.png";
import "./Head.css";
import { FaLanguage } from "react-icons/fa";
import { Image } from "semantic-ui-react";
import NL from "../assets/nl.png";
import UK from "../assets/uk.png";
class HeadMobile extends React.Component {
  render() {
    return (
      <>
        <div id="mobileLanguage" size="1.5em" onClick={this.props.setLanguage}>
          <Image id="country" src={NL} />
          <Image id="country" src={UK} />
        </div>
        <Image style={{ zindex: 1 }} src={banner} />
      </>
    );
  }
}

export default HeadMobile;
