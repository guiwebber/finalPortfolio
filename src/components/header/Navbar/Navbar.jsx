import React, { useState } from "react";
import "./Navbar.css";
// import Logo from "../../../assets/images/logo.png";
import Eu from "../../../assets/images/pic.jpeg";
<script
  src="https://kit.fontawesome.com/94c245abd7.js"
  crossorigin="anonymous"
></script>;
import { FaLinkedin, FaGithub, FaWhatsappSquare } from "react-icons/fa";

function Navbar() {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = (event) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    console.log(checked);
  };

  return (
    <div className={`containerNavbar ${isChecked ? 'containerNavbarMobile' : 'containerNavbar'}`}>
      <div className={`divLogoName `}>
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
            <li className="list-item">
              <a href="#">Início</a>
            </li>
            <li className="list-item">
              <a href="#">Sobre</a>
            </li>
            <li className="list-item">
              <a href="#">Portifólio</a>
            </li>
            <li className="list-item">
              <a href="#">Habilidades</a>
            </li>
            <li className="list-item">
              <a href="#">Contato</a>
            </li>
            <li className="list-item">
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
