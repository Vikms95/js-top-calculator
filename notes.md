4. -Get a NodeList reference of all the .num-buttons in the document and turn it into a list.
    -Add different type of eventListeners depending on the button's behaviour  
        -xAdd eventListeners to .num-buttons(brackets and decimal included) and modify display div textContent with the value of the button pressed 
        -Add eventListener to .clear-button
        -Add eventListeners to .op-button (create one function as display and a second to store the sum and assign everything properly)
        -Add eventListeners to .equals-button

    1.**storedTotalValue** Have an internal variable sum all operations until *=* is clicked 
    2. **(.display-sum)** Have an int value point at **displayReference.textContent* to show the current number typed + the *operator* clicked which when *operator* or *=* is clicked turns into *storedTotalValue*
    3.**(.display-log)** Have a *string* value display the operations to *display.log*
    