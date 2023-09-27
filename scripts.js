const numButtons = document.querySelectorAll(".num-button");
const operatorButtons = document.querySelectorAll(".op-button");
const display = document.querySelector(".display");
const clearButton = document.querySelector(".clear-button");
const equalsButton = document.querySelector(".equals-button");
const deleteButton = document.querySelector(".delete-button");
const minusButton = document.getElementById("minus-button");

let numberA = "";
let numberB = "";
let chainedNumber = "";
let clickedNumber = "";
let operator = "";
display.innerText = 0;
let resultValue = "";

document.getElementById("minus-button").disabled = true;


function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(op, numA, numB) {
    if (op === "/" && numB === 0) return "ERROR";
    if (op === "+") return add(numA, numB);
    if (op === "-") return subtract(numA, numB);
    if (op === "*") return multiply(numA, numB);
    if (op === "/") return divide(numA, numB);
}

numButtons.forEach((button) => {
    button.addEventListener("click", numberDisplay);
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", operatorCalculation);
});

equalsButton.addEventListener("click", equalsCalculation);
clearButton.addEventListener("click", clearDisplay);
deleteButton.addEventListener("click", deleteNumber);
minusButton.addEventListener("click", () => {
    if (operator == "" && numberB === "") {
        numberA = -numberA;
        display.innerText = -display.innerText;
    } else if (operator !== "") {
        numberB = -numberB;
        display.innerText = -display.innerText;
    }
});


function numberDisplay(event) {
    if (display.innerText.length > 9) {
        document.getElementsByClassName("num-button").disabled = true;
    }
    if (event.target.value === ".") {
        document.getElementById("decimal-button").disabled = true;
    }
    clickedNumber = event.target.value
    if (operator === "" && numberB === "") {
        numberA += clickedNumber;
        display.innerText = numberA;
        document.getElementById("minus-button").disabled = false;
    } else if (operator !== "") {
        numberB += clickedNumber;
        display.innerText = numberB;
        document.getElementById("minus-button").disabled = false;
    }
}

function operatorCalculation(event) {
    document.getElementById("decimal-button").disabled = false;
    document.getElementById("minus-button").disabled = false;
    chainedNumber = operate(operator, parseFloat(numberA), parseFloat(numberB));
    if (operator === "") {
        operator = event.target.value;
        clickedNumber = "";
        document.getElementById("minus-button").disabled = true;
    } else {
        if (chainedNumber !== "ERROR") {
            operator = event.target.value;
            numberA = +chainedNumber.toFixed(2);
            display.innerText = numberA;
            numberB = "";
            document.getElementById("minus-button").disabled = true;
        } else {
            display.innerText = chainedNumber;
        }
    }
}

function equalsCalculation() {
    document.getElementById("decimal-button").disabled = false;
    document.getElementById("minus-button").disabled = false;
    if (numberA !== "" && numberB === "") {
        display.innerText = numberA;
        resultValue = numberA;
        operator = "";     
    } else {
        resultValue = operate(operator, parseFloat(numberA), parseFloat(numberB));
        if (resultValue !== "ERROR") {
            display.innerText = +resultValue.toFixed(2);
            numberA = +resultValue.toFixed(2);
            numberB = "";
            operator = "";
            document.getElementById("minus-button").disabled = true;
        } else {
            display.innerText = resultValue;
        }
    }
}

function clearDisplay() {
    display.innerText = 0;
    numberA = "";
    numberB = "";
    operator = "";
    document.getElementById("decimal-button").disabled = false;
    document.getElementById("minus-button").disabled = true;
}

function deleteNumber() {
    if (operator === "" && numberB === "") {
        let newNumber = numberA.slice(0, -1);
        numberA = newNumber;
        display.innerText = numberA;
    } else if (operator !== "") {
        let newNumber = numberB.slice(0, -1);
        numberB = newNumber;
        display.innerText = numberB;
    }
}