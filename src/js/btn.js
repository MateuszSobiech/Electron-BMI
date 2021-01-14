import { calculateScore } from "./calculate.js";

const btn = document.querySelector("#send");
btn.addEventListener("click", () => calculateScore());
