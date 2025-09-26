
# 🦠 EpiSim

**EpiSim** is an interactive web application that simulates the spread of infectious diseases using the SIRD model (Susceptible, Infected, Recovered, Deaths).

By adjusting parameters such as population size, infection rate (β), recovery rate (γ), mortality rate (δ), and duration, users can explore how outbreaks evolve and visualize the dynamics in real-time with responsive charts powered by Recharts.

---

## 🧠 Project Overview

Infectious diseases have shaped human history. Understanding how they spread is key to planning interventions like vaccination, treatment, and containment.

EpiSim provides a hands-on way to experiment with outbreak scenarios. With adjustable parameters and smooth visualizations, users gain intuition about epidemic curves, infection peaks, and long-term outcomes.

---

## ✨ Features

### 🎛 Adjustable Parameters
- Population Size
- Initial Infected Count
- Infection rate (β)
- Recovery rate (γ)
- Mortality rate (δ)
- Duration (days)
- Options for variants and vaccines

### 📊 Dynamic Visualizations with Recharts
- Line chart of susceptible, infected, recovered, and deaths over time
- Animated simulation speed control (instant → slow)
- Real-time counter display of categories

### 🌗 Light/Dark Theme Support
- Colors and chart styles adapt seamlessly

### 🖱 Interactive Controls
- Run simulations on demand
- Choose simulation playback speed
- Auto-scroll to results

---

## 🛠 Installation Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/episim.git
cd episim
```

### 2. **Backend Set Up**
```bash
npm install
```

### Start the Frontend Development Server
```bash
npm run dev
```

### Open in Browser
```bash
http://localhost:5173
```

---

## ▶️ Usage

1. Set your desired parameters (population, infection rate, etc.) in the input form.
2. Click **Simulate** to run the SIRD model.
3. Watch the outbreak evolve on the line graph and track live values in the **counters**.
4. Adjust parameters and rerun to compare scenarios (e.g., high vs low infection rate, with or without vaccines).

---

## 🧰 Technologies Used

- **React** (Vite) - UI framework.
- **Recharts** - Data visualization (charts & graphs).
- **CSS (custom + variables)** - Styling and theming
- **JavaScript** - Simulation logic (SIRD model)
- **Recharts** for data visualization
- **JWT Decode**
- **CSS Modules**

---

## 🚀 Deployment

### Hosted On

- **Frontend**: [Render / Netlify / Vercel] (choose one or all)
- **Backend**: [Render](https://render.com)

## 📈 Future Improvements

- Add SEIR model support (Exposed compartment) 
- Simulate multiple vaccine strategies  
- Add real-world outbreak datasets for comparison  
- Export simulation results (CSV, PDF)
- Improved responsive design and mobile layout 


## 👤 Author

**Fabio Kallina de Paula**

- 🔗 [LinkedIn](https://www.linkedin.com/in/fabiokallina/)
- 🌐 [Portfolio](https://fabiokallina.github.io/)
- 📧 fabiokdp8@gmail.com.com

Feel free to connect or reach out if you're interested in collaborating, have feedback, or want to learn more about this project!

---

## 🏁 Quick Start Summary

```bash
git clone https://FabioKallina/episim.git
cd episim
npm install
npm run dev
```

---
