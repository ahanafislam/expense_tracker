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

// Function For Calculate Balance
function getBalance(expenses){
    const income = getInputValue('input-income');
    const balance = income - expenses;

    return balance;
}

// EventListener For Calculate Button 
document.getElementById('calculate-btn').addEventListener('click', function(){
    // Get All Value from input
    const foodCost = getInputValue('input-food-cost');
    const rentCost = getInputValue('input-rent-cost');
    const clothesCost = getInputValue('input-clothes-cost');

    // Calculate Total Expense
    const totalExpensesUI = document.getElementById('total-expenses');
    const totalExpensesValue = foodCost + rentCost + clothesCost;
    totalExpensesUI.innerText = totalExpensesValue;

    // Calculate Balance And Show In UI
    const balanceUI = document.getElementById('balance');
    balanceUI.innerText = getBalance(totalExpensesValue);
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
