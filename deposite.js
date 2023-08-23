document.getElementById('deposite-btn').addEventListener('click', function () {

    const depositeInput = document.getElementById('deposite-input').value;

    if (depositeInput === '' || isNaN(parseFloat(depositeInput)) || depositeInput < 0 ) {
        alert('Please enter a valid deposit amount.');
        return; // Exit the function
    }
    const depositeInputNumber = parseFloat(depositeInput);
    const depositeInputAmount = depositeInputNumber;


    const depositePreviousBalance = document.getElementById('deposite-balance');
    const depositePreviousString = depositePreviousBalance.innerText;
    const depositePreviousValue = parseFloat(depositePreviousString);
    
    // new balance added and sum with previous balance 00
    const amount = depositePreviousValue + depositeInputAmount;

    depositePreviousBalance.innerText = amount;

    // deposited amount added to total balance of that account

    const totalBalancePrevious = document.getElementById('total-balance');
    const totalBalancePreviousString = totalBalancePrevious.innerText;
    const totalBalancePreviousValue = parseFloat(totalBalancePreviousString);

    // calculate total balance

    totalBalancePrevious.innerText = totalBalancePreviousValue + depositeInputAmount;

    document.getElementById('deposite-input').value = '';    


});
