// Using the JavaScript language, have the function SimpleAdding(num) add up all
// the numbers from 1 to num. For the test cases, the parameter num will be any
// number from 1 to 1000.

//Solution1: Using recursion(simple way)
function SimpleAdding(num) {
  if (num === 1) {
    return 1;
  }
  return num + SimpleAdding(num - 1);
}

//Solution2: Using recursion(complicated way)
function SimpleAdding2(num) {
  var total = 0;
  function recurse(num) {
    if (num === 0) {
      return 0;
    } else {
      total = total + num;
      recurse(num - 1);
    }
  }
  recurse(num);
  return total;
}

//Solution3: Using while loop:
function SimpleAdding3(num) {
  var result = 1;
  while (num > 0) {
    result = result + num;
    num -= 1;
  }
  return result;
}

//Solution4: Using reduce:
function SimpleAdding4(num) {
  var arr = range(num);
  return arr.reduce(function (total, el) {
    return total + el;
  }, 0)
}
function range(num) {
  var array = [];
  for (var i = 1; i <= num; i++) {
    array.push(i);
  }
  return array;
}
