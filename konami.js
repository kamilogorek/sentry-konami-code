import { arrayStartsWith } from "./utils";

const targetSeq = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "KeyB",
  "KeyA",
];

export function registerKonamiCode(cb) {
  let currentSeq = [];

  window.addEventListener("keydown", (e) => {
    currentSeq.push(e.code);

    if (arrayStartsWith(targetSeq, currentSeq)) {
      if (currentSeq.length === targetSeq.length) {
        cb();
      }
    } else {
      currentSeq = [e.code];
    }
  });
}
