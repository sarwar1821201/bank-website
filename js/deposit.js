//console.log('connected');

// step:1 -

document.getElementById('btn-deposit').addEventListener('click', function(){
    
    //step-2 : get the deposit amount from the deposit input field
    // step:3- for input field use .value to the value inside the input field
    const depositField= document.getElementById('deposit-field');
    const newDepositAmountString= depositField.value;
    const newDepositAmount=parseFloat(newDepositAmountString)
    //console.log(typeof newDepositAmount);
    
    //console.log(depositAmount);

    // step-3: get the total deposit amount
    const depositTotalElement= document.getElementById('deposit-total');
    const previousDepositTotalString= depositTotalElement.innerText;
    const previousDepositTotal=parseFloat (previousDepositTotalString);
    //console.log(depositTotal);

    //step:4 add numbers to set the total deposit
    const currentDepositAmount= previousDepositTotal + newDepositAmount;

    depositTotalElement.innerText=currentDepositAmount;
  
   // step-5: get balance current total
   const balanceTotalElement= document.getElementById('balance-total');
   const balanceTotalElementString= balanceTotalElement.innerText;
   const previousBalanceTotal= parseFloat(balanceTotalElementString);

   //step-6: calculate cuurent total balance
   const currentbalanceTotal= previousBalanceTotal + newDepositAmount;

   balanceTotalElement.innerText=currentbalanceTotal;


    //step-7:  clear the deposit field
    depositField.value='';

})