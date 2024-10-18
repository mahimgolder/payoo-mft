// add money to the account
// s-1: add event handler 
// prevent page reloded after from submet

// s-2: get money to be added to the account balance
// get the pin number

// s-3: verify the pin number


// stp-1: add event handler to the add money button inside the from
document.getElementById('btn-add money').addEventListener('click', function(event){
    event.preventDefault()


    // step-2: get money to be added to the account 
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    // get the pin number provided
    const pinNumberInput =document.getElementById('input-pin-number').value;
    console.log(typeof pinNumberInput);

    // step-3: verify the pin number
    // wrong way to validate pin number 
    if(pinNumberInput === '1234'){
        console.log('adding money to your acount')
    }
    else{
        alert('Failed to add money ! Please try again')
    }

    // step-4: get the current balance
    const currentAccountBalance = document.getElementById('account-balance').innerText;
    console.log(typeof currentAccountBalance);

    // step-5: add addMoneyInput with acountBalance
    const addMoneyInputNumber = parseFloat(addMoneyInput);
    const currentAccountBalanceNumber = parseFloat(currentAccountBalance);
    const newBalance = addMoneyInputNumber + currentAccountBalanceNumber;
    // const newBalance = parseFloat(accountBalance) + parseFloat(addMoneyInput);
    console.log(typeof addMoneyInputNumber);
    console.log(newBalance);

    // step-6: update the balance in the UI/DOM
    document.getElementById('account-balance').innerText = newBalance

})