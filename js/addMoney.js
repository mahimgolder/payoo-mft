/**
 * 1. add event listener to the add money button (from submit)
 * make sure to peventDefault so that page doesn't reloads 
 * 2. get the money user wants it add 
 * also,get the pin number provided 
 * 3. verify the pin number.for,wrong pin ==> failed to add for add 
 * for right pin number, allow to add the number to the curernt balance 
 * 
 * 4. get the current balance 
 * 5. add money to be added with the current balance 
 * 6. display/update the balance in the DOM/UI
 * 
*/

// 1.
document.getElementById('btn-add money')
    .addEventListener('click', function(event){
        event.preventDefault();

        const addMoneyInput = document.getElementById('input-add-money').value;
        const addMoneyInputNumber = parseFloat(addMoneyInput);
        const pinNumberInput = document.getElementById('input-pin-number').value;
        if(pinNumberInput === '1234'){
            console.log('Adding your money');
        }
        else{
            alert('Please try again later');
        }
        

        const currentBalance = document.getElementById('account-balance').innerText;
        const currentBalanceNumber = parseFloat(currentBalance)

        // const newBalance = currentBalance + addMoneyInput;

        const newBalance = parseFloat(currentBalance) + parseFloat(addMoneyInput);
        console.log(newBalance);

        document.getElementById('account-balance').innerText = newBalance;


    })