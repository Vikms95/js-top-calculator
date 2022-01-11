<!-- 4. -Get a NodeList reference of all the .num-buttons in the document and turn it into a list.
    -Add different type of eventListeners depending on the button's behaviour  
        -xAdd eventListeners to .num-buttons(brackets and decimal included) and modify display div textContent with the value of the button pressed 
        -xAdd eventListener to .clear-button
        -xAdd eventListeners to .op-button (create one function as display and a second to store the sum and assign everything properly)
        -xAdd eventListeners to .equals-button(no proper behaviour when an operator is clicked after equals)
         -->

    1.**totalValue** Have an internal variable sum all operations.Show on display when *operator* is clicked. 
    2. **(.display-sum)** Have an int value point at **displayReference.textContent* to show the current number typed + the *operator* clicked which when *operator* or *=* is clicked turns into *totalValue*
    3.**(.display-log)** Have a *string* value display the operations to *display.log*
    
    -Store operator when clicked, and when next is clicked, apply *storedOerator* and store the clicked one
    -operand2 is not properly catched when the number has zeroes on the right
        -Create a new display box for the operator shown to the user so it does not conflict with the numbers taken
    