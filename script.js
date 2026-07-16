const buttons = document.querySelectorAll(".btn");
const changeOutput = document.querySelector(".screen");
const screenState = {
  firstValue: null,
  secondValue: null,
  thirdValue: null,
};

buttons.forEach((button) => {
  button.addEventListener("click", function (i) {
    screenState.firstValue = i.target.dataset.value;
    if (screenState.firstValue !== undefined) {
      changeOutput.textContent = screenState.firstValue;
    }

    console.log(screenState.firstValue);
  });
});
