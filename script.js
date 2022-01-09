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

function isFirstOperation(displayValue){
    return displayValue == 0 ? true : false;
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
        displayValue = 0;
    })
}

// function addListenerOpButton(buttonReferenceOpNodeList,displayReference){
        
//     for (let i = 0; i < buttonReferenceOpNodeList.length; i++) {
//         buttonReferenceOpNodeList[i].addEventListener("click", () => {
//             if(isFirstOperation()){
//                 let displayOperand1 =
//             }
            
//             let displayOperand2
//             displayValue = displayReference.textContent;
//         });
//     };
// };

function pageBoot(){

    const buttonReferenceNum = document.querySelectorAll(".num-button");
    const buttonReferenceOp = document.querySelectorAll(".op-button");
    const buttonReferenceClear = document.querySelector(".clear-button");
    const displayReference = document.querySelector(".display");
    let displayValue = 0;

    addListenerNumButton(buttonReferenceNum,displayReference);
    addListenerClearButton(buttonReferenceClear,displayReference);
    addListenerOpButton(buttonReferenceOp,displayReference)
    console.log(displayValue);
};

pageBoot();