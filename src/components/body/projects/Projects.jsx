import React from "react";
import "./Projects.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
function Projects() {
  return (
    <div id="portfolio" className="container containerProjects bg-secondary">
      <div className="title">
        <div className="backTitle">
          <h1>Portifólio</h1>
        </div>
        <div className="frontTitle">
          <h2 className="h2Projects">Alguns dos meus projetos</h2>
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
            <h3>Projeto 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sollicitudin, metus ut lobortis tristique, nisi ipsum fermentum
              justo, in fermentum purus lectus vitae velit.
            </p>
          </div>
          <div className="project">
            <img src="https://via.placeholder.com/150" alt="Project 1" />
            <h3>Projeto 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sollicitudin, metus ut lobortis tristique, nisi ipsum fermentum
              justo, in fermentum purus lectus vitae velit.
            </p>
          </div>
          <div className="project">
            <img src="https://via.placeholder.com/150" alt="Project 1" />
            <h3>Projeto 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              sollicitudin, metus ut lobortis tristique, nisi ipsum fermentum
              justo, in fermentum purus lectus vitae velit.
            </p>
          </div>
        </div>
        <div className="divBtn">
          <button className="btnDefault btnGithub">Link para o github</button>
        </div>
      </motion.div>
    </div>
  );
}

export default Projects;
