// console.log('cash out')


document.getElementById('btn-cash-out').addEventListener('click',function(event){

   event.preventDefault();
   const cashOut = getInputFieldValueById('input-cash-out');
   const pinNumber = getInputFieldValueById('input-cash-out-pin-number');
  //  console.log(' cash out balance',cashOut);

  if(isNaN(cashOut)){
    alert('Failed to cash out');
    return;
  }

   if(pinNumber === 1)
   {
    const balance = getTextFieldValueById('account-balance');
    // console.log('account balance',balance);
    if(cashOut > balance){
      alert('you donot have enough money to cash out');
      return ;
    }



    const newBalance = balance - cashOut;
    document.getElementById('account-balance').innerText = newBalance;
    // console.log('new account balance',newBalance);


    // add to transaction history
    const div = document.createElement('div');
    div.classList.add('bg-blue-200');
    div.innerHTML = `
    
    <h4 class="text-2xl font-bold">cash out</h4>
    <p>${cashOut} withdraw. new balance ${newBalance} </p>
    
    `
    
    document.getElementById('transaction-container').appendChild(div);


   }
   else
   {
     alert('try later');
   }

});