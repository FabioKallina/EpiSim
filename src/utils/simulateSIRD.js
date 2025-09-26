//SIR Simulation Function
export function simulateSIRD(
  population,
  initialInfected,
  beta,
  gamma,
  delta,
  days,
  allowVariant = false,
  allowVaccine = false,
  variantMultiplier = 1.5, // 50% more infectious
  vaccinationRate = 0.01, // max 1% of susceptible per day
  deathDelay = 7 // deaths occur 7 days after infection
) {
  let S = population - initialInfected;
  let I = initialInfected;
  let R = 0;
  let D = 0;

  const variantStartDay = 20;
  const vaccineStartDay = 30;

  const pendingDeaths = Array(days + deathDelay + 1).fill(0); // deaths delayed
  let res = [];

  for (let day = 0; day <= days; day++) {
    // Effective beta if variant exists
    const effectiveBeta =
      allowVariant && day >= variantStartDay ? beta * variantMultiplier : beta;

    // New infections
    const newInfections = (effectiveBeta * S * I) / population;

    // New recoveries
    const newRecovered = gamma * I;

    // Schedule deaths
    pendingDeaths[day + deathDelay] += delta * newInfections;

    // Apply vaccination gradually
    if (allowVaccine && day >= vaccineStartDay) {
      const dailyVaccinated = Math.min(vaccinationRate * S, S);
      S -= dailyVaccinated;
      R += dailyVaccinated;
    }

    // Update counts
    S -= newInfections;
    I += newInfections - newRecovered;
    R += newRecovered;
    D += pendingDeaths[day]; // apply delayed deaths

    // Prevent negatives
    S = Math.max(S, 0);
    I = Math.max(I, 0);
    R = Math.max(R, 0);
    D = Math.max(D, 0);

    // Save daily results
    res.push({
      day,
      S: Math.round(S),
      I: Math.round(I),
      R: Math.round(R),
      D: Math.round(D),
    });
  }

  return res;
}
