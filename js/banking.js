function getInput (inputId) {
    const textValue = document.getElementById(inputId).value;
    const inputValue = parseFloat(textValue);
    document.getElementById(inputId).value = '';
    if (inputValue > 0){
        return inputValue;
    }
}
// Add amount
function addTotal(totalId, inputValue){
    const totalText = document.getElementById(totalId).innerText;
    const totalValue = parseFloat(totalText);
    if (typeof(inputValue) == "number"){
        const totalAmount = totalValue + inputValue;
        document.getElementById(totalId).innerText = totalAmount;
    }
}
// update balance get
function getBalance(){
    const balanceText = document.getElementById("balance-total").innerText;
    const balanceValue = parseFloat(balanceText);
    return balanceValue;
}
// call and add diposit amount and update Balance
document.getElementById("deposit-button").addEventListener("click", function(){
    const inputAmount = getInput("deposit-input");
    addTotal("deposit-total", inputAmount);
    const getTotalBalance = getBalance();
    if (typeof(inputAmount)== "number"){
        const totalBalance = getTotalBalance + inputAmount;
        document.getElementById("balance-total").innerText = totalBalance;
    }
})
// call and add withdraw Amount and update Balance
document.getElementById("withdraw-button").addEventListener("click", function(){
    const withdrawAmount = getInput("withdraw-input");
    addTotal("withdraw-total", withdrawAmount);
    const getTotalBalance = getBalance();
    if (getTotalBalance >= withdrawAmount) {
        const totalBalance = getTotalBalance - withdrawAmount;
        document.getElementById("balance-total").innerText = totalBalance;
    }
})