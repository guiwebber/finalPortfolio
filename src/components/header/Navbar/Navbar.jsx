import React, { useState } from "react";
import "./Navbar.css";
import Eu from "../../../assets/images/pic.jpeg";
import "../../../../i18n";
import { useTranslation } from "react-i18next";
import brasil from "../../../assets/images/brasil.png";
import usa from "../../../assets/images/usa.png";
import { FaLinkedin, FaGithub, FaWhatsappSquare } from "react-icons/fa";

function Navbar() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleMenuItemClick = (event, sectionId) => {
    event.preventDefault();
    setIsChecked(false);
  
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = window.innerWidth > 1000 ? 0 : 60; // Ajuste baseado na largura da tela
      const topPosition = section.offsetTop - offset;
  
      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    }
  };
  
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div
      className={`containerNavbar ${
        isChecked ? "containerNavbarMobile" : "containerNavbar"
      }`}
    >
      <div className={`divLogoName`}>
        <div className="divLogo">
          <img className="logo" src={Eu} alt="" />
        </div>
        <div className="divName">
          <h1 className="name">Guilherme Webber</h1>
        </div>
      </div>
      <div className="divNav">
        <nav className="navigation">
          <ul className="list">
            <li
              className="list-item"
              onClick={(e) => handleMenuItemClick(e, "start")}
            >
              <a  href="#start">
                {t("start")}
              </a>
            </li>
            <li
              className="list-item"
              onClick={(e) => handleMenuItemClick(e, "about")}
            >
              <a  href="#about">
                {t("about")}
              </a>
            </li>
            <li
              className="list-item"
              onClick={(e) => handleMenuItemClick(e, "portfolio")}
            >
              <a href="#portfolio">{t("portfolio")}</a>
            </li>
            <li
              className="list-item"
              onClick={(e) => handleMenuItemClick(e, "skills")}
            >
              <a href="#skills">{t("skills")}</a>
            </li>
            <li
              className="list-item"
              onClick={(e) => handleMenuItemClick(e, "contact")}
            >
              <a href="#contact">{t("contact")}</a>
            </li>
            <li className="list-item" onClick={handleCheckboxChange}>
              <a href="../../assets/cv/guiwebber.pdf" download="curriculo.pdf">
                <button className="btnDefault btnDownload">
                  {t("download")}
                </button>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="social">
        <a href="https://github.com/guiwebber" target="_blank">
          <FaGithub className="icons iconGithub" />
        </a>
        <a href="https://wa.me/+5554991406029" target="_blank">
          <FaWhatsappSquare className="icons iconWhatsapp" />
        </a>
        <a href="https://www.linkedin.com/in/guilherme-webber-00052318a/" target="_blank">
          <FaLinkedin className="icons iconLinkedin" />
        </a>
      </div>
      <div className="hamburger">
        <input
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="checkbox"
          type="checkbox"
        />
        <span></span>
      </div>
      <div className="languages">
        <button onClick={() => changeLanguage("en")}>
          <img className="flags" src={usa} alt="" />
        </button>
        <button onClick={() => changeLanguage("pt")}>
          <img className="flags" src={brasil} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
