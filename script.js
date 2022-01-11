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
    return (+operand1) / (+operand2); 
}

function operate(operator,operand1,operand2) {
    return operator(operand1,operand2);
}

function checkOperator(operatorTextReference) {
    switch (operatorTextReference) {
        case "+": 
            return add;
        case "-":
            return substract;
        case "*":
            return multiply;
        case "/":
            return divide;
        default:
            "hi"
            break;
    }
}

function isFirstOperation(totalValue){
    return totalValue == undefined ? true : false;
}

function addItemToLog(displayReferenceLog,event){
    displayReferenceLog.textContent += event.target.textContent;
}

function addListenerNumButton(buttonReferenceNumNodeList,displayReferenceNum,displayReferenceLog){
    for (let i = 0; i < buttonReferenceNumNodeList.length; i++) {
        buttonReferenceNumNodeList[i].addEventListener("click", (event) =>{
        displayReferenceNum.textContent += event.target.textContent;
        displayReferenceLog.textContent += event.target.textContent;
        })
    };
}

function clearSum(){
    displayReferenceNum.textContent = '';
    displayReferenceLog.textContent = '';
    displayReferenceOp.textContent = '';
    totalValue = undefined;
    operand1 = undefined;
    operand2 = undefined;
    storedOperator = undefined;
    console.log("totalValue after clear " + totalValue)

};

function addListenerClearButton(buttonReferenceClear){
    buttonReferenceClear.addEventListener("click", () => {
        clearSum()
    });
};

function addListenerOpButton(buttonReferenceOpNodeList,displayReferenceNum){ 
    for (let i = 0; i < buttonReferenceOpNodeList.length; i++) {
        buttonReferenceOpNodeList[i].addEventListener("click", (event) => {
            console.log("totalValue before cond " + totalValue);
            if(isFirstOperation(totalValue)){
                console.log("first!")
                totalValue = displayReferenceNum.textContent;
                storedOperator = event.target.textContent;
                displayReferenceNum.textContent = totalValue;  
                displayReferenceOp.textContent = event.target.textContent;
                displayReferenceLog.textContent +=  " " + event.target.textContent + " ";
                displayReferenceNum.textContent = "";
            }
            else
            {
                console.log("not first!")
                let functionToCall = checkOperator(storedOperator);
                operand1 = parseInt(totalValue)
                operand2 = parseInt(displayReferenceNum.textContent);
                totalValue = operate(functionToCall,operand1,operand2);
                displayReferenceNum.textContent = totalValue;
                storedOperator = event.target.textContent;
                displayReferenceOp.textContent = storedOperator;
                displayReferenceLog.textContent +=  " " + event.target.textContent + " ";
                displayReferenceNum.textContent = "";
                console.log("stored operator is " + storedOperator)
                console.log("totalValue after op " + totalValue)
            }    
        });
    }; 
};

function addListenerEqualButton(buttonReferenceEqual,displayReferenceNum){
    buttonReferenceEqual.addEventListener("click", () =>{
        if(isFirstOperation(totalValue)){
            displayReferenceNum.textContent = totalValue;
        }
        else
        {
            let functionToCall = checkOperator(storedOperator);
            operand1 = parseInt(totalValue)
            operand2 = parseInt(displayReferenceNum.textContent);
            totalValue = operate(functionToCall,operand1,operand2);
            displayReferenceNum.textContent = totalValue;
            displayReferenceOp.textContent = "";
            console.log("stored operator is " + storedOperator)
            console.log("totalValue after op " + totalValue)

        }
    });
};

const buttonReferenceNum = document.querySelectorAll(".num-button");
const buttonReferenceOp = document.querySelectorAll(".op-button");
const buttonReferenceClear = document.querySelector(".clear-button");
const buttonReferenceEqual = document.querySelector(".equals-button");
const displayReferenceLog = document.querySelector(".display-log");
const displayReferenceNum = document.querySelector(".display-num");
const displayReferenceOp = document.querySelector(".display-operator");

let operand1;
let operand2;
let storedOperator;
let totalValue;

addListenerNumButton(buttonReferenceNum,displayReferenceNum,displayReferenceLog);
addListenerClearButton(buttonReferenceClear,displayReferenceNum,displayReferenceLog);
addListenerOpButton(buttonReferenceOp,displayReferenceNum,displayReferenceLog)
addListenerEqualButton(buttonReferenceEqual,displayReferenceNum,displayReferenceLog)
console.log()