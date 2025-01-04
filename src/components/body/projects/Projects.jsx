import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useTranslation } from "react-i18next";
function Projects() {
  const { t } = useTranslation();
  return (
    <div id="portfolio" className=" containerProjects bg-secondary">
      <div className="title">
        <div className="backTitle">
          <h1>{t("portfolio")}</h1>
        </div>
        <div className="frontTitle">
          <h2 className="h2Projects">{t("h2portfolio")}</h2>
        </div>
      </div>

      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="divProjects"
      >
        <div className="subProjects">
          <div className="project">
            <img src="https://via.placeholder.com/150" alt="Project 1" />
            <h3>{t("titleProject1")}</h3>
            <p>{t("descriptionProject1")}</p>
          </div>
          <div className="project">
            <img src="https://via.placeholder.com/150" alt="Project 1" />
            <h3>{t("titleProject2")}</h3>
            <p> {t("descriptionProject2")}</p>
          </div>
          <div className="project">
            <img src="https://via.placeholder.com/150" alt="Project 1" />
            <h3>{t("titleProject3")}</h3>
            <p> {t("descriptionProject3")}</p>
          </div>
        </div>
        <div className="divBtn">
          <button className="btnDefault btnGithub"> {t("btnGithub")}</button>
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
