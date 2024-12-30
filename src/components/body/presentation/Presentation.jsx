import React from "react";
import "./Presentation.css";
import { FaAngleDown } from "react-icons/fa";
function Presentation() {
  return (
    <div className="container containerMain">
      <div className="presentation">
        <h4 className="welcome">Bem-vindo</h4>
        <div class="typewriter">
          <span class="text"></span>
        </div>
        <div className="divContact">
          <button className="btnDefault btnContact">Contate-me</button>
        </div>
        <div className="arrow">
         <FaAngleDown/>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
