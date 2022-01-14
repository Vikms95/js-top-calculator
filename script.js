//Element references
const buttonReferenceNumNodeList = document.querySelectorAll(".num-button");
const buttonReferenceOpNodeList = document.querySelectorAll(".op-button");
const buttonReferenceClear = document.querySelector(".clear-button");
const displayReferenceLog = document.querySelector(".display-log")
const buttonReferenceDelete =  document.querySelector(".delete-button");
const displayReferenceNumber = document.querySelector(".display-num");
const displayReferenceOperation = document.querySelector(".display-operator");
const buttonReferenceSoundClick = document.querySelector("button");

//Variables used all throughout the functions
let operand1;
let operand2;
let lastOperandUsed = "";
let storedOperator;
let storedOperator2;
let totalValue = 0;
let isEraseEnabled = false;

addListenerNumberButton();
addListenerClearButton();
addListenerDeleteButton();
addListenerOperationButton();


//Basic operation functions
function add(operand1,operand2){
    return (+operand1) + (+operand2);
};

function substract(operand1,operand2){
    return (+operand1) - (+operand2);
};

function multiply(operand1,operand2){
    return (+operand1) * (+operand2);
};

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
};

function percentage(operand1,operand2){
    return (operand1 * operand2) / 100;
};

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
};


//General managing of display and totalValue
function clearDisplay(){
    displayReferenceNumber.textContent = "";
};

function deleteSum(){
    if(isEraseEnabled == true){

    lastOperandUsed = lastOperandUsed.slice(0,lastOperandUsed.length -1);
    displayReferenceNumber.textContent = displayReferenceNumber
                                        .textContent
                                        .slice(0,displayReferenceNumber
                                        .textContent.length -1);
    displayReferenceLog.textContent = displayReferenceLog
                                        .textContent
                                        .slice(0,displayReferenceLog
                                            .textContent.length -1);
    }else{
        return;
    }
};

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
    clearSum();
};

//Managing display on errors
function populateDisplayOnDivisionError(){
    displayReferenceOperation.textContent = "";
    displayReferenceNumber.textContent = "ERROR: Division by 0";
};

function populateDisplayOnOperandError(){
    displayReferenceOperation.textContent = "";
    displayReferenceNumber.textContent = "ERROR: Invalid operands";
};

function displayErrorAndReset(){
    setTimeout(populateDisplayOnOperandError,200);
    setTimeout(resetCalculator,1000);
    return;
};


//Populate display on event listener functions
function populateDisplayOnNumber (event){
    displayReferenceNumber.textContent = lastOperandUsed;
    displayReferenceLog.textContent += event.target.textContent;
    isEraseEnabled = true;
};

function populateDisplayOnFirstOperation (event){
        displayReferenceLog.textContent += event.target.textContent;
        displayReferenceOperation.textContent = event.target.textContent;
};

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
    
};

function populateDisplayOnEquals (){
    displayReferenceNumber.textContent = totalValue;
    displayReferenceOperation.textContent = "";
};

function storeOperatorandPopulateDisplay(event,populateDisplayFunction){
    storedOperator = event.target.textContent;
    populateDisplayFunction(event);
};


//Add event listener functions
function addListenerDeleteButton(){
    buttonReferenceDelete.addEventListener("click", () => {
        deleteSum();
    })
};

function addListenerClearButton(){
    buttonReferenceClear.addEventListener("click", () => {
        clearSum();
    });
};

function addListenerNumberButton(){ 
    buttonReferenceNumNodeList.forEach(button => {
        button.addEventListener("click", (event) => {
        setUpNumber(event);
        });
    });
};

function addListenerOperationButton(){ 
    buttonReferenceOpNodeList.forEach(button =>{
        button.addEventListener("click", (event) => {
            clearDisplay();
            setUpOperation(event);
            button.removeEventListener("click",setUpOperation);
        });
    });
};


//Trigger functions when event is listened
function setUpNumber(event){
    let hasOperandDecimalPoint = event.target.textContent == "." && displayReferenceNumber.textContent.includes(".");

    if(hasOperandDecimalPoint){
        return;
    }
    lastOperandUsed += event.target.textContent;
    populateDisplayOnNumber(event);
};

function setUpOperation(event){

    //Boolean checks to ensure valid operations
    let isFirstOperation = totalValue === 0;
    let isOperationWithNoOperands = lastOperandUsed === "";
    let isOperationAfterEquals = storedOperator === "=";
    let areOperandsNan = operand1 === "." || operand2 === "." || lastOperandUsed === ".";

    if(isOperationWithNoOperands){
        if(isOperationAfterEquals){
            storeOperatorandPopulateDisplay(event,populateDisplayOnOperation);
            return;
        }
        return;
    } 
    else if(isFirstOperation){ 
        if(areOperandsNan){
            displayErrorAndReset();
            return;
        }   
        totalValue = lastOperandUsed;
        lastOperandUsed = "";
        isEraseEnabled = false;
        storeOperatorandPopulateDisplay(event,populateDisplayOnFirstOperation)
        return;
    }
    else{
        operand1 = totalValue;
        operand2 = lastOperandUsed;
        if(areOperandsNan){
            displayErrorAndReset();
            return;
        }   
        totalValue = operate(storedOperator,operand1,operand2);
        lastOperandUsed = "";
        isEraseEnabled = false;
        storeOperatorandPopulateDisplay(event,populateDisplayOnOperation);
    };
}


function playSound() {
    var sound = document.getElementById("audio");
    sound.play();
};


