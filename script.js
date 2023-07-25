let currentNumber = '0';
let previousNumber = '';
let operator = null;
let shouldResetScreen = false;

const display = document.getElementById('display');

function updateDisplay() {
    display.textContent = currentNumber;
}

function clearDisplay() {
    currentNumber = '0';
    previousNumber = '';
    operator = null;
    shouldResetScreen = false;
    updateDisplay();
}

function appendNumber(number) {
    if (currentNumber === '0' || shouldResetScreen) {
        currentNumber = number;
        shouldResetScreen = false;
    } else {
        currentNumber += number;
    }
    updateDisplay();
}

function appendOperator(op) {
    if (operator !== null) {
        calculateResult();
    }
    previousNumber = currentNumber;
    operator = op;
    shouldResetScreen = true;
    updateDisplayWithOperator(op);
}

function appendDecimal() {
    if (!currentNumber.includes('.')) {
        currentNumber += '.';
    }
    updateDisplay();
}

function calculateResult() {
    const prev = parseFloat(previousNumber);
    const current = parseFloat(currentNumber);
    if (operator === '+') {
        currentNumber = (prev + current).toString();
    } else if (operator === '-') {
        currentNumber = (prev - current).toString();
    } else if (operator === '*') {
        currentNumber = (prev * current).toString();
    } else if (operator === '/') {
        currentNumber = (prev / current).toString();
    }
    operator = null;
    shouldResetScreen = true;
    updateDisplay();
}

function updateDisplayWithOperator(op) {
    const symbolMap = {
        '+': '+',
        '-': '-',
        '*': '×',
        '/': '÷'
    };
    if (previousNumber && operator) {
        display.textContent = `${previousNumber} ${symbolMap[op]} `;
    } else {
        display.textContent = currentNumber;
    }
}

// Clear the display on page load
clearDisplay();
