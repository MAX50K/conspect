function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function printResult(result) {}

let a = prompt("Choose a number")
let b = prompt("Choose a number")

let sum = add(a, b);

let difference = subtract(a, b);

let product = multiply(a, b);

let quotient = divide(a, b);

console.log(sum);

console.log(difference);

console.log(product);

console.log(quotient);  