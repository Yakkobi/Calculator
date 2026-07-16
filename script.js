const buttons = document.querySelectorAll(".btn");
const screen = {
  firstValue: null,
  secondValue: null,
  thirdValue: null,
};

/* returns the value for the button pressed (the values are in the HTML file) */
buttons.forEach((button) => {
  button.addEventListener("click", function (i) {
    screen.firstValue = i.target.dataset.value;
    console.log(screen.firstValue);
  });
});
