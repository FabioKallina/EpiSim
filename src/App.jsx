import { useState, useEffect } from "react";

import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Inputs from "./components/Inputs.jsx";
import SIRDChart from "./components/SIRDChart.jsx";
import SIRDInfo from "./components/SIRDInfo.jsx";
import Footer from "./components/Footer.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import DataCounter from "./components/DataCounter.jsx";

import { simulateSIRD } from "./utils/simulateSIRD.js";

import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  const [data, setData] = useState([]);
  const [dataFull, setDataFull] = useState([]);
  const [population, setPopulation] = useState(1000);
  const [initialInfected, setInitialInfected] = useState(1);
  const [beta, setBeta] = useState(0.4);
  const [gamma, setGamma] = useState(0.2);
  const [delta, setDelta] = useState(0.02);
  const [days, setDays] = useState(100);
  const [allowVariant, setAllowVariant] = useState(false);
  const [allowVaccine, setAllowVaccine] = useState(false);

  const [speed, setSpeed] = useState(0);
  const [running, setRunning] = useState(false);

  const runSimulation = () => {
    const results = simulateSIRD(
      population,
      initialInfected,
      beta,
      gamma,
      delta,
      days,
      allowVariant,
      allowVaccine
    );
    setDataFull(results);
    setData([]);
    setRunning(true);
  };

  useEffect(() => {
    const initialResults = simulateSIRD(
      population,
      initialInfected,
      beta,
      gamma,
      delta,
      days,
      allowVariant,
      allowVaccine
    );
    setData(initialResults);
  }, []); //empty dependency to so it loads only on mount

  useEffect(() => {
    if (!running || dataFull.length === 0) return;

    if (speed === 0) {
      setData(dataFull);
      setRunning(false);
      return;
    }

    let dayIndex = 0;
    const interval = setInterval(() => {
      if (dayIndex < dataFull.length) {
        setData((prev) => [...prev, dataFull[dayIndex]]);
        dayIndex++;
      } else {
        clearInterval(interval);
        setRunning(false);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [dataFull, speed]);

  return (
    <>
      <div className="app-container">
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <Hero />

        <div id="simulator">
          <Inputs
            population={population}
            setPopulation={setPopulation}
            initialInfected={initialInfected}
            setInitialInfected={setInitialInfected}
            beta={beta}
            setBeta={setBeta}
            gamma={gamma}
            setGamma={setGamma}
            days={days}
            setDays={setDays}
            runSimulation={runSimulation}
            delta={delta}
            setDelta={setDelta}
            speed={speed}
            setSpeed={setSpeed}
            running={running}
            setRunning={setRunning}
            allowVaccine={allowVaccine}
            setAllowVaccine={setAllowVaccine}
            allowVariant={allowVariant}
            setAllowVariant={setAllowVariant}
          />
          <div id="simulation">
            <SIRDChart data={data} theme={theme} />
          </div>
          <DataCounter data={data} theme={theme} />
          <SIRDInfo />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
