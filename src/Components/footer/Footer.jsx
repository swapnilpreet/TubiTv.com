import React from "react";
import logo from "../../assets/tubi.png";
import apple from "../../assets/download-app-store-icon-clipart-2.png";
import App from "../../assets/download-on-the-app-store-logo-png-23.png";
import sign from "../../assets/Swapnil signature.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";
import Info from "./Info";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <div className="container-logo-icon">
          <div className="infoText">
            <img src={logo} alt="" width={100} height={100} />
          </div>
          <div className="socialIcons">
            <span className="icon">
              <FaFacebookF />
            </span>
            <span className="icon">
              <FaInstagram />
            </span>
            <span className="icon">
              <FaTwitter />
            </span>
            <span className="icon">
              <FaLinkedin />
            </span>
          </div>
        </div>
        <Info />
        <div className="bottom-img">
            <img src={apple} alt="pic" width={100}/>{" "}
            <img src={App} alt="pic" width={160}/>{" "}
        </div>
        <div className="bottom-text">

          <p>Copyright © 2023 Tubi, Inc.</p>
          <p>Tubi is a registered trademark of Tubi,</p>
          <p>Inc. All rights reserved.</p>
        </div>
        <div>
          <img src={sign} alt="" />
          <h5>I made this website for the educational purpose  dont take action on it</h5>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
