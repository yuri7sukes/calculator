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

const firstValue = prompt('pass the first number');
const secondValue = prompt('pass the second number');
const statement = prompt('pass the operator');
console.log(operate(statement, firstValue, secondValue));
