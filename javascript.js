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
    if(b === 0){
        return "ERROR! Can't devide by 0";
    }
    return a / b;
}

function operate(a,b,codeOperator){
    switch (codeOperator) {
        case "+":
            return add(a,b);
        case "-":
            return substract(a,b);
        case "x":
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
let deleteButton = document.querySelector(".delete");

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        display.textContent = `${display.textContent}${event.target.textContent}`;
    });
});

operators.forEach((operator => {
    operator.addEventListener("click", () => {
        if (firstNumber !== undefined) {
            secondNumber = +display.textContent;
            firstNumber = operate(firstNumber, secondNumber, codeOperator);
        }
        else {
            firstNumber = +display.textContent;
        }
        codeOperator = event.target.textContent;
        display.textContent = "";
    })
}))

equalSign.addEventListener("click", () => {
    secondNumber = +display.textContent;
    display.textContent = `${operate(firstNumber, secondNumber, codeOperator)}`;
    firstNumber = undefined;
})

deleteButton.addEventListener("click", () => {
    firstNumber = undefined;
    secondNumber = undefined;
    codeOperator = undefined;
    display.textContent = "";
})