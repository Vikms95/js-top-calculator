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

function checkOperator(operatorTextReference) {
    let operatorFunction;
    switch (operatorTextReference) {
        case "+":
            operatorFunction = add.name;
        case "-":
            operatorFunction = substract.name;
        case "*":
            operatorFunction = multiply.name;
        case "/":
            operatorFunction = divide.name;
        default:
            break;
    }
    return operatorFunction;
}

function isFirstOperation(displayTotalValue){
    return displayTotalValue == 0 ? true : false;
}

function addListenerNumButton (buttonReferenceNumNodeList,displayReference){
    for (let i = 0; i < buttonReferenceNumNodeList.length; i++) {
        buttonReferenceNumNodeList[i].addEventListener("click", (e) =>{
        displayReference.textContent += e.target.textContent;
        })
    };
}

function addListenerClearButton(buttonReferenceClear,displayReference){
        buttonReferenceClear.addEventListener("click", () => {
        displayReference.textContent = "";
        displayTotalValue = 0;
    })
}

function addListenerOpButton(buttonReferenceOpNodeList,displayReference,displayTotalValue,displayOperand1,displayOperand2){
        
    for (let i = 0; i < buttonReferenceOpNodeList.length; i++) {
        buttonReferenceOpNodeList[i].addEventListener("click", (e) => {
            if(isFirstOperation(displayTotalValue)){
                displayTotalValue = displayReference.textContent;
            }
            else
            {
                displayOperand1 = displayTotalValue;
                displayOperand2 = displayReference.textContent;
                displayTotalValue = operate(checkOperator(e.target.textContent),displayOperand1,displayOperand2)
            }
            console.log(displayOperand1);
            console.log(displayOperand2);
            console.log(displayTotalValue);
        });
    };
};

function pageBoot(){

    const buttonReferenceNum = document.querySelectorAll(".num-button");
    const buttonReferenceOp = document.querySelectorAll(".op-button");
    const buttonReferenceClear = document.querySelector(".clear-button");
    const displayReference = document.querySelector(".display");
    let displayOperand1 = 0;
    let displayOperand2 = 0;
    let displayTotalValue = 0;

    addListenerNumButton(buttonReferenceNum,displayReference);
    addListenerClearButton(buttonReferenceClear,displayReference);
    addListenerOpButton(buttonReferenceOp,displayReference,displayTotalValue,displayOperand1 ,displayOperand2)
};

pageBoot();