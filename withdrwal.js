document.getElementById('Withdraw-btn').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input').value;
    if (withdrawInput < 1 || isNaN(withdrawInput) || withdrawInput === ' ') {
        alert('Please enter a valid deposit amount.');
        return; // Exit the function
    }
    const withdrawInputString = parseFloat(withdrawInput);
    const withdrawAmount = withdrawInputString;
    

    const withdrawPreviousBalance = document.getElementById('withdraw-amount');
    const withdrawPreviousBalanceString = withdrawPreviousBalance.innerText;
    const withdrawPreviousTotal = parseFloat(withdrawPreviousBalanceString);
    const withdrawBalance = (withdrawPreviousTotal + withdrawAmount);
    withdrawPreviousBalance.innerText =  withdrawBalance;


    const totalBalancePrevious = document.getElementById('total-balance');
    const totalBalancePreviousString = totalBalancePrevious.innerText;
    const totalBalancePreviousValue = parseFloat(totalBalancePreviousString);

    totalBalancePrevious.innerText = totalBalancePreviousValue - withdrawAmount;

    document.getElementById('withdraw-input').value = '';  

    




});