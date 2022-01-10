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

function isFirstOperation(storedTotalValue){
    return storedTotalValue == undefined ? true : false;
}

function addListenerNumButton(buttonReferenceNumNodeList,displayReference){
    for (let i = 0; i < buttonReferenceNumNodeList.length; i++) {
        buttonReferenceNumNodeList[i].addEventListener("click", (event) =>{
        displayReference.textContent += event.target.textContent;
        })
    };
}

function clearSum(){
    displayReferenceSum.textContent = '';
    storedTotalValue = undefined;
    operand1 = undefined;
    operand2 = undefined;
    console.log("storedtotalvalue after clear " + storedTotalValue)

};

function addListenerClearButton(buttonReferenceClear){
    buttonReferenceClear.addEventListener("click", () => {
        clearSum()
    });
};

function addListenerOpButton(buttonReferenceOpNodeList,displayReferenceSum){ 
    for (let i = 0; i < buttonReferenceOpNodeList.length; i++) {
        buttonReferenceOpNodeList[i].addEventListener("click", (event) => {
            console.log("storedtotalvalue before cond " + storedTotalValue)
            if(isFirstOperation(storedTotalValue)){
                console.log("first!")
                storedTotalValue = displayReferenceSum.textContent;
                displayReferenceSum.textContent = storedTotalValue + event.target.textContent;  
            }
            else
            {
                console.log("not first!")
                let functionToCall = checkOperator(event.target.textContent);
                operand1 = parseInt(storedTotalValue)
                operand2 = parseInt(displayReferenceSum.textContent.split("").reverse().join(""));
                storedTotalValue = operate(functionToCall,operand1,operand2);
                displayReferenceSum.textContent = storedTotalValue + event.target.textContent;
                console.log("storedtotalvalue after op " + storedTotalValue)
            }    
        });
    }; 
};

const buttonReferenceNum = document.querySelectorAll(".num-button");
const buttonReferenceOp = document.querySelectorAll(".op-button");
const buttonReferenceClear = document.querySelector(".clear-button");
const displayReferenceLog = document.querySelector(".display-log");
const displayReferenceSum = document.querySelector(".display-sum");
let operand1;
let operand2;
let storedTotalValue;

addListenerNumButton(buttonReferenceNum,displayReferenceSum,storedTotalValue);
addListenerClearButton(buttonReferenceClear,displayReferenceSum,storedTotalValue);
addListenerOpButton(buttonReferenceOp,displayReferenceSum,storedTotalValue)
console.log()