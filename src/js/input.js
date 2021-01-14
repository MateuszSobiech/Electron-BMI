import { calculateScore } from "./calculate.js";

export const input = document.querySelectorAll(".input");
input.forEach((e) =>
  e.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
      calculateScore();
    }
  })
);
