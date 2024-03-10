let result: string = '';

function appendToResult(value: string): void {
  result += value;
  updateDisplay();
}

function clearResult(): void {
  result = '';
  updateDisplay();
}

function calculateResult(): void {
  try {
    result = eval(result);
    updateDisplay();
  } catch (error) {
    result = 'Error';
    updateDisplay();
  }
}

function updateDisplay(): void {
  const resultElement = document.getElementById('result') as HTMLInputElement;
  resultElement.value = result;
}
