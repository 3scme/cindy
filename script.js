"use strict";

(() => {
  const slider =
    document.querySelector("#universe-slider");

  const number =
    document.querySelector("#slider-number");

  const response =
    document.querySelector("#slider-response");

  if (!slider || !number || !response) {
    return;
  }

  function update() {
    const value =
      Number(slider.value);

    number.textContent =
      value + "%";

    if (value <= 10) {
      response.textContent =
        "A remarkably lonely universe.";
    } else if (value <= 30) {
      response.textContent =
        "Life is possible, but perhaps difficult.";
    } else if (value <= 60) {
      response.textContent =
        "A respectable amount of uncertainty.";
    } else if (value <= 85) {
      response.textContent =
        "You suspect biology gets more than one attempt.";
    } else {
      response.textContent =
        "Zack would like to subscribe to your newsletter.";
    }
  }

  slider.addEventListener(
    "input",
    update
  );

  update();
})();