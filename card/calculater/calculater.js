let walue = document.getElementById("result");

function appendValue(value) {
  walue.value = walue.value + value;
}

function clearResult() {
  walue.value = '';
}

function calculateResult() {
  try {
    const result = eval(walue.value);
    walue.value = result;
  } catch (error)
   {
    alert('Calculation Canot be DONE ');
  }
}
