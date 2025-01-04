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
            <p className="bold">
            {t("h3textContact")}
            </p>
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
              <a className="icons iconGithub" href="#">
                <FaGithub />
              </a>
              <a className="icons iconWhatsapp" href="#">
                <FaWhatsappSquare />
              </a>
              <a className="icons iconLinkedin" href="#">
                <FaLinkedin />
              </a>
            </div>
            <div className="informations">
              <button className="btnCttWhatsapp">{t("btnWhatsapp")}</button>
            </div>
          </div>
          <div className="rightTextContact">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium excepturi esse nisi placeat, perspiciatis culpa vitae
              qui quae saepe quos iste aspernatur aliquam eum aliquid sit. Sit
              voluptatem tempore excepturi?
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
