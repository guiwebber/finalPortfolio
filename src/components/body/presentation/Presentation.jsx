import React from "react";
import "./Presentation.css";
import brasil from "../../../assets/images/brasil.png";
import usa from "../../../assets/images/usa.png";
import { FaAngleDown } from "react-icons/fa";
function Presentation() {
  return (
    <div id="start" className="container containerMain">
      <div className="presentation">
        <h4 className="welcome">Bem-vindo</h4>
        <div class="typewriter">
          <span class="text"></span>
        </div>
        <div className="divContact">
          <button className="btnDefault btnContact">Contate-me</button>
        </div>
        <div className="arrow">
          <FaAngleDown />
        </div>
        <div className="languages">
          <a href="#">
            <img className="flags" src={brasil} alt="" />
          </a>
          <a href="#">
            <img className="flags" src={usa} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
