function add(a,b){
    return a + b;
}

function substract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b) {
    return a / b;
}

function operate(a,b,codeOperator){
    switch (codeOperator) {
        case "+":
            return add(a,b);
        case "-":
            return substract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
    }
}

let firstNumber;
let secondNumber;
let codeOperator;

let numbers = document.querySelectorAll(".number");
let display = document.querySelector(".display");
let operators = document.querySelectorAll(".operator");
let equalSign = document.querySelector(".equals");

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        display.textContent = `${display.textContent}${event.target.textContent}`;
    });
});

operators.forEach((operator => {
    operator.addEventListener("click", () => {
        firstNumber = +display.textContent;
        codeOperator = event.target.textContent;
        display.textContent = "";
    })
}))

