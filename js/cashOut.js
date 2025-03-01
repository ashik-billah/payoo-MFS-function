// console.log('cash out')


document.getElementById('btn-cash-out').addEventListener('click',function(event){

   event.preventDefault();
   const cashOut = getInputFieldValueById('input-cash-out');
   const pinNumber = getInputFieldValueById('input-cash-out-pin-number');
  //  console.log(' cash out balance',cashOut);

   if(pinNumber === 123)
   {
    const balance = getTextFieldValueById('account-balance');
    // console.log('account balance',balance);
    const newBalance = balance - cashOut;
    document.getElementById('account-balance').innerText = newBalance;
    // console.log('new account balance',newBalance);


   }
   else
   {
     alert('try later');
   }

})