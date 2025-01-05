import React from "react";
import "./Contact.css";

import {
  FaLinkedin,
  FaGithub,
  FaWhatsappSquare,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import { useTranslation } from "react-i18next";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei"; // Para controle e carregar o GLTF

function Model() {
  const { scene } = useGLTF("/3d/old_phone_blue_2.glb"); // Substitua pelo caminho correto do seu arquivo GLB

  return <primitive object={scene} scale={90} />; // Ajuste a escala conforme necessário
}

function Contact() {
  const { t } = useTranslation();
  return (
    <div id="contact" className="containerContact bg-secondary">
      <div className="title">
        <div className="backTitle">
          <h1>{t("contact")}</h1>
        </div>
        <div className="frontTitle">
          <h2 className="h2Contact">{t("h2contact")}</h2>
        </div>
      </div>

      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="flexContact"
      >
        <div className="contactDiv">
          <div className="leftTextContact">
            <p className="bold">{t("h3textContact")}</p>
            <div className="informations">
              <h4>{t("h3address")}</h4>
              <p>Av. Severiano de almeida, 479</p>
              <p>Centro</p>
              <p>Getúlio Vargas - RS</p>
            </div>

            <div className="informations">
              <h4>{t("h3contacts")}</h4>
              <p>
                <FaPhoneAlt className="df-color" /> (54) 991406029
              </p>

              <p>
                <FaEnvelope className="df-color" /> guiz1n.webber@gmail.com
              </p>
            </div>

            <div className="informations">
              <h4>{t("h3networks")}</h4>
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
            <div className="informations">
              <a href="https://wa.me/+5554991406029" target="_blank">
                <button className="btnCttWhatsapp">{t("btnWhatsapp")}</button>
              </a>
            </div>
          </div>

          <div className="rightTextContact">
            <div className="modelContainer">
              {/* Integrando o modelo 3D dentro da div */}
              <Canvas
                className="canva"
                camera={{
                  position: [25, 66, 66], // Posição da câmera (ajustada para distância maior)
                  fov: 120, // Campo de visão
                }}
              >
                <ambientLight intensity={4} /> {/* Luz ambiente */}
                <pointLight position={[10, 10, 10]} /> {/* Luz pontual */}
                <Model /> {/* Componente que renderiza o modelo 3D */}
                {/* Controle da câmera */}
              </Canvas>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
