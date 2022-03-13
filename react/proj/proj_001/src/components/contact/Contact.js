import React from "react";
import H1s from "../H1s";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faFacebookSquare,
} from "@fortawesome/free-brands-svg-icons";

import "./Contact.css";

export default function Contact() {
  const contact = {
    h1: "Contact",
  };
  return (
    <div className="contact">
      <div className="contact-container">
        <H1s h1={contact.h1} />
        <div className="contact-info">
          <p className="phone">
            <a href="tel://:16040000000">+1 (604) 000 0000</a>
          </p>
          <div className="email">
            <a href="mailto:aso091335@gmail.com">aso091335@gmail.com</a>
          </div>
          <div className="icons-in-contact">
            <a href="https://www.linkedin.com/in/yuki-hori-85a51421b/">
              <FontAwesomeIcon
                icon={faLinkedin}
                size="2x"
                className="icon-in-contact"
              />
            </a>
            <a href="https://github.com/Yuuki915">
              <FontAwesomeIcon
                icon={faGithubSquare}
                size="2x"
                className="icon-in-contact"
              />
            </a>
            <a href="/">
              <FontAwesomeIcon
                icon={faFacebookSquare}
                size="2x"
                className="icon-in-contact"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
