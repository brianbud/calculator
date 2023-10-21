const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".clear");

let firstNum;
let operator;
let secondNum;

numbers.forEach((num) => {
  num.addEventListener("click", (e) => {
    console.log(e.target.value);
    display.textContent += e.target.value;
  });
});

operators.forEach((op) => {
  op.addEventListener("click", (e) => {
    console.log(e.target.value);
    display.textContent += e.target.value;
  });
});

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

function operate(operator, num1, num2) {
  firstNum = num1;
  secondNum = num2;

  switch (operator) {
    case "+":
      return add(firstNum, secondNum);
      break;
    case "-":
      return subtract(firstNum, secondNum);
      break;
    case "*":
      return multiply(firstNum, secondNum);
      break;
    case "/":
      return divide(firstNum, secondNum);
    default:
      return `something wrong with the operator: ${operator}`;
  }
}

console.log(operate("sdf", 2, 3));
