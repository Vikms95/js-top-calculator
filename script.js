function add(operand1,operand2){
    return (+operand1) + (+operand2);
}

function substract(operand1,operand2){
    return (+operand1) - (+operand2);
}

function multiply(operand1,operand2){
    return (+operand1) * (+operand2);
}

function divide(operand1,operand2){
    let isZeroDivision = operand1 === "0" || operand2 === "0";

    if(isZeroDivision){
        setTimeout(populateDisplayOnDivisionError,200);
        setTimeout(resetCalculator,1000);
        return;
    }
    else
    {
        return (+operand1) / (+operand2); 
    }
}

function percentage(operand1,operand2){
    return (operand1 * operand2) / 100;
}

function operate(operator,operand1,operand2) {
    const OPERATION_FUNCTIONS = {
        "+" : add,
        "-" : substract,
        "*" : multiply,
        "/" : divide,
        "%" : percentage,
    }
    operator = OPERATION_FUNCTIONS[operator];
    return operator(operand1,operand2);
}

function clearDisplay(){
    displayReferenceNumber.textContent = "";
}

function deleteSum(){
    if(displayReferenceNumber.textContent.length > 0){

    lastOperandUsed = lastOperandUsed.slice(0,lastOperandUsed.length -1);
    displayReferenceNumber.textContent = displayReferenceNumber
                                        .textContent
                                        .slice(0,displayReferenceNumber
                                        .textContent.length -1);
    displayReferenceLog.textContent = displayReferenceLog
                                        .textContent
                                        .slice(0,displayReferenceLog
                                            .textContent.length -1);
    }
}

function clearSum(){
    displayReferenceNumber.textContent = '';
    displayReferenceLog.textContent = '';
    displayReferenceOperation.textContent = '';
    operand1 = undefined;
    operand2 = undefined;
    lastOperandUsed = "";
    storedOperator = "";
    totalValue = 0;
};

function resetCalculator(){
    alert("Reseting calculator...");
    clearSum();
}

function numberAlreadyHasDecimalPoint(event){
    return event.target.textContent == "." && displayReferenceNumber.textContent.includes(".") ? true : false;
}

function populateDisplayOnDivisionError(){
    displayReferenceOperation.textContent = "";
    displayReferenceNumber.textContent = "ERROR: Division by 0";
}

function populateDisplayOnOperandError(){
    displayReferenceOperation.textContent = "";
    displayReferenceNumber.textContent = "ERROR: Invalid operands";
}

function populateDisplayOnNumber (event){
    displayReferenceNumber.textContent = lastOperandUsed;
    displayReferenceLog.textContent += event.target.textContent;
}

function populateDisplayOnFirstOperation (event){
        displayReferenceLog.textContent += event.target.textContent;
        displayReferenceOperation.textContent = event.target.textContent;
}

function populateDisplayOnOperation (event){
    try{
        displayReferenceNumber.textContent = totalValue.toFixed(2).replace(/[.,]00$/, ""); 
        if(event.target.textContent == "="){
            displayReferenceOperation.textContent = "";
            return;
        }
        displayReferenceOperation.textContent = event.target.textContent;
        displayReferenceLog.textContent += event.target.textContent;
    }catch(e){
        return;
    }
    
}

function populateDisplayOnEquals (){
    displayReferenceNumber.textContent = totalValue;
    displayReferenceOperation.textContent = "";
}

function storeOperatorandPopulateDisplay(event,populateDisplayFunction){
    storedOperator = event.target.textContent;
    populateDisplayFunction(event);
}

function addListenerDeleteButton(){
    buttonReferenceDelete.addEventListener("click", () => {
        deleteSum();
    })
}

function addListenerClearButton(){
    buttonReferenceClear.addEventListener("click", () => {
        clearSum();
    });
};

function addListenerNumberButton(){ 
    buttonReferenceNumNodeList.forEach(button => {
        button.addEventListener("click", (event) => {
            if(numberAlreadyHasDecimalPoint(event)){
                return;
            }
            lastOperandUsed += event.target.textContent;
            populateDisplayOnNumber(event);
        });
    });
};

function addListenerOperationButton(){ 
    buttonReferenceOpNodeList.forEach(button =>{
        button.addEventListener("click", (event) => {
            
            let isFirstOperation = totalValue === 0;
            let isOperationWithNoOperands = lastOperandUsed === "";
            let isOperationAfterEquals = storedOperator === "=";
            let isOperationOfNan = operand1 === "." || operand2 === "." || lastOperandUsed === ".";
            clearDisplay();
            
            if(isOperationWithNoOperands){
                if(isOperationAfterEquals){
                    storeOperatorandPopulateDisplay(event,populateDisplayOnOperation);
                    return;
                }
                return;
            } 
            else if(isFirstOperation){ 
                if(isOperationOfNan){
                    setTimeout(populateDisplayOnOperandError,200);
                    setTimeout(resetCalculator,1000);
                    return;
                }   
                totalValue = lastOperandUsed;
                lastOperandUsed = "";
                storeOperatorandPopulateDisplay(event,populateDisplayOnFirstOperation)
                return;
            }
            else{
                operand1 = totalValue;
                operand2 = lastOperandUsed;
                if(isOperationOfNan){
                    setTimeout(populateDisplayOnOperandError,200);
                    setTimeout(resetCalculator,1000);
                    return;
                }   
                totalValue = operate(storedOperator,operand1,operand2);
                lastOperandUsed = "";
                storeOperatorandPopulateDisplay(event,populateDisplayOnOperation);
            }; 
        });
    });
};

function playSound() {
    var sound = document.getElementById("audio");
    sound.play();
}

const buttonReferenceNumNodeList = document.querySelectorAll(".num-button");
const buttonReferenceOpNodeList = document.querySelectorAll(".op-button");
const buttonReferenceClear = document.querySelector(".clear-button");
const displayReferenceLog = document.querySelector(".display-log")
const buttonReferenceDelete =  document.querySelector(".delete-button");
const displayReferenceNumber = document.querySelector(".display-num");
const displayReferenceOperation = document.querySelector(".display-operator");
const buttonReferenceSoundClick = document.querySelector("button");

let operand1;
let operand2;
let lastOperandUsed = "";
let storedOperator;
let storedOperator2;
let totalValue = 0;


addListenerNumberButton();
addListenerClearButton();
addListenerDeleteButton();
addListenerOperationButton();
