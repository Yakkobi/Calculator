const buttons = document.querySelectorAll(".btn");
const changeOutput = document.querySelector(".screen");

function screenValues() {
  return {
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    0: 0,

    clear: "clear",
    back: "backspace",
    "+": "add",
    "-": "subtract",
    "*": "multiply",
    "%": "divide",
    "=": "equal",
  };
}

buttons.forEach((button) => {
  button.addEventListener("click", function (i) {
    const rawPressedValue = i.target.dataset.value || i.target.dataset.action;

    const mapping = screenValues();

    const mappedValue = mapping[rawPressedValue];

    screenValues.firstValue = mappedValue;

    if (screenValues.firstValue !== undefined) {
      changeOutput.textContent = screenValues.firstValue;
    }

    console.log(screenValues.firstValue);
  });
});
