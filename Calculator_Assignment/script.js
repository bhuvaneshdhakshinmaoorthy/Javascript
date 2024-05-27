let display = document.querySelector('.display');
let currentInput = '';

function appendNumber(num) {
    currentInput += num;
    display.textContent = currentInput;
}

function appendOperator(operator) {
    currentInput += operator;
    display.textContent = currentInput;
}

function calculate() {
    try {
        let result = eval(currentInput);
        display.textContent = result;
        currentInput = result.toString();
    } catch (error) {
        display.textContent = 'Error';
        currentInput = '';
    }
}

function clearDisplay() {
    currentInput = '';
    display.textContent = '0';
}