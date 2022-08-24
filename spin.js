export function revolverSpin() {
  const style = document.createElement("style");

  style.innerHTML = `
@keyframes revolver {
    0%{
        transform: rotateX(0deg);
    }

    100%{
        transform: rotateX(360deg);
    }
}
`;

  document.body.appendChild(style);

  const releases = Array.from(
    document.querySelectorAll('[data-test-id="release-panel"]')
  );

  releases.forEach((r, i) => {
    r.addEventListener(
      "animationend",
      () => {
        r.style.animation = "none";
      },
      { once: true }
    );
    r.style.animation = `revolver 0.25s ease-out ${i * 0.15}s 6`;
  });
}
