// console.log('utilites added')
// common share function here

// function getInputFieldValueById(){
//     console.log('will get value by id');
//     const addMoney = document.getElementById('input-add-money').value;
//     return addMoney;
// }

function getInputFieldValueById(id){
 const inputValue = document.getElementById(id).value;
 return inputValue;
}