let display = document.getElementById('display');

function appendNumber(num) {
  display.value += num;
}

function appendOperator(op) {
  if (display.value === '') return;
  const lastChar = display.value.slice(-1);
  if ("+-*/".includes(lastChar)) return;
  display.value += op;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}
