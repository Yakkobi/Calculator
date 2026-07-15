const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", (i) => {
    console.log(i.target.dataset.value);
  });
});
