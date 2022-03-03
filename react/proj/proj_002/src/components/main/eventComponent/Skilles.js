import React from "react";
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

import "./Skilles.css";

function Skilles(props) {
  return (
    <div className="skilles">
      <p className="skilles-title">Skilles</p>
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
  );
}

export default Skilles;
