import React from "react";
import "./About.css";

import { FaPenRuler, FaDesktop } from "react-icons/fa6";
import { FaBullhorn } from "react-icons/fa";

import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
function About() {

  
    const { t } = useTranslation();
  return (
    <div id="about" className=" containerAbout bg-primary">
      <div
        className="title"
      >
        <div className="backTitle">
          <h1>{t("about")}</h1>
        </div>
        <div className="frontTitle">
          <h2 className="h2About">{t("h2about")}</h2>
        </div>
      </div>
      <motion.div 
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }} className="textAbout">
        <div className="flexDiv">
          <div className="leftText">
            <h2>
              {" "}
              {t("myName1")}<span className="name">Guilherme Ferraz Webber</span>{t("myName2")}
            </h2>
            <p>
             {t("textAbout")}
            </p>

            <p className="emphasis">
             
              {t("phrase")}
            </p>
          </div>
          <div className="rightText">
            <p className="texts">
              <span className="bold"> {t("name")} </span>
              Guilherme Ferraz Webber
            </p>
            <p className="texts">
              <span className="bold"> {t("email")} </span>
              guiz1n.webber@gmail.com
            </p>
            <p className="texts">
              <span className="bold"> Whatsapp: </span>
              (54) 99140-6029
            </p>
            <p className="texts">
              <span className="bold"> {t("from")} </span>
              Getúlio Vargas - RS
            </p>
          </div>
        </div>
        <div className="bottomDiv">
          <div className="bottomTitle">
            <h3>{t("workWithMe")}</h3>
            <span className="border"></span>
          </div>
          <div className="oneDiv">
            <div className="fourDivs">
              <div className="fourDivsIcons">
                <FaBullhorn />
              </div>
              <p>SEO Google</p>
            </div>
            <div className="fourDivs">
              <div className="fourDivsIcons">
                <FaDesktop />
              </div>
              <p>Web design</p>
            </div>
            <div className="fourDivs">
              <div className="fourDivsIcons">
                <FaPenRuler />
              </div>
              <p>UI/UX Design</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
