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

function addListenerNumButton(buttonReferenceNumNodeList,displayReferenceSum){
    for (let i = 0; i < buttonReferenceNumNodeList.length; i++) {
        buttonReferenceNumNodeList[i].addEventListener("click", (event) =>{
        displayReferenceSum.textContent += event.target.textContent;
        })
    };
}

function clearSum(){
    displayReferenceSum.textContent = '';
    totalValue = undefined;
    operand1 = undefined;
    operand2 = undefined;
    console.log("totalValue after clear " + totalValue)

};

function addListenerClearButton(buttonReferenceClear){
    buttonReferenceClear.addEventListener("click", () => {
        clearSum()
    });
};

function addListenerOpButton(buttonReferenceOpNodeList,displayReferenceSum){ 
    for (let i = 0; i < buttonReferenceOpNodeList.length; i++) {
        buttonReferenceOpNodeList[i].addEventListener("click", (event) => {
            // console.log("totalValue before cond " + totalValue);
            if(isFirstOperation(totalValue)){
                // console.log("first!")
                totalValue = displayReferenceSum.textContent;
                storedOperator = event.target.textContent;
                displayReferenceSum.textContent = totalValue + event.target.textContent;  
            }
            else
            {
                // console.log("not first!")
                let functionToCall = checkOperator(storedOperator);
                operand1 = parseInt(totalValue)
                operand2 = parseInt(displayReferenceSum.textContent.split("").reverse().join(""));
                totalValue = operate(functionToCall,operand1,operand2);
                displayReferenceSum.textContent = totalValue + event.target.textContent;
                storedOperator = event.target.textContent;
                // console.log("stored operator is " + storedOperator)
                // console.log("totalValue after op " + totalValue)
            }    
        });
    }; 
};

function addListenerEqualButton(buttonReferenceEqual,displayReferenceSum){
    buttonReferenceEqual.addEventListener("click", () =>{
        if(isFirstOperation(totalValue)){
            displayReferenceSum.textContent = totalValue;
        }
        else
        {
            let functionToCall = checkOperator(storedOperator);
            operand1 = parseInt(totalValue)
            operand2 = parseInt(displayReferenceSum.textContent.split("").reverse().join(""));
            totalValue = operate(functionToCall,operand1,operand2);
            displayReferenceSum.textContent = totalValue ;
        }
    });
};

const buttonReferenceNum = document.querySelectorAll(".num-button");
const buttonReferenceOp = document.querySelectorAll(".op-button");
const buttonReferenceClear = document.querySelector(".clear-button");
const buttonReferenceEqual = document.querySelector(".equals-button");
const displayReferenceLog = document.querySelector(".display-log");
const displayReferenceSum = document.querySelector(".display-sum");

let operand1;
let operand2;
let storedOperator;
let totalValue;

addListenerNumButton(buttonReferenceNum,displayReferenceSum);
addListenerClearButton(buttonReferenceClear,displayReferenceSum);
addListenerOpButton(buttonReferenceOp,displayReferenceSum)
addListenerEqualButton(buttonReferenceEqual,displayReferenceSum)
console.log()