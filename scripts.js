const keyNum1 = document.getElementById('num1').addEventListener('click', () => displayValue('1'));
const keyNum2 = document.getElementById('num2').addEventListener('click', () => displayValue('2'));
const keyNum3 = document.getElementById('num3').addEventListener('click', () => displayValue('3'));
const keyNum4 = document.getElementById('num4').addEventListener('click', () => displayValue('4'));
const keyNum5 = document.getElementById('num5').addEventListener('click', () => displayValue('5'));
const keyNum6 = document.getElementById('num6').addEventListener('click', () => displayValue('6'));
const keyNum7 = document.getElementById('num7').addEventListener('click', () => displayValue('7'));
const keyNum8 = document.getElementById('num8').addEventListener('click', () => displayValue('8'));
const keyNum9 = document.getElementById('num9').addEventListener('click', () => displayValue('9'));
const keyNum0 = document.getElementById('num0').addEventListener('click', () => displayValue('0'));
const operatorAdd = document.getElementById('op+').addEventListener('click', () => displayValue('+'));
const operatorSub = document.getElementById('op-').addEventListener('click', () => displayValue('-'));
const operatorMul = document.getElementById('op*').addEventListener('click', () => displayValue('*'));
const operatorDiv = document.getElementById('op/').addEventListener('click', () => displayValue('/'));
const operatorEqu = document.getElementById('op=').addEventListener('click', () => displayValue('='));
const clearButton = document.getElementById('opC').addEventListener('click', () => displayValue('clear'));
const inputScreen = document.getElementById('input');

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

function displayValue(displayVal) {
    inputVal += displayVal;
    inputScreen.textContent = inputVal;
    console.log(inputVal);
}

let numA = 0;
let numB = 0;
let operator = '';
let inputVal = '';


console.log("sub", operate('-', 4, 6));
console.log("mul", operate('*', 4, 6));
console.log("div", operate('/', 4, 6));
