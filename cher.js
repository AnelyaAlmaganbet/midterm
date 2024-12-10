const calculator = document.getElementById('calculator');
const resultField = document.getElementById('result');
const historyList = document.getElementById('history-list');


let currentInput = '';
let firstOperand = null;
let operator = null;

calculator.addEventListener('click', (event) => {
  const button = event.target;
  const action = button.dataset.action;
  const value = button.value;

  if (!action) {
    handleNumber(value);
  } else if (action === 'operator') {
    handleOperator(value);
  } else if (action === 'clear') {
    clearCalculator();
  } else if (action === 'backspace') {
    backspace();
  } else if (action === 'calculate') {
    calculate();
  } else if (action === 'percentage') {
    calculatePercentage();
  } else if (action === 'square') {
    calculateSquare();
  } else if (action === 'sqrt') {
    calculateSqrt();
  } else if (action === 'pi') {
    insertPi();
  } else if (action === 'clear-history') {
    clearHistory();
  }

  updateResult(); 
});

function handleNumber(num) {
  currentInput += num;
}

function handleOperator(op) {
  if (currentInput) {
    firstOperand = parseFloat(currentInput);
    operator = op;
    currentInput = '';
  }
}

function calculate() {
  if (firstOperand !== null && currentInput !== '') {
    const secondOperand = parseFloat(currentInput);
    let result;

    switch (operator) {
      case '+':
        result = firstOperand + secondOperand;
        break;
      case '-':
        result = firstOperand - secondOperand;
        break;
      case '*':
        result = firstOperand * secondOperand;
        break;
      case '/':
        result = firstOperand / secondOperand;
        break;
    }

    addToHistory(firstOperand + " " + operator + " " + secondOperand + " = " + result);
    currentInput = result.toString();
    firstOperand = null;
    operator = null;
  }
}

function calculatePercentage() {
  if (currentInput !== '') {
    currentInput = (parseFloat(currentInput) / 100).toString();
  }
}

function calculateSquare() {
  if (currentInput !== '') {
    const result = parseFloat(currentInput) ** 2;
    addToHistory(currentInput + '² = ' + result);
    currentInput = result.toString();
  }
}

function calculateSqrt() {
  if (currentInput !== '') {
    const result = Math.sqrt(parseFloat(currentInput));
    addToHistory("√" + currentInput + " = " + result);
    currentInput = result.toString();
  }
}

function insertPi() {
  currentInput = Math.PI.toString();
}

function clearCalculator() {
  currentInput = '';
  firstOperand = null;
  operator = null;
}

function backspace() {
  currentInput = currentInput.slice(0, -1) || '';
}

function clearHistory() {
  historyList.innerHTML = '';
}

function updateResult() {
  resultField.value = currentInput || '0';
}

function addToHistory(entry) {
  const li = document.createElement('li');
  li.textContent = entry;
  historyList.appendChild(li);
}
