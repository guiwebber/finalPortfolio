import React, { useState } from "react";
import "./Navbar.css";
import Eu from "../../../assets/images/pic.jpeg";
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
      const offset = window.innerWidth > 1000 ? 0 : 60; 
      const topPosition = section.offsetTop - offset; 
      window.scrollTo({
        top: topPosition,
        behavior: "smooth", 
      });
    }
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
              <a href="#start">Início</a>
            </li>
            <li
              className="list-item"
              onClick={(e) => handleMenuItemClick(e, "about")}
            >
              <a href="#about">Sobre</a>
            </li>
            <li
              className="list-item"
              onClick={(e) => handleMenuItemClick(e, "portfolio")}
            >
              <a href="#portfolio">Portifólio</a>
            </li>
            <li
              className="list-item"
              onClick={(e) => handleMenuItemClick(e, "skills")}
            >
              <a href="#skills">Habilidades</a>
            </li>
            <li
              className="list-item"
              onClick={(e) => handleMenuItemClick(e, "contact")}
            >
              <a href="#contact">Contato</a>
            </li>
            <li
              className="list-item"
              onClick={handleCheckboxChange}
            >
              <button className="btnDefault btnDownload">Baixar currículo</button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="social">
        <a href="#">
          <FaGithub className="icons" />
        </a>
        <a href="#">
          <FaWhatsappSquare className="icons" />
        </a>
        <a href="#">
          <FaLinkedin className="icons" />
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
    </div>
  );
}

export default Navbar;
