document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");

  // Function to handle button click
  function handleClick(event) {
    const buttonValue = event.target.innerText;
    switch (buttonValue) {
      case "C":
        clearDisplay();
        break;
      case "DEL":
        deleteLastChar();
        break;
      case "=":
        calculate();
        break;
      default:
        appendToDisplay(buttonValue);
    }
    if (display.value == "") {
      display.value = "0";
    }
  }

  // Function to append value to display
  function appendToDisplay(value) {
    if (display.value == "0") {
      display.value = "";
      display.value += value;
    } else {
      display.value += value;
    }
  }

  // Function to clear display
  function clearDisplay() {
    display.value = "";
  }

  // Function to delete last character
  function deleteLastChar() {
    display.value = display.value.slice(0, -1);
  }

  // Function to calculate result
  function calculate() {
    try {
      const result = eval(display.value);
      display.value = result;
    } catch (error) {
      display.value = "Error";
    }
  }

  // Add event listeners to buttons
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", handleClick);
  });
});


/* 
Cambia C por DEL
function hasValue() {
    let clearButton = document.querySelector(".clear");
    if (display.value != "") {
      clearButton.textContent = "DEL";
    } else {
      clearButton.textContent = "C";
    }
  }
*/
