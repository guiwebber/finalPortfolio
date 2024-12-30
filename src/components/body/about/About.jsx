import React from "react";
import "./About.css";

function About() {
  return (
    <div id="about" className="container containerAbout bg-primary">
      <div className="title">
        <div className="backTitle">
          <h1>Sobre mim</h1>
        </div>
        <div className="frontTitle">
          <h2 className="h2About">Um pouco sobre mim</h2>
        </div>
      </div>
      <div className="textAbout">
        <div className="flexDiv">
          <div className="leftText">
            <h2>
              {" "}
              Eu sou <span className="name">Guilherme Ferraz Webber</span>, e eu
              sou desenvolvedor front-end.
            </h2>
            <p>
              Sou um desenvolvedor freelancer com foco em React, meu objetivo é
              entregar soluções inovadoras e acessíveis aos clientes. Meu
              trabalho é baseado em conversa, análise do mercado, desenho de
              protótipos e desenvolvimento, juntamente com o feedback do
              cliente.
            </p>

            <p className="emphasis">
              Criando interfaces com eficiência, performance e uma experiência
              envolvente.
            </p>
          </div>
          <div className="rightText">
            <p className="texts">
              <span className="bold"> Nome: </span>
              Guilherme Ferraz Webber
            </p>
            <p className="texts">
              <span className="bold"> E-mail: </span>
              guiz1n.webber@gmail.com
            </p>
            <p className="texts">
              <span className="bold"> Whatsapp: </span>
              (54) 99140-6029
            </p>
            <p className="texts">
              <span className="bold"> De: </span>
              Getúlio Vargas - RS
            </p>
          </div>
        </div>
        <div className="bottomDiv">
          <h3>Diferenciais de trabalhar comigo</h3>
          <div className="flexDiv">
            <div className="fourDivs">
              <p>SEO Google</p>
            </div>
            <div className="fourDivs">
              <p>Web design</p>
            </div>
            <div className="fourDivs">
              <p>UI/UX Design</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
