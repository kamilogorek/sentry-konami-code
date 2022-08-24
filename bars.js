export function barsSoundwave() {
  const style = document.createElement("style");

  style.innerHTML = `
@keyframes spinChartBars {
    0%{
        transform: translateY(0%);
    }

    50%{
        transform: translateY(-50%);
    }

    100%{
        transform: translateY(0%);
    }
}
`;

  document.body.appendChild(style);

  const charts = document.querySelectorAll(".echarts-for-react");
  const getBars = (chart) =>
    Array.from(chart.querySelectorAll("path")).filter(
      (p) => p.getAttribute("stroke") == null
    );

  charts.forEach((chart, i) => {
    getBars(chart).forEach((b, j) => {
      b.addEventListener(
        "animationend",
        () => {
          b.style.animation = "none";
        },
        { once: true }
      );
      b.style.animation = `spinChartBars 0.4s ease-in-out ${
        i * 0.05 + j * 0.02
      }s 5`;
    });
  });
}
