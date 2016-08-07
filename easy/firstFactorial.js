// Using the JavaScript language, have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (e.g. if num = 4,
// return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18.
//Solution1: Using while loop
function FirstFactorial(num) {
  if (num === 0) {
    return 1;
  }
  var result = 1;
  while (num > 0) {
    result = result * num;
    num -= 1;
  }
  return result;
}

//Solution2: Using recursion (complicated way)
function FirstFactorial2(num) {
  var result = 1;
  function recurse(num) {
    if (num === 1) {
      return 1;
    } else {
      result = result * num;
      recurse(num - 1);
    }
  }
  recurse(num);
  return result;
}

//Solution3: Using recursion (simple way)
function FirstFactorial3(num) {
  if (num === 1) {
    return 1;
  }
  return num * FirstFactorial(num - 1);
}


//Solution4: Using reduce
function FirstFactorial4(num) {
  var arr = range(num);
  return arr.reduce(function (total, el) {
    return total * el;
  }, 1)
}

function range(num) {
  var array = [];
  for (var i = 1; i <= num; i++) {
    array.push(i);
  }
  return array;
}
