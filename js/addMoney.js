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

}
else
{
    alert('try later');
}

});