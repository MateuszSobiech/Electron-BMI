export const bmi = (score) => {
  if (score < 24.9) return "green";
  else if (score < 29.9) return "aqua";
  else if (score < 34.9) return "purple";
  else if (score < 39.9) return "orange";
  else if (score < 49.9 || score > 49.9) return "red";
  else alert("U are propably dead.");
};
