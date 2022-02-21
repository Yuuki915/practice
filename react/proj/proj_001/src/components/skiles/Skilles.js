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
} from "@fortawesome/free-brands-svg-icons";

import "./Skilles.css";

export default function Skilles() {
  const skilles = {
    h1: "Skilles",
  };
  return (
    <div className="skilles">
      <div className="skilles-container">
        <H1s h1={skilles.h1} />

        <div className="icon-container">
          <div className="icons">
            <FontAwesomeIcon icon={faHtml5} size="5x" className="icon" />
            <FontAwesomeIcon icon={faCss3Alt} size="5x" className="icon" />
            <FontAwesomeIcon icon={faJsSquare} size="5x" className="icon" />
            <FontAwesomeIcon icon={faReact} size="5x" className="icon" />
            <FontAwesomeIcon icon={faSass} size="5x" className="icon" />
            <FontAwesomeIcon icon={faPhp} size="5x" className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
