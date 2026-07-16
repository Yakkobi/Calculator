const buttons = document.querySelectorAll(".btn");
let selectedButton = null;

/* returns the value for the button pressed (the values are in the HTML file) */
buttons.forEach((button) => {
  button.addEventListener("click", function (i) {
    selectedButton = i.target.dataset.value;
    console.log(selectedButton);
  });
});
