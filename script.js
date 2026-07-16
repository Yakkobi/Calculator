const btn = document.querySelectorAll(".btn");
const screen = document.querySelector(".screen");
const returnCalcValue = calculator();

let currentInput = "";
let previousValue = null;
let operator = null;

/* The "calculator" function, also treated as an object because functions in JS can do that.. */
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

/* Creates a listener that passes the HTML value to the "rawPressedValue" variable */
btn.forEach((buttonValue) => {
  buttonValue.addEventListener("click", function (buttonPressed) {
    const rawPressedValue =
      buttonPressed.target.dataset.value || buttonPressed.target.dataset.action;

    /* Returns the value from each button press to the "mappedValue" variable */
    const mappedValue = returnCalcValue[rawPressedValue];

    /* Adds the "firstValue" property to the calculator function */
    calculator.firstValue = mappedValue;

    /* If the calculator.firstValue property in NOT undefined, it changes
the screen to match the firstValue property via the textContent DOM property */
    if (calculator.firstValue !== undefined) {
      screen.textContent = calculator.firstValue;
    }

    console.log(calculator.firstValue);
  });
});

/* The "operate" function used for the actual calculation method */
function operate(operator, a, b) {
  if (operator === "add") {
    return a + b;
  } else if (operator === "subtract") {
    return a - b;
  } else if (operator === "multiply") {
    return a * b;
  } else if (operator === "divide") {
    return a / b;
  }
}
