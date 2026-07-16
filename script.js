const buttons = document.querySelectorAll(".btn");
const changeOutput = document.querySelector(".screen");

function changeScreenState() {
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

    CE: "clear",
    "<-": "backspace",
    "+": "add",
    "-": "subtract",
    "*": "multiply",
    "%": "divide",
    "=": "equal",
  };
}

buttons.forEach((button) => {
  button.addEventListener("click", function (i) {
    screenState.firstValue = i.target.dataset.value;
    if (screenState.firstValue !== undefined) {
      changeOutput.textContent = screenState.firstValue;
    }

    console.log(screenState.firstValue);
  });
});
