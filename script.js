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