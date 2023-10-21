const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".clear");
const pointBtn = document.querySelector(".point");
const equalsBtn = document.querySelector(".equals");

let firstNum;
let operator;
let secondNum;

//Event Listeners
numbers.forEach((num) => {
  num.addEventListener("click", (e) => {
    display.textContent += e.target.value;
  });
});

operators.forEach((op) => {
  op.addEventListener("click", (e) => {
    firstNum = display.textContent;
    operator = e.target.value;
    display.textContent = "";
  });
});

equalsBtn.addEventListener("click", (e) => {
  secondNum = display.textContent;
  display.textContent = operate(operator, firstNum, secondNum);
});

clearBtn.addEventListener("click", () => {
  display.textContent = "";
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
  return a / b;
};

function operate(operator, firstNum, secondNum) {
  let a = Number(firstNum);
  let b = Number(secondNum);

  switch (operator) {
    case "+":
      return add(a, b);
      break;
    case "-":
      return subtract(a, b);
      break;
    case "*":
      return multiply(a, b);
      break;
    case "/":
      return divide(a, b);
    default:
      return `something wrong with the operator: ${operator}`;
  }
}
