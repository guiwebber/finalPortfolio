import React from "react";
import "./About.css";

function About() {
  return (
    <div id='about' className="container containerAbout bg-primary">
      <div className="title">
        <div className="backTitle">
          <h1>Sobre mim</h1>
        </div>
        <div className="frontTitle">
          <h2>Um pouco sobre mim</h2>
        </div>
      </div>
      <div className="textAbout">
        <div className="flexDiv">
          <div className="leftText">
            <p>
              Sou um desenvolvedor web e mobile com foco em React e React
              Native. Meu objetivo é entregar soluções inovadoras e acessíveis
              aos clientes.
            </p>
            <p>
              Meu trabalho é baseado em desenho, desenvolvimento e teste de
              software. Estou sempre procurando soluções eficazes e agradáveis
              para os meus clientes.
            </p>
          </div>
          <div className="rightText">
            <p>
              Meu nome é Guilherme Webber, e eu sou um entusiasta de tecnologia
              e inovação.
            </p>
            <p>
              Atualmente, trabalho como desenvolvedor frontend na empresa XYZ,
              focando em React e React Native.
            </p>
          </div>
        </div>
        <div className="bottomDiv">
          <p>teste</p>
        </div>
      </div>
    </div>
  );
}

export default About;
