
import React from 'react'

import { useState, useEffect } from 'react';

import {
  LineChart,
  YAxis,
  XAxis,
  Line,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


const SIRDChart = ({ data, theme }) => {
  const [colors, setColors] = useState({
    sColor: '',
    iColor: '',
    rColor: '',
    dColor: '',
    strokeColor: '',
  });

  useEffect(() => {
    const styles = getComputedStyle(document.documentElement);
    setColors({
      sColor: styles.getPropertyValue("--s-line").trim(),
      iColor: styles.getPropertyValue("--i-line").trim(),
      rColor: styles.getPropertyValue("--r-line").trim(),
      dColor: styles.getPropertyValue("--d-line").trim(),
      strokeColor: styles.getPropertyValue("--stroke-line").trim(),
    });
  }, [theme, data]);

  return (
    <ResponsiveContainer width="100%" height={600}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke={colors.strokeColor} />
        <YAxis />
        <XAxis dataKey="day" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="S" stroke={colors.sColor} strokeWidth={2} name="Susceptible" dot={false} isAnimationActive={true} animationDuration={0} animationEasing="linear" />
        <Line type="monotone" dataKey="I" stroke={colors.iColor} strokeWidth={2} name="Infected" dot={false} isAnimationActive={true} animationDuration={0} animationEasing="linear" />
        <Line type="monotone" dataKey="R" stroke={colors.rColor} strokeWidth={2} name="Recovered" dot={false} isAnimationActive={true} animationDuration={0} animationEasing="linear" />
        <Line type="monotone" dataKey="D" stroke={colors.dColor} strokeWidth={2} name="Deaths" dot={false} isAnimationActive={true} animationDuration={0} animationEasing="linear" />
      </LineChart>
    </ResponsiveContainer>
  );
};


export default SIRDChart