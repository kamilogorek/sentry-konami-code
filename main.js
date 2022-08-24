import { registerKonamiCode } from "./konami";
import { createHiringBubble } from "./hiring";

import { revolverSpin } from "./spin";
import { cardsReveal } from "./cards";
import { barsSoundwave } from "./bars";

const locationMatches = (target) => {
  const [_leadingSlash, _orgRoute, _orgName, locationName] =
    window.location.pathname.split("/");
  return locationName === target;
};

registerKonamiCode(() => {
  if (locationMatches("releases")) {
    revolverSpin();
  }

  if (locationMatches("projects")) {
    if (Math.random() >= 0.5) {
      cardsReveal();
    } else {
      barsSoundwave();
    }
  }

  if (locationMatches("issues")) {
    barsSoundwave();
  }

  createHiringBubble();
});
