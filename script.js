const add = function(num1, num2){
    return +num1 + +num2
};

const subtract = function(num1, num2){
    return num1 - num2
};

const multiply = function(num1, num2){
    return num1 * num2
};

const divide = function(num1, num2){
    return num1 / num2
};

const operate = function(statement, firstValue, secondValue){
    if (statement === '+') {
        return add(firstValue, secondValue)
    }
    else if (statement === '-') {
        return subtract(firstValue, secondValue)
    }
    else if (statement === '*') {
        return multiply(firstValue, secondValue)
    }
    else if (statement === '/') {
        return divide(firstValue, secondValue)
    }
};
let valueHolder;
let firstValue;
let secondValue;
let statement;

const buttonsNumbers = document.querySelectorAll(".number");
buttonsNumbers.forEach((button) => {
    button.addEventListener("click", fillTheField);
});

function fillTheField(e) {
    const display = document.querySelector('.display')
    if (display.textContent === '0' || display.textContent === '/' || display.textContent === '*' || display.textContent === '-' || display.textContent === '+') {
        display.textContent = ''
    }
    const buttonRef = e.target
    const number = buttonRef.getAttribute('data-value')
    // console.log(number)
    display.textContent += number
    valueHolder = display.textContent
    console.log(valueHolder)
}

const ac = document.querySelector('.ac')
ac.addEventListener("click", () => {
    const display = document.querySelector('.display')
    display.textContent = '0'
    valueHolder = display.textContent
    console.log(valueHolder)
});

const statements = document.querySelectorAll(".statement");
statements.forEach((statement) => {
    statement.addEventListener("click", getStatement);
});

function getStatement(e) {
    const display = document.querySelector('.display')
    firstValue = display.textContent;
    const statementRef = e.target
    const statementFunc = statementRef.getAttribute('data-value')
    statement = statementFunc
    
    display.textContent = statementFunc
    
}

const theOperate = document.querySelector(".operate");
theOperate.addEventListener('click', getTheOperate);

function getTheOperate(e) {
    secondValue = valueHolder;
    const finalRes = operate(statement, firstValue, secondValue)
    const display = document.querySelector('.display')
    console.log(firstValue)
    console.log(statement)
    console.log(secondValue)
    display.textContent = `${finalRes}`
    firstValue = finalRes;
}