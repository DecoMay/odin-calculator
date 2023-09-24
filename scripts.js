function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    if (operator === '+') return add(num1, num2);
    if (operator === '-') return subtract(num1, num2);
    if (operator === '*') return multiply(num1, num2);
    if (operator === '/') return divide(num1, num2);
}

let numA = 0;
let numB = 0;
let operator = '';

console.log("add", operate('+', 4, 6));
console.log("sub", operate('-', 4, 6));
console.log("mul", operate('*', 4, 6));
console.log("div", operate('/', 4, 6));