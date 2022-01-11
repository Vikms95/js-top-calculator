
APPROACH IDEAS:
(X) - **totalValue** Have an internal variable sum all operations.Show on display when *operator* is clicked. 
(X) - **(.display-sum)** Have an int value point at **displayReference.textContent* to show the current number typed + the *operator* clicked which when *operator* or *=* is clicked turns into *totalValue*
(X) - **(.display-log)** Have a *string* value display the operations to *display.log*
(X) - Store operator when clicked, and when next is clicked, apply *storedOerator* and store the clicked one
(X) - *operand2* is not properly catched when the number has zeroes on the right
(X) - Create *displauReferenceOp* for the operator shown to the user so it does not conflict with the numbers taken

EDGE-CASES TO HANDLE:
(X) - Dividing by 0:
- Round answers with long decimals so that they don't overflow the screen
- Clicking consequent operators without any number:
- Clicking an operator right after equals button:
