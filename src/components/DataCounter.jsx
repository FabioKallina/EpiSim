import React from "react";
import "../css/DataCounter.css";

const colors = {
  susceptible: "#1E88E5",
  infected: "#4CAF50",
  recovered: "#f37200",
  deaths: "#E53935",
};

const DataCounter = ({ data }) => {
  const latestDay = data?.[data.length - 1];

  if (!latestDay) {
    return <div className="counters">No data yet</div>;
  }

  return (
    <div className="counters">
      <div className="counter-susceptible">
        <span className="label">Susceptible: </span>
        <span className="value">{latestDay.S}</span>
      </div>
      <div className="counter-infected">
        <span className="label">Infected: </span>
        <span className="value">{latestDay.I}</span>
      </div>
      <div className="counter-recovered">
        <span className="label">Recovered: </span>
        <span className="value">{latestDay.R}</span>
      </div>
      <div className="counter-deaths">
        <span className="label">Deaths: </span>
        <span className="value">{latestDay.D}</span>
      </div>
    </div>
  );
};

export default DataCounter;
