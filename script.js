const add = function(num1, num2){
    return num1 + num2
}

const subtract = function(num1, num2){
    return num1 - num2
}

const multiply = function(num1, num2){
    return num1 * num2
}

const divide = function(num1, num2){
    return num1 / num2
}

const firstValue = promt();
const secondValue = promt();
console.log(add(firstValue, secondValue))
console.log(subtract(firstValue, secondValue))
console.log(multiply(firstValue, secondValue))
console.log(divide(firstValue, secondValue))