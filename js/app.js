// Function For Get Input Value
function getInputValue(id) {
    const inputTag = document.getElementById(id);
    let inputValue = parseFloat(inputTag.value);

    if(isNaN(inputValue)) {
        inputValue = 0;
        inputTag.value = 0;
    }

    return inputValue;
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
    // Error Message For Negative Income
    if(income < 0){
        errorMessage("Income "+ income +" is wrong input! Try with positive number");
    }
    // Error Message for over expense
    else if(balance < 0) {
        errorMessage("Your Expense Can't more then your income.");
    }

    return balance;
}

// EventListener For Calculate Button 
document.getElementById('calculate-btn').addEventListener('click', function(){
    // Get All Value from input
    const foodCost = getInputValue('input-food-cost');
    const rentCost = getInputValue('input-rent-cost');
    const clothesCost = getInputValue('input-clothes-cost');
    const resultUI = document.getElementById('result');

    // Error Message For Negative Expense Value
    if(foodCost < 0 || rentCost < 0 || clothesCost < 0){
        errorMessage("Your Expenses Can't be any Nagative amount")
    }

    // Calculate Total Expense
    const totalExpensesUI = document.getElementById('total-expenses');
    const totalExpensesValue = foodCost + rentCost + clothesCost;
    totalExpensesUI.innerText = totalExpensesValue;
    resultUI.style.display = 'block';

    // Calculate Balance And Show In UI
    const balanceUI = document.getElementById('balance');
    const balanceValue = getBalance(totalExpensesValue);
    balanceUI.innerText = balanceValue;
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
});
