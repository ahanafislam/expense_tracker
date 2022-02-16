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

// EventListener For Calculate Button 
document.getElementById('calculate-btn').addEventListener('click', function(){
    // Get All Value from input
    const income = getInputValue('input-income');
    const foodCost = getInputValue('input-food-cost');
    const rentCost = getInputValue('input-rent-cost');
    const clothesCost = getInputValue('input-clothes-cost');

    // Calculate Total Expense
    const totalExpensesUI = document.getElementById('total-expenses');
    const totalExpensesValue = foodCost + rentCost + clothesCost;
    totalExpensesUI.innerText = totalExpensesValue;

    // Calculate Balance
    const balanceUI = document.getElementById('balance');
    const balanceValue = income - totalExpensesValue;
    balanceUI.innerText = balanceValue;
});
