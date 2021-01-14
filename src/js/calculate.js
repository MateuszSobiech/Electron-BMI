import { bmi } from "./bmi.js";

export const calculateScore = () => {
  const w = document.querySelector(".weight").value;
  const h = document.querySelector(".height").value;
  const result = document.querySelector(".result");

  let score = w / Math.pow(h / 100, 2);

  result.className = "result";
  result.classList.add(bmi(score));
  result.innerHTML = score.toFixed(2);
};
