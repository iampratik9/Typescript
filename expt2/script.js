var result = '';
function appendToResult(value) {
    result += value;
    updateDisplay();
}
function clearResult() {
    result = '';
    updateDisplay();
}
function calculateResult() {
    try {
        result = eval(result);
        updateDisplay();
    }
    catch (error) {
        result = 'Error';
        updateDisplay();
    }
}
function updateDisplay() {
    var resultElement = document.getElementById('result');
    resultElement.value = result;
}
