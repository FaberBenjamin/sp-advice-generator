"use strict";
var _a;
const adviceText = document.getElementById("advice_text");
const adviceNumber = document.getElementById("advice_number");
const buttun = (_a = document.getElementById("button")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    rollDice();
});
function rollDice() {
    fetch('https://api.adviceslip.com/advice')
        .then((response) => response.json())
        .then((data) => {
        adviceText.innerHTML = (`"` + data.slip.advice + `"`);
        adviceNumber.innerHTML = ("ADVICE # " + data.slip.id);
    });
}
