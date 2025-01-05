import React, { useState, useEffect } from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useTranslation } from "react-i18next";

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
    { title: t("titleProject1"), description: t("descriptionProject1"), img: "https://via.placeholder.com/150" },
    { title: t("titleProject2"), description: t("descriptionProject2"), img: "https://via.placeholder.com/150" },
    { title: t("titleProject3"), description: t("descriptionProject3"), img: "https://via.placeholder.com/150" },
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
          <button className="btnPrevNext" onClick={handlePrev}>left</button>

          <div className="projects-container">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`project project${index + 1}`}
                style={{
                  zIndex: currentProject === index ? 1 : 0,
                  opacity: screenWidth < 1000 ? currentProject === index ? 1 : 0 : currentProject === index ? 1 : 0.1,
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
                <img src={project.img} alt={`Project ${index + 1}`} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>

          <button className="btnPrevNext" onClick={handleNext}>right</button>
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
