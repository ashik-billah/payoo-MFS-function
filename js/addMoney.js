// add add money event handler








document.getElementById('btn-add-money').addEventListener('click', function(event){
    
    event.preventDefault();

    console.log('add money button cliked');
//    const addMoney = getInputFieldValueById();
//    console.log(addMoney);
    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');

    // console.log('add money with parameter',addMoney);
    // console.log('add pin number with parameter',pinNumber);

    if(pinNumber === 1)
{
    const balance = getTextFieldValueById('account-balance');
    const newBalance = balance + addMoney;
    document.getElementById('account-balance').innerText = newBalance;
    console.log(balance,addMoney);

    //add to transaction history
    const p = document.createElement('p');
    p.innerText = `added : ${addMoney} tk.New Balance : ${newBalance}`;
    console.log(p);

    //should be a common function

    document.getElementById('transaction-container').appendChild(p);


}
else
{
    alert('try later');
}

});