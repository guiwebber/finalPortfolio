import React, { useState, useEffect } from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useTranslation } from "react-i18next";
import leftArrow from "../../../assets/images/left-arrow-svgrepo-com.svg";
import rightArrow from "../../../assets/images/right-arrow-svgrepo-com.svg";
import Valoguide from "../../../assets/images/valoguide.png";
import firstPortfolio from "../../../assets/images/firstPortfolio.png";
import cardInteractive from "../../../assets/images/cardInteractive.png";
function Projects() {
  const [currentProject, setCurrentProject] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth); // Largura da tela
  const { t } = useTranslation();

  // Função para mover para o projeto anterior
  const handlePrev = () => {
    setCurrentProject((prev) => (prev === 0 ? 2 : prev - 1)); // 2 pois temos 3 projetos (índices 0, 1, 2)
  };

  // Função para mover para o próximo projeto
  const handleNext = () => {
    setCurrentProject((prev) => (prev === 2 ? 0 : prev + 1)); // 2 pois temos 3 projetos (índices 0, 1, 2)
  };

  // Atualiza a largura da tela
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Definindo os projetos com dados de exemplo
  const projects = [
    {
      title: t("Valorant guide"),
      description: t("descriptionProject1"),
      img: Valoguide,
      linkProject: "https://valorantguide2-0.vercel.app/",
    },
    {
      title: t("titleProject2"),
      description: t("descriptionProject2"),
      img: firstPortfolio,
      linkProject: "https://guiwebber.vercel.app/",
    },
    {
      title: t("titleProject3"),
      description: t("descriptionProject3"),
      img: cardInteractive,
      linkProject: "https://interactive-card-form-six.vercel.app/",
    },
  ];

  return (
    <div id="portfolio" className="containerProjects bg-secondary">
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
          <div className="projects-container">
            <button className="btnPrevNext" onClick={handlePrev}>
              <img className="arrows" src={leftArrow} alt="" />
            </button>
            {projects.map((project, index) => (
              <div
                key={index}
                className={`project project${index + 1}`}
                style={{
                  zIndex: currentProject === index ? 1 : 0,
                  opacity:
                    screenWidth < 1000
                      ? currentProject === index
                        ? 1
                        : 0
                      : currentProject === index
                      ? 1
                      : 0.1,
                  // Ajuste do left com base na tela
                  left:
                    screenWidth < 1000
                      ? currentProject === index
                        ? "0%" // Projeto atual fica no centro
                        : currentProject === (index + 1) % 3
                        ? "0%" // Projetos à direita ficam em 10%
                        : "0%" // Projetos à esquerda ficam em -10%
                      : currentProject === index
                      ? "0%" // Projeto atual fica no centro
                      : currentProject === (index + 1) % 3
                      ? "20%" // Projetos à direita ficam em 20%
                      : "-20%", // Projetos à esquerda ficam em -20%,
                  transition: "all 0.5s ease",
                }}
              >
                <img
                  className="imgProject"
                  src={project.img}
                  alt={`Project ${index + 1}`}
                />
                <div className="subDivProject">
                  <h3 className="titleProject">{project.title}</h3>
                  <p>{project.description}</p>
                  <button className="btnDefault btnProject">
                    <a target="_blank" href={project.linkProject}>
                      Link para o projeto
                    </a>
                  </button>
                </div>
              </div>
            ))}
            <button className="btnPrevNext" onClick={handleNext}>
              <img className="arrows" src={rightArrow} alt="" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
