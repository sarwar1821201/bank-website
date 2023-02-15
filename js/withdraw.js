/*
1. add event handler with withdraw button
2. get the withfraw amount from withdraw input field
3. get previous withdraw total
4. calculate the total withdraw amount
4.5- set total withdraw amount
5. get the previous balance total
6. calaculate new balace totak
6.5- set the new balace total
7.  clear the input field
*/

//step-1

document.getElementById('btn-withdraw').addEventListener('click', function(){
   // console.log('withdraw button');
   // step:2 

   const withdrawField= document.getElementById('withdraw-field');
   const newWithdrawAmountString= withdrawField.value;
   const newWithdrawAmount= parseFloat(newWithdrawAmountString);
   //console.log(newWithdrawAmount);

   // step:3
   const previousWithdrawElement= document.getElementById('withdraw-total');
   const previousTotalWithdrawString= previousWithdrawElement.innerText;
   const previousTotalWithdraw= parseFloat(previousTotalWithdrawString);
   //console.log(previousTotalWithdraw);

   // step-4 
   const currentWithdrawTotal= previousTotalWithdraw + newWithdrawAmount;
    
   previousWithdrawElement.innerText = currentWithdrawTotal;

   //step-5
    const balanceTotalElement= document.getElementById('balance-total');
    const previousbalanceTotalString= balanceTotalElement.innerText;
    const previousBalanceTotal= parseFloat(previousbalanceTotalString);
   // console.log(previousBalanceTotal);

    //step-6
   const newbalance= previousBalanceTotal- newWithdrawAmount;
   balanceTotalElement.innerText= newbalance;

   //step-7
   withdrawField.value='';

})