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
    if(isZeroDivision(operand1,operand2)){
        displayReferenceNumber.textContent = "ERROR: Division by 0"
        displayReferenceOperation.textContent = "";
        alert("You can't divide by 0. Reseting operation..")
        clearSum();
        return;
    }
    else
    {
        return (+operand1) / (+operand2); 
    }
}

function operate(operator,operand1,operand2) {
    const OPERATION_FUNCTIONS = {
        "+" : add,
        "-" : substract,
        "*" : multiply,
        "/" : divide,
    }
    operator = OPERATION_FUNCTIONS[operator]
    return operator(operand1,operand2);
}

function isZeroDivision (operand1,operand2){
    return operand1 && operand2 === 0 ? true : false;
}

function isFirstOperation(){
    return  totalValue == 0 ? true : false;
}

function isOperationWithNoOperands(){
    return lastOperandUsed === "" ? true : false;
}

function isOperationAfterEquals(event){
    return storedOperator == "=" ? true : false;
}

function clearDisplay(){
    displayReferenceNumber.textContent = "";
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
    
    return;
};

function resetCalculator(){
    alert("Reseting calculator...")
    clearSum();
    return;
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
    displayReferenceNumber.textContent = totalValue; 
    if(event.target.textContent == "="){
        displayReferenceOperation.textContent = "";
        return;
    }
    displayReferenceOperation.textContent = event.target.textContent;
    displayReferenceLog.textContent += event.target.textContent;
    
}

function populateDisplayOnEquals (){
    displayReferenceNumber.textContent = totalValue;
    displayReferenceOperation.textContent = "";
}

function storeOperatorandPopulateDisplay(event,populateDisplayFunction){
    storedOperator = event.target.textContent;
    populateDisplayFunction(event);
}

function addListenerClearButton(){
    buttonReferenceClear.addEventListener("click", () => {
        clearSum()
    });
};


function addListenerNumberButton(){ 
    buttonReferenceNumNodeList.forEach(button => {
        button.addEventListener("click", (event) => {
            lastOperandUsed += parseInt(event.target.textContent);
            populateDisplayOnNumber(event);
        });
    });
};

function addListenerOperationButton(){ 
    buttonReferenceOpNodeList.forEach(button =>{
        button.addEventListener("click", (event) => {
            clearDisplay();
            if(isOperationWithNoOperands()){
                if(isOperationAfterEquals(storedOperator)){
                    storeOperatorandPopulateDisplay(event,populateDisplayOnOperation)
                    return;
                }
                return;
            } 
            else if(isFirstOperation()){ 
                totalValue = parseInt(lastOperandUsed);
                lastOperandUsed = "";
                storeOperatorandPopulateDisplay(event,populateDisplayOnFirstOperation)
                return;
            }
            else{
                operand1 = totalValue;
                operand2 = parseInt(lastOperandUsed);   
                totalValue = operate(storedOperator,operand1,operand2)
                lastOperandUsed = "";
                storeOperatorandPopulateDisplay(event,populateDisplayOnOperation)
            } 
        })
    })
};
  

const buttonReferenceNumNodeList = document.querySelectorAll(".num-button");
const buttonReferenceOpNodeList = document.querySelectorAll(".op-button");
const buttonReferenceClear = document.querySelector(".clear-button");
const buttonReferenceEqual = document.querySelector(".op-button");
const displayReferenceLog = document.querySelector(".display-log");
const displayReferenceNumber = document.querySelector(".display-num");
const displayReferenceOperation = document.querySelector(".display-operator");

let operand1;
let operand2;
let lastOperandUsed = "";
let storedOperator;
let storedOperator2;
let totalValue = 0;

addListenerNumberButton();
addListenerClearButton();
addListenerOperationButton()
// addListenerEQUALButton()
console.log()



 

/* OP else snippet
                // let functionToCall;
                
                // if(storedOperator === "=")
                // {
                //     functionToCall = checkOperator(event.target.textContent);
                //     operand2 = parseInt(lastOperandUsed);
                // }
                // else
                // {   
                //     functionToCall = checkOperator(storedOperator);
                //     operand2 = parseInt(displayReferenceNum.textContent);
                // }
                
                // operand1 = parseInt(totalValue)
                
                // if(isZeroDivision(functionToCall))
                // {
                //     (console.log("0 found in division operator!"))
                //     handleDivisionError();
                //     return;
                // }

                // if(Number.isNaN(operand2))
                // {
                //   alert("You need a number before operating. Reseting operation..")
                //   clearSum();
                //   return;

                // }
                // totalValue = operate(functionToCall,operand1,operand2);
                // lastOperandUsed = operand2;
                // storedOperator = event.target.textContent;
                // displayReferenceOp.textContent = storedOperator;
                // displayReferenceLog.textContent +=  " " + event.target.textContent + " ";
                // displayReferenceNum.textContent = "";
                */

/*Equal else snippet

else
{  
    let functionToCall = checkOperator(storedOperator);
    operand1 = parseInt(totalValue)
    operand2 = parseInt(displayReferenceNum.textContent);

    if(isZeroDivision(functionToCall)){
        handleDivisionError();
        return;
    }
    if(Number.isNaN(operand2)){
      alert("You need a number before operating. Reseting operation..")
      clearSum();
      return
    }
    totalValue = operate(functionToCall,operand1,operand2);
    storedOperator = "=";
    displayReferenceOp.textContent = "";
    displayReferenceNum.textContent = totalValue;  
*/