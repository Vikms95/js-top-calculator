function add(operand1,operand2){
    return operand1 + operand2;
}

function substract(operand1,operand2){
    return operand1 - operand2;
}

function multiply(operand1,operand2){
    return operand1 * operand2;
}

function divide(operand1,operand2){
    return operand1 / operand2; 
}

function operate(operator,operand1,operand2) {
    return operator(operand1,operand2);
}

let buttonNodeListReference = document.querySelectorAll("button");
let displayReference = document.querySelector(".display")
let displayValue = 0;
for (let i = 0; i < buttonNodeListReference.length; i++) {
    buttonNodeListReference[i].addEventListener("click", (e) =>{
    displayReference.textContent += " " + e.target.textContent;
    displayValue = displayReference.textContent;
    console.log(displayValue);
    });
}