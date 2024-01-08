let inputField = "";
let buttons = document.querySelectorAll(".btn");
Array.from(buttons).forEach((buttons) => {
  buttons.addEventListener("click", (event) => {
    if (event.target.innerHTML == "=") {
      inputField = eval(inputField);
      document.querySelector("input").value = inputField;
    } else if (event.target.innerHTML == "C") {
      inputField = "";
      document.querySelector("input").value = inputField;
    } else {
      inputField = inputField + event.target.innerHTML;
      document.querySelector("input").value = inputField;
    }
    // console.log(event.target)
  });
});
