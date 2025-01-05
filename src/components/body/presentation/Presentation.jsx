import React from "react";
import "./Presentation.css";
import { FaAngleDown } from "react-icons/fa";
import { useTranslation } from "react-i18next";
function Presentation() {
  const { t, i18n } = useTranslation();

  return (
    <div id="start" className="containerMain">
      <div className="presentation">
        <h4 className="welcome">{t("welcome")}</h4>
        <div className="typewriter">
          <span className={`text ${i18n.language}`}></span>
        </div>
        <div className="divContact">
          <a href="https://wa.me/+5554991406029" target="_blank">
            <button className="btnDefault btnContact">{t("contactMe")}</button>
          </a>
        </div>
        <div className="arrow">
          <FaAngleDown />
        </div>
      </div>
    </div>
  );
}

export default Presentation;
