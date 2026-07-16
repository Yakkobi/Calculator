const btn = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");

function calculator() {
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

btn.forEach((buttonValue) => {
  buttonValue.addEventListener("click", function (buttonPressed) {
    const rawPressedValue =
      buttonPressed.target.dataset.value || buttonPressed.target.dataset.action;

    const mapping = calculator();

    const mappedValue = mapping[rawPressedValue];

    calculator.firstValue = mappedValue;

    if (calculator.firstValue !== undefined) {
      screen.textContent = calculator.firstValue;
    }

    console.log(calculator.firstValue);
  });
});
