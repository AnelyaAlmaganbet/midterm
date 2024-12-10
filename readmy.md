Documentation for Calculator Code
This code implements a functional calculator using HTML, CSS, and JavaScript. It supports basic operations, percentage calculations, squares, square roots, π, and keeps a calculation history.

Variables and DOM Elements
const calculator: Reference to the #calculator element — the container with calculator buttons.
const resultField: Reference to the #result element — the display field for the current result.
const historyList: Reference to the #history-list element — the container for the history of calculations.
State Variables
let currentInput: Holds the current input (e.g., the number being typed).
let firstOperand: Stores the first operand in an operation.
let operator: Stores the selected operator (e.g., +, -, *, /).
Events and Main Functions
calculator.addEventListener('click', callback)
Handles clicks for all calculator buttons.

Logic:
const button: Retrieves the button that was clicked.
const action: Reads the data-action attribute, which determines the type of button (action or operator).
const value: Retrieves the button's value.
Depending on the action, different functions are executed:

Numbers (!action): Added through handleNumber.
Operators (operator): Processed through handleOperator.
Actions (clear, backspace, calculate, etc.): Trigger corresponding functions.
After each action, updateResult() is called to reflect the changes in the display.

Functions for Numbers and Operators
handleNumber(num)
Appends a digit to the current input.

currentInput += num;
handleOperator(op)
Stores the operator and moves the current input to firstOperand. Clears currentInput.

firstOperand = parseFloat(currentInput);
operator = op;
currentInput = '';
Core Actions
calculate()
Performs the mathematical operation between firstOperand and currentInput based on the operator.

Converts currentInput to a number.
Uses a switch statement to execute the relevant operation (+, -, *, /).
Stores the result in currentInput and adds it to the history using addToHistory.
Additional Operations
calculatePercentage()
Calculates the percentage of the current value.

currentInput = (parseFloat(currentInput) / 100).toString();
calculateSquare()
Squares the current input and adds the result to the history.

const result = parseFloat(currentInput) ** 2;
addToHistory(currentInput + '² = ' + result);
currentInput = result.toString();
calculateSqrt()
Calculates the square root of the current input and adds the result to the history.

const result = Math.sqrt(parseFloat(currentInput));
addToHistory("√" + currentInput + " = " + result);
currentInput = result.toString();
insertPi()
Inserts the value of π into currentInput.

currentInput = Math.PI.toString();
Clearing and Input Management
clearCalculator()
Clears the current input, operands, and operator.

currentInput = '';
firstOperand = null;
operator = null;
backspace()
Deletes the last character from the current input.

currentInput = currentInput.slice(0, -1) || '';
clearHistory()
Clears the entire calculation history.

historyList.innerHTML = '';
Updating Display and History
updateResult()
Updates the value displayed in the result field.
If currentInput is empty, displays 0.

resultField.value = currentInput || '0';
addToHistory(entry)
Adds a new entry to the calculation history:

Creates a new <li> element.
Sets its text content to the provided entry.
Appends the element to the #history-list.

const li = document.createElement('li');
li.textContent = entry;
historyList.appendChild(li);
Summary
This code implements an intuitive calculator with support for standard operations, additional calculations (percentage, square, square root, π), and a calculation history feature.

Key Features:

Button Event Handling: Processes clicks dynamically based on the button type.
Real-Time Result Updates: Ensures the user sees immediate feedback.
History Management: Keeps a record of previous calculations.
This implementation can be easily extended, for example, by adding support for additional mathematical functions.