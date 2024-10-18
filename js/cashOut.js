document.getElementById('btn-cash-out').addEventListener('click', function(e){
    e.preventDefault()

    const inputCashOutAmount = document.getElementById('input-cash-out').value;
    const inputPin = document.getElementById('input-cash-out-pin').value;
    if(inputPin === '1234'){
        console.log('reducing money to your acound')
    }
    else{
        alert('please try again!')
    }
    const currentBalance = document.getElementById('account-balance').innerText;
    const newAmount = parseFloat(currentBalance) - parseFloat(inputCashOutAmount);
    console.log(newAmount);
    document.getElementById('account-balance').innerText = newAmount

})