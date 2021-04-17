import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-content">
          <a href="#home" className="nav-logo">
            <img src="images/health.png" alt="logo" />
            <h2>
              <Link
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-81}
                className="menu__link"
                to="home"
              >
                Cross Gym
              </Link>
            </h2>
          </a>
          <h5>
            If you want to <span>change</span>
          </h5>
          <h2 className="social">Follow Us</h2>
          <ul className="social-list">
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>Youtube</li>
          </ul>
          <h2 className="navlink">Navigation Links</h2>
          <ul className="links">
            <li className="menu__item">
              <Link
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-81}
                className="menu__link"
                to="trainers"
              >
                Trainers
              </Link>
            </li>
            <li className="menu__item">
              <Link
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-81}
                className="menu__link"
                to="prices"
              >
                Prices
              </Link>
            </li>
            <li className="menu__item">
              <Link
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-81}
                className="menu__link"
                to="contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
