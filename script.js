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
        "/" : divide
    }
    operator = OPERATION_FUNCTIONS[operator]
    return operator(operand1,operand2);
}

function isZeroDivision (operand1,operand2){
    return operand1 && operand2 === 0 ? true : false;
}

function checkForConsecutiveOperators(){
    if(isFirstOperation(totalValue)){
        resetCalculator();
        return;
    }   
}

function isOperationWithNoOperands(){
    return lastOperandUsed === "" ? true : false;
}

function resetCalculator(){
    alert("Reseting calculator...")
    clearSum();
    return;
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

function isFirstOperation(){
    return  totalValue == 0 ? true : false;
}

function addListenerCLEARButton(){
    buttonReferenceClear.addEventListener("click", () => {
        clearSum()
    });
};

function clearDisplay(){
    displayReferenceNumber.textContent = "";
}

function populateDisplayOnNUMBER (event){
    displayReferenceNumber.textContent = lastOperandUsed;
    displayReferenceLog.textContent += event.target.textContent;
}

function populateDisplayOnOPERATION (event){
    displayReferenceNumber.textContent = totalValue;
    displayReferenceLog.textContent += event.target.textContent;
    displayReferenceOperation.textContent = event.target.textContent;
}

function populateDisplayOnFIRSTOPERATION (event){
    displayReferenceLog.textContent += event.target.textContent;
    displayReferenceOperation.textContent = event.target.textContent;
}

function addListenerNUMBERButton(){ 
    buttonReferenceNumNodeList.forEach(button => {
        button.addEventListener("click", (event) => {
            lastOperandUsed += parseInt(event.target.textContent);
            populateDisplayOnNUMBER(event);
        });
    });
};

function addListenerOPERATIONButton(){ 
    buttonReferenceOpNodeList.forEach(button =>{
        button.addEventListener("click", (event) => {
            if(isOperationWithNoOperands()){
                resetCalculator();
                return;
            } 
            else if(isFirstOperation()){
                clearDisplay();
                totalValue = parseInt(lastOperandUsed);
                storedOperator = event.target.textContent;
                lastOperandUsed = "";
                populateDisplayOnFIRSTOPERATION(event);
                return;
            }
            else
            {   clearDisplay();
                operand1 = totalValue;
                operand2 = parseInt(lastOperandUsed);
                totalValue = operate(storedOperator,operand1,operand2)
                storedOperator = event.target.textContent;
                lastOperandUsed = "";
                populateDisplayOnOPERATION(event);
                

            } 
        })
    })
};
             
function addListenerEQUALButton(){
    buttonReferenceEqual.addEventListener("click", () =>{
        // checkForConsecutiveOperators();
        
 
        return;
    })
}

const buttonReferenceNumNodeList = document.querySelectorAll(".num-button");
const buttonReferenceOpNodeList = document.querySelectorAll(".op-button");
const buttonReferenceClear = document.querySelector(".clear-button");
const buttonReferenceEqual = document.querySelector(".equals-button");
const displayReferenceLog = document.querySelector(".display-log");
const displayReferenceNumber = document.querySelector(".display-num");
const displayReferenceOperation = document.querySelector(".display-operator");

let operand1;
let operand2;
let lastOperandUsed = "";
let storedOperator;
let totalValue = 0;

addListenerNUMBERButton();
addListenerCLEARButton();
addListenerOPERATIONButton()
addListenerEQUALButton()
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