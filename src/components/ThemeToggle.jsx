import React from "react";

import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

import "../css/ThemeToggle.css";

const ThemeToggle = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="theme-container">
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === "dark" ? (
          <FaSun size={20} color="#FFD700" />
        ) : (
          <FaMoon size={20} color="#4A5568" />
        )}
      </button>
    </div>
  );
};


export default ThemeToggle;
