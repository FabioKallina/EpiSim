import React from "react";

import "../css/Hero.css";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="title-container">
          <h1>
            <span className="highlight">Epi</span>
          </h1>
          <h1>Sim</h1>
          <h3>The Epidemiology Simulator</h3>
        </div>
        <div className="paragraph-container">
          <ul>
            <li>
              Infectious diseases have shaped human history, from seasonal
              outbreaks to global pandemics, making it critical to understand
              how they spread.
            </li>
            <li>
              Mathematical models like the SIRD
              (Susceptible–Infected–Recovered–Deaths) framework allow us to
              simulate the dynamics of epidemics, providing insights into
              infection rates, recovery, and the effects of interventions.
            </li>
            <li>
              By experimenting with parameters such as population size,
              infection probability, vaccines, and mortality/recovery rates,
              users can see how these factors influence the course of an
              outbreak.
            </li>
            <li>
              This hands-on approach highlights both the complexity of disease
              spread and the importance of public health planning, vaccination
              strategies, and timely responses.
            </li>
          </ul>

          <button
            className="hero-btn"
            onClick={() => {
              const simSection = document.getElementById("simulator");
              simSection.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Try it Out
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
