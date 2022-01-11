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
        displayReferenceNum.textContent = "ERROR: Division by 0"
        displayReferenceOp.textContent = "";
        alert("You can't divide by 0. Reseting operation..")
        clearSum();
        return;
    }
    else
    {
        return (+operand1) / (+operand2); 
    }
}

function isZeroDivision (operand1,operand2){
    return operand1 && operand2 === 0 ? true : false;
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

function resetCalculatorIfNoOperands(){
    alert("You need a number before operating. Reseting operation..")
    clearSum();
    return;
}

function isFirstOperation(totalValue){
    return displayReferenceLog == "" || totalValue == undefined ? true : false;
}

function clearSum(){
    displayReferenceNum.textContent = '';
    displayReferenceLog.textContent = '';
    displayReferenceOp.textContent = '';
    totalValue = undefined;
    operand1 = undefined;
    operand2 = undefined;
    lastOperandUsed = undefined;
    storedOperator = undefined;
    return;
};

function addListenerClearButton(buttonReferenceClear){
    buttonReferenceClear.addEventListener("click", () => {
        clearSum()
    });
};



function addListenerNumButton(buttonReferenceNumNodeList,displayReferenceNum,displayReferenceLog){ 
    buttonReferenceNumNodeList.forEach(button => {
        button.addEventListener("click", (event) => {
            lastOperandUsed = event.target.textContent;
            displayReferenceNum.textContent += event.target.textContent;
            displayReferenceLog.textContent += event.target.textContent;
        })
    });
}

function addListenerOpButton(buttonReferenceOpNodeList,displayReferenceNum){ 
    buttonReferenceOpNodeList.forEach(button =>{
        button.addEventListener("click", (event) => {
            if(isFirstOperation(totalValue)){
                console.log("first operation!")
                resetCalculatorIfNoOperands();
                return;
            }
        })
    })
};
             
function addListenerEqualButton(buttonReferenceEqual,displayReferenceNum){
    buttonReferenceEqual.addEventListener("click", () =>{
        if(isFirstOperation(totalValue)){
            displayReferenceNum.textContent = totalValue;
        }
        
 
        return;
    })
}

const buttonReferenceNum = document.querySelectorAll(".num-button");
const buttonReferenceOp = document.querySelectorAll(".op-button");
const buttonReferenceClear = document.querySelector(".clear-button");
const buttonReferenceEqual = document.querySelector(".equals-button");
const displayReferenceLog = document.querySelector(".display-log");
const displayReferenceNum = document.querySelector(".display-num");
const displayReferenceOp = document.querySelector(".display-operator");

let operand1;
let operand2;
let lastOperandUsed;
let storedOperator;
let totalValue;

addListenerNumButton(buttonReferenceNum,displayReferenceNum,displayReferenceLog);
addListenerClearButton(buttonReferenceClear,displayReferenceNum,displayReferenceLog);
addListenerOpButton(buttonReferenceOp,displayReferenceNum,displayReferenceLog)
addListenerEqualButton(buttonReferenceEqual,displayReferenceNum,displayReferenceLog)
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