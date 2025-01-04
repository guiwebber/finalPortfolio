import React from "react";
import "./Footer.css";

import { useTranslation } from "react-i18next";
function Footer() {
  const { t } = useTranslation();
  return (
    <div className=" containerFooter bg-primary">
      <p className="textFooter">
        Copyright © 2024 <span className="name"> Guilherme Webber.</span>{" "}
        {t("footer")}
      </p>
    </div>
  );
}

export default Footer;
