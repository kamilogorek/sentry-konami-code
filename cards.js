import { shuffleArrayInPlace } from "./utils";

export function cardsReveal() {
  const style = document.createElement("style");

  style.innerHTML = `
@keyframes cardReveal {
    0%{
        transform: rotateY(0deg);
    }

    25%{
        transform: rotateY(180deg);
    }

    75%{
        transform: rotateY(180deg);
    }

    100%{
        transform: rotateY(0deg);
    }
}

@keyframes cardRevealReverse {
    0%{
        transform: rotateY(180deg);
    }

    25%{
        transform: rotateY(0deg);
    }

    75%{
        transform: rotateY(0deg);
    }

    100%{
        transform: rotateY(180deg);
    }
}
`;

  document.body.appendChild(style);

  const projects = Array.from(
    document.querySelectorAll("div[data-test-id]")
  ).filter((project) => project.classList.length === 0);

  shuffleArrayInPlace(projects);

  projects.forEach((project, i) => {
    const card = project.firstElementChild.cloneNode();
    card.innerHTML = `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 66"></defs><path d="M29,2.26a4.67,4.67,0,0,0-8,0L14.42,13.53A32.21,32.21,0,0,1,32.17,40.19H27.55A27.68,27.68,0,0,0,12.09,17.47L6,28a15.92,15.92,0,0,1,9.23,12.17H4.62A.76.76,0,0,1,4,39.06l2.94-5a10.74,10.74,0,0,0-3.36-1.9l-2.91,5a4.54,4.54,0,0,0,1.69,6.24A4.66,4.66,0,0,0,4.62,44H19.15a19.4,19.4,0,0,0-8-17.31l2.31-4A23.87,23.87,0,0,1,23.76,44H36.07a35.88,35.88,0,0,0-16.41-31.8l4.67-8a.77.77,0,0,1,1.05-.27c.53.29,20.29,34.77,20.66,35.17a.76.76,0,0,1-.68,1.13H40.6q.09,1.91,0,3.81h4.78A4.59,4.59,0,0,0,50,39.43a4.49,4.49,0,0,0-.62-2.28Z" transform="translate(11, 11)" fill="#362d59"></path></svg>`;

    card.style.setProperty("position", "absolute");
    card.style.setProperty("top", "0");
    card.style.setProperty("left", "0");
    card.style.setProperty("width", "100%");
    card.style.setProperty("height", "100%");
    card.style.setProperty("backface-visibility", "hidden");
    card.style.setProperty("transform", "rotateY(180deg)");

    const projectPosition = project.style.getPropertyValue("position");
    const projectBackfaceVisibility = project.style.getPropertyValue(
      "backface-visibility"
    );

    project.style.setProperty("position", "relative");
    project.style.setProperty("backface-visibility", "hidden");

    project.addEventListener(
      "animationend",
      () => {
        project.removeChild(card);

        if (projectPosition) {
          project.style.setProperty("position", projectPosition);
        } else {
          project.style.removeProperty("position");
        }

        if (projectBackfaceVisibility) {
          project.style.setProperty(
            "backface-visibility",
            projectBackfaceVisibility
          );
        } else {
          project.style.removeProperty("backface-visibility");
        }

        project.style.removeProperty("animation");
      },

      { once: true }
    );

    project.appendChild(card);

    card.style.setProperty(
      "animation",
      `cardRevealReverse 1s ease ${i * 0.1}s 3`
    );
    project.style.setProperty("animation", `cardReveal 1s ease ${i * 0.1}s 3`);
  });
}
