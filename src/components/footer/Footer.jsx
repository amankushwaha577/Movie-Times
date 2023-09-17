import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                
                <div className="infoText">
                Introducing MovieTimes, the cutting-edge movie and TV show app built with the power of React and Redux! Dive into a world of limitless entertainment at your fingertips. Whether you're a dedicated cinephile, a TV series addict, or just looking for a night of fun, MovieTimes has got you covered.
                Explore an extensive library of movies and TV shows spanning various genres, from action-packed blockbusters to heartwarming dramas, and binge-worthy series.
                </div>

                <ul className="menuItems">
                    <li className="menuItem">MOVIETIMES : AMAN KUSHWAHA</li>
                    {/* <li className="menuItem">: </li>
                    <li className="menuItem">AMAN KUSHWAHA</li> */}
                </ul>

                <div className="socialIcons">
                 <a href="https://www.instagram.com/the_amankushwaha/" target="_blank" rel="noopener noreferrer" className="icon">
                      <FaInstagram />
                  </a>
                  <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="icon">
                      <FaTwitter />
                  </a>
                  <a href="https://www.linkedin.com/in/amankushwaha57/" target="_blank" rel="noopener noreferrer" className="icon">
                      <FaLinkedin />
                  </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
