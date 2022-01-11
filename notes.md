
APPROACH IDEAS:
(X) - **totalValue** Have an internal variable sum all operations.Show on display when *operator* is clicked.
 
(X) - **(.display-sum)** Have an int value point at **displayReference.textContent* to show the current number typed + the *operator* clicked which when *operator* or *=* is clicked turns into *totalValue*

(X) - **(.display-log)** Have a *string* value display the operations to *display.log*

(X) - Store operator when clicked, and when next is clicked, apply *storedOerator* and store the clicked one

(X) - *operand2* is not properly catched when the number has zeroes on the right

(X) - Create *displayReferenceOp* for the operator shown to the user so it does not conflict with the numbers taken

EDGE-CASES TO HANDLE:

(X) - Dividing by 0: Create a function to check if division and if 0, clear and return

(?) - Round answers with long decimals so that they don't overflow the screen

(X) - Limit  displayReferenceNum to certain amount of width: setting *em* limit and *oveflow:hidden;*

(X) - After pressing *=* the subsequent operation uses the previous operator: store a value in *storedOperator*
    when *=* is pressed,if that value is found when an operator is pressed, use the current event operator instead.

(X)- displayReferenceNum gets the totalValue from displayReferenceNum after *=* and then using an *operator*: store operand2 after operating in *lastOperandUsed* and use that instead when *"="* is the operator found

(X) - Clicking equals button right after operator should return *totalValue* (previousOperator) total value: check for NaN by comparing the operands with themselves(NaN value is the only one unequal to itself)


- Clicking an operator right after equals button:

- Clicking two or more operators without any number: disable operator buttons when one is clicked 

- Negatives are not respected when adding to them:

INSTRUCTIONS CHECKLIST
1 X
2 X
3 X
4 X
5 X
6.1 X
6.2
6.3 X
6.4
6.5 X
6.6 X

