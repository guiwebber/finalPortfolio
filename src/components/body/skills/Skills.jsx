import React, { useState } from "react";
import "./Skills.css";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useTranslation } from "react-i18next";
import reactsvg from "../../../assets/images/technologies/react.svg";
import jssvg from "../../../assets/images/technologies/js.svg";
import githubsvg from "../../../assets/images/technologies/github.svg";
import htmlsvg from "../../../assets/images/technologies/html.svg";
import csssvg from "../../../assets/images/technologies/css.svg";
import sasssvg from "../../../assets/images/technologies/sass.svg";
import figmasvg from "../../../assets/images/technologies/figma.svg";
import tailwindsvg from "../../../assets/images/technologies/tailwind.svg";
import angularsvg from "../../../assets/images/technologies/angular.svg";
import gitsvg from "../../../assets/images/technologies/git.svg";

function Skills() {
  const { t } = useTranslation();
  const [selectedTech, setSelectedTech] = useState(null); // Estado para tecnologia selecionada

  // Dados das tecnologias e porcentagens
  const technologies = [
    { name: "React", progress: 100, icon: reactsvg },
    { name: "JavaScript", progress: 95, icon: jssvg },
    { name: "Angular", progress: 90, icon: angularsvg },
    { name: "Tailwind", progress: 85, icon: tailwindsvg },
    { name: "Sass", progress: 80, icon: sasssvg },
    { name: "Figma", progress: 75, icon: figmasvg },
    { name: "CSS", progress: 95, icon: csssvg },
    { name: "GitHub", progress: 90, icon: githubsvg },
    { name: "HTML", progress: 98, icon: htmlsvg },
    { name: "git", progress: 98, icon: gitsvg },
  ];

  return (
    <div id="skills" className="containerSkills bg-primary">
      <div className="title">
        <div className="backTitle">
          <h1>{t("skills")}</h1>
        </div>
        <div className="frontTitle">
          <h2 className="h2Skills">{t("h2skills")}</h2>
        </div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="skillsDiv"
      >
        <div className="technologies">
          <div className="techFlex">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="techIcons"
                onClick={() => setSelectedTech(tech)} // Define a tecnologia selecionada
              >
                <img className="iconsSvgs" src={tech.icon} alt={tech.name} />
              </div>
            ))}
          </div>

          <h1 className="clickTech">Clique nas tecnologias</h1>
          {selectedTech && ( // Renderiza a barra somente se houver uma tecnologia selecionada
            <div className="divBar">
              <h2>{selectedTech.name}</h2>
              <div className="bar">
                <div
                  className="bar-fill"
                  style={{ width: `${selectedTech.progress}%` }}
                ></div>
                <p>{selectedTech.progress}%</p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default Skills;
