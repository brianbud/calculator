const display = document.querySelector("#display");
const miniDisplay = document.querySelector("#mini-display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const undoBtn = document.querySelector(".undo");
const clearBtn = document.querySelector(".clear");
const clearEntryBtn = document.querySelector(".clearEntry");
const pointBtn = document.querySelector(".point");
const equalsBtn = document.querySelector(".equals");

let firstNum;
let operator;
let secondNum;
let currentValue = "";

function updateDisplay() {
  display.textContent = currentValue;
}

//Event Listeners
numbers.forEach((num) => {
  num.addEventListener("click", (e) => {
    currentValue += e.target.value;
    updateDisplay();
  });
});

operators.forEach((op) => {
  op.addEventListener("click", (e) => {
    firstNum = currentValue;
    operator = e.target.value;
    miniDisplay.textContent = `${firstNum} ${operator}`;
    currentValue = "";
    updateDisplay();
  });
});

pointBtn.addEventListener("click", (e) => {
  if (display.textContent === "") {
    currentValue = "0" + e.target.value;
  } else if (display.textContent.includes(e.target.value)) {
    return;
  } else {
    currentValue += e.target.value;
  }
  updateDisplay();
});

equalsBtn.addEventListener("click", (e) => {
  if (firstNum == "" || operator == "" || currentValue == "") {
    return;
  } else {
    secondNum = display.textContent;
    miniDisplay.textContent = `${firstNum} ${operator} ${secondNum} =`;
    currentValue = operate(operator, firstNum, secondNum);
    updateDisplay();
  }
});

clearBtn.addEventListener("click", () => {
  currentValue = "";
  updateDisplay();
  miniDisplay.textContent = "";
});

clearEntryBtn.addEventListener("click", () => {
  currentValue = "";
  updateDisplay();
});

undoBtn.addEventListener("click", () => {
  currentValue = currentValue.slice(0, -1);
  updateDisplay();
});

//Math operators
let add = (a, b) => {
  return a + b;
};

let subtract = (a, b) => {
  return a - b;
};

let multiply = (a, b) => {
  return a * b;
};

let divide = (a, b) => {
  if (b == 0) {
    alert("You can't divide by 0");
    return;
  } else {
    return a / b;
  }
};

function operate(operator, firstNum, secondNum) {
  let a = Number(firstNum);
  let b = Number(secondNum);

  switch (operator) {
    case "+":
      return add(a, b).toFixed(2);
      break;
    case "-":
      return subtract(a, b).toFixed(2);
      break;
    case "*":
      return multiply(a, b).toFixed(2);
      break;
    case "/":
      return divide(a, b).toFixed(2);
    default:
      return `something wrong with the operator: ${operator}`;
  }
}
