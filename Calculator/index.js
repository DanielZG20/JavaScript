var numbers = []
var result
var res = document.getElementById('res')

function insertValue(value) {
  numbers += value
  res.innerHTML = numbers
};

function reset() {
  numbers = ''
  res.innerHTML = ''
};

function calc() {
  if (result == '') {
    result = eval(numbers);
    res.innerHTML = result
  } else {
    result = eval(numbers)
    numbers = result
    res.innerHTML = numbers
  }
};
