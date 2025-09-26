import React from "react";

import "../css/SIRDInfo.css";

const SIRDInfo = () => {
  return (
    <div className="info-container">
      <h2>About the SIRD Model</h2>
      <p>
        The <strong>SIRD</strong> model is a compartmental model used in
        epidemiology to simulate how a disease spreads over time.
      </p>
      <ul>
        <li>
          <strong>S (Susceptible):</strong> Individuals who can get infected.
        </li>
        <li>
          <strong>I (Infected):</strong> Individuals currently infected and able
          to transmit the disease.
        </li>
        <li>
          <strong>R (Recovered):</strong> Individuals who have recovered and are
          now immune.
        </li>
        <li>
          <strong>D (Deaths):</strong> Individuals who have died due to the
          disease.
        </li>
      </ul>
      <p>
        <strong>Parameters:</strong>
      </p>
      <ul>
        <li>
          <strong>β (Infection rate):</strong> How quickly the disease spreads.
        </li>
        <li>
          <strong>γ (Recovery rate):</strong> How quickly infected individuals
          recover.
        </li>
        <li>
          <strong>δ (Mortality rate):</strong> Probability of death for infected
          individuals.
        </li>
      </ul>
      <p>
        You can also experiment with <strong>variants</strong> (increase β) and{" "}
        <strong>vaccinations</strong> (move individuals from S to R) to see how
        they affect the outbreak.
      </p>
    </div>
  );
};

export default SIRDInfo;
