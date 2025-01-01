import React from "react";
import "./Presentation.css";
import { FaAngleDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";
function Presentation() {
  const { i18n } = useTranslation();
  return (
    <div id="start" className="container containerMain">
      <div className="presentation">
        <h4 className="welcome">Bem-vindo</h4>
        <div class="typewriter">
          <span class={`text ${i18n.language}`}></span>
        </div>
        <div className="divContact">
          <button className="btnDefault btnContact">Contate-me</button>
        </div>
        <div className="arrow">
          <FaAngleDown />
        </div>
       
      </div>
    </div>
  );
}

export default Presentation;
