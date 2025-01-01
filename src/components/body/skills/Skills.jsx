import React from "react";
import "./Skills.css";

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
function Skills() {
  return (
    <div id="skills" className="container containerSkills bg-primary">
      <div className="title">
        <div className="backTitle">
          <h1>Habilidades</h1>
        </div>
        <div className="frontTitle">
          <h2 className="h2Skills">Meus conhecimentos</h2>
        </div>
      </div>
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
          className="skillsDiv"
        >
          teste
        </motion.div>
    </div>
  );
}

export default Skills;
