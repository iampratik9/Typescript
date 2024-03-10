var currencyRates = {
    'EUR': { 'PLN': 4.15, 'USD': 0.83 },
    'USD': { 'PLN': 3.45, 'EUR': 1.2 }
};
var btn = document.getElementById("submit_btn");
var toShowAmount = document.querySelector('.given-amount');
var toShowBase = document.querySelector('.base-currency');
var toShowSecond = document.querySelector('.second-currency');
var toShowResult = document.querySelector('.final-result');
function convertCurrency() {
    console.log("I have been called");
    var amount = parseFloat(document.getElementById('amount').value);
    var from = document.getElementById('currency-1').value;
    var to = document.getElementById('currency-2').value;
    var result = 0;
    try {
        if (from == to) {
            result = amount;
        }
        else {
            result = amount * currencyRates[from][to];
        }
    }
    catch (err) {
        result = amount * (1 / currencyRates[to][from]);
    }
    toShowAmount.innerHTML = amount.toString();
    toShowBase.innerHTML = from + ' = ';
    toShowSecond.innerHTML = to;
    toShowResult.innerHTML = result.toString();
}
btn.addEventListener('click', convertCurrency);
