// console.log('button clickeing file added')
// document.getElementById('button-login').addEventListener('click',function(){

// })

// secrch: from submit reloading the page 
// step: 1 set event handlar 
document.getElementById('button-login').addEventListener('click',function(event){
    // step-2: prevent default behavior (reloading browser)
    event.preventDefault();  //<---------- vejal to beginners
    console.log("login button clicked")
    // step -3: get the phone number
    const phoneNumber = document.getElementById('phn-num').value;
    const pinNumber = document.getElementById('pin-num').value;

    // bad way to validate
    if( phoneNumber === '5' && pinNumber === '1234'){
        console.log('you are logged in ');
        window.location.href = '/home.html'
    }
    else{
        alert('wrong phone pass or pin')
    }
})