// Function For Get Input Value
function getInputValue(id) {
    const inputTag = document.getElementById(id);
    let inputValue = inputTag.value;

    if(inputValue === "") {
        inputValue = 0;
        inputTag.value = 0;
    }

    else if(isNaN(parseFloat(inputValue))) {
        inputValue = 0;
        document.getElementById('string-error').style.display = 'block';
    }

    return parseFloat(inputValue);
}

// Function For Show Error
function errorMessage(message) {
    const errorMessageUI = document.getElementById('error-message');
    const resultUI = document.getElementById('result');
    document.querySelector('#error-message span').innerText = message;
    errorMessageUI.style.display = 'block';
    resultUI.style.display = 'none';
}

// Function For Close Btn
function closeBtn(id) {
    document.getElementById(id).style.display = 'none';
}

// Function For Calculate Balance
function getBalance(expenses){
    const income = getInputValue('input-income');
    const balance = income - expenses;

    return balance;
}

// EventListener For Calculate Button 
document.getElementById('calculate-btn').addEventListener('click', function(){
    // Get All Value from input
    const income = getInputValue('input-income');
    const foodCost = getInputValue('input-food-cost');
    const rentCost = getInputValue('input-rent-cost');
    const clothesCost = getInputValue('input-clothes-cost');
    const resultUI = document.getElementById('result');
    resultUI.style.display = 'block';
    document.getElementById('error-message').style.display = 'none';

    // Error Message For Negative Expense Amount
    if(foodCost < 0 || rentCost < 0 || clothesCost < 0){
        errorMessage("Your Expenses Can't be any Nagative amount")
    }

    // Calculate Total Expense
    const totalExpensesUI = document.getElementById('total-expenses');
    const totalExpensesValue = foodCost + rentCost + clothesCost;
    totalExpensesUI.innerText = totalExpensesValue;

    // Calculate Balance And Show In UI
    const balanceUI = document.getElementById('balance');
    const balanceValue = getBalance(totalExpensesValue);
    balanceUI.innerText = balanceValue;

    // Error Message for over expense and Income
    if(income < 0){
        errorMessage("Income: "+ income +" is wrong input! Try with positive number");
    }
    else if(income == 0) {
        errorMessage("Please enter your income as positive number for calculating.");
    }
    else if(income < totalExpensesValue) {
        errorMessage("Your Expense Can't be more then your income.");
    }
});

// Event Listener For Saving Amount
document.getElementById('save-btn').addEventListener('click', function() {
    const income = getInputValue('input-income');
    // Calculate Saving Amount
    const save = parseInt(getInputValue('save-input'))/100;
    const savingAmount = income * save;
    const savingAmountUI = document.getElementById('saving-amount');
    savingAmountUI.innerText = savingAmount;

    // Calculate Remaining Balance And Display In Ui
    const remainingBalanceUI = document.getElementById('remaining-balance');
    const totalExpense = parseFloat(document.getElementById('total-expenses').innerText)
    const remainingBalance = getBalance(totalExpense) - savingAmount;

    remainingBalanceUI.innerText = remainingBalance;

    // Error message for saving amount
    const balance = getBalance(totalExpense);
    const savingAmountResultUI = document.getElementById('saving-amount-result');
    const savingErrorMessageUI = document.getElementById('saving-error-message');

    if(balance < savingAmount) {
        document.querySelector('#saving-error-message span').innerText = "You don't have enough money for saving";
        savingErrorMessageUI.style.display = 'block';
        savingAmountResultUI.style.display = 'none';
    }
    else {
        savingErrorMessageUI.style.display = 'none';
        savingAmountResultUI.style.display = 'block';
    }

    // Show error message if save input in negative number
    if(save < 0) {
        document.querySelector('#saving-error-message span').innerText = "Sorry! You Can't input any nagitive value";
        savingErrorMessageUI.style.display = 'block';
    }
});
