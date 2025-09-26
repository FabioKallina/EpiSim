import React from "react";

import "../css/Inputs.css";

const Inputs = ({
  population,
  setPopulation,
  initialInfected,
  setInitialInfected,
  beta,
  setBeta,
  gamma,
  setGamma,
  days,
  setDays,
  delta,
  setDelta,
  runSimulation,
  speed,
  setSpeed,
  running,
  allowVaccine,
  setAllowVaccine,
  allowVariant,
  setAllowVariant,
}) => {
  return (
    <div className="input-section">
      <form className="input-form">
        <div className="input-content">
          <div className="input-container">
            <h3 className="label">Population Size</h3>
            <input
              type="number"
              className="pop-input"
              placeholder="Initial Population..."
              value={population}
              onChange={(e) =>
                setPopulation(
                  e.target.value === "" ? "" : Number(e.target.value)
                )
              }
            />
          </div>

          <div className="input-container">
            <h3 className="label">Infection Rate (β)</h3>

            <input
              type="number"
              step="0.01"
              className="pop-input"
              placeholder="Infection Rate..."
              value={beta}
              onChange={(e) => setBeta(Number(e.target.value))}
            />
          </div>

          <div className="input-container">
            <h3 className="label">Recovery Rate (γ)</h3>

            <input
              type="number"
              step="0.01"
              className="pop-input"
              placeholder="Recovery Rate..."
              value={gamma}
              onChange={(e) => setGamma(Number(e.target.value))}
            />
          </div>

          <div className="input-container">
            <h3 className="label">Mortality Rate (δ)</h3>

            <input
              type="number"
              step="0.01"
              className="pop-input"
              placeholder="Mortality Rate..."
              value={delta}
              onChange={(e) => setDelta(Number(e.target.value))}
            />
          </div>

          <div className="input-container">
            <h3 className="label">Initially Infected</h3>

            <input
              type="number"
              className="pop-input"
              placeholder="e.g. 1"
              value={initialInfected}
              onChange={(e) =>
                setInitialInfected(
                  e.target.value === "" ? "" : Number(e.target.value)
                )
              }
            />
          </div>

          <div className="input-container">
            <h3 className="label">Days</h3>

            <input
              type="number"
              className="pop-input"
              placeholder="Duration..."
              value={days}
              onChange={(e) =>
                setDays(e.target.value === "" ? "" : Number(e.target.value))
              }
            />
          </div>

          <div className="allow-container">
            <h3 className="label">Allow Variant</h3>

            <input
              type="checkbox"
              className="pop-input"
              checked={allowVariant}
              onChange={(e) => setAllowVariant(e.target.checked)}
            />
            <h3 className="label">Allow Vaccine</h3>

            <input
              type="checkbox"
              className="pop-input"
              checked={allowVaccine}
              onChange={(e) => setAllowVaccine(e.target.checked)}
            />
          </div>
        </div>
        <div className="simulate-btn-container">
          <button
            className="simulate-btn"
            type="button"
            onClick={() => {
              runSimulation();
              const simSection = document.getElementById("simulation");
              if ( simSection ) {
                const y = simSection.getBoundingClientRect().top + window.scrollY - 75;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
          >
            Simulate
          </button>
        </div>
        <div className="speed-container">
          <select
            value={speed}
            onChange={(e) => setSpeed(Number(e.target.value))}
            disabled={running}
          >
            <option value={150}>Fast</option>
            <option value={300}>Medium</option>
            <option value={750}>Slow</option>
            <option value={0}>Inst.</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Inputs;
