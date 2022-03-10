import React from "react";
import H1s from "../H1s";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
  faSass,
  faPhp,
  faPython,
} from "@fortawesome/free-brands-svg-icons";

import "./Skills.css";

export default function Skills() {
  const skills = {
    h1: "Skills",
  };
  return (
    <div className="skills">
      <div className="skills-container">
        <H1s h1={skills.h1} />

        <div className="icon-container">
          <div className="icons">
            <FontAwesomeIcon icon={faHtml5} size="5x" className="icon" />
            <FontAwesomeIcon icon={faCss3Alt} size="5x" className="icon" />
            <FontAwesomeIcon icon={faJsSquare} size="5x" className="icon" />
            <FontAwesomeIcon icon={faReact} size="5x" className="icon" />
            <FontAwesomeIcon icon={faSass} size="5x" className="icon" />
            <FontAwesomeIcon icon={faPhp} size="5x" className="icon" />
            <FontAwesomeIcon icon={faPython} size="5x" className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
