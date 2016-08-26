// Using the JavaScript language, have the function AdditivePersistence(num) take the num parameter being passed
// which will always be a positive integer and return its additive persistence which is the number of times you
// must add the digits in num until you reach a single digit. For example: if num is 2718 then your program should
// return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9.

//Solution1: Using simple recursion && reduce
function AdditivePersistence(num) {
  if (num < 10) {
    return 0;
  }
  return 1 + AdditivePersistence(sumup(num));
}

function sumup(num) {
  var arr = String(num).split("");
  return arr.reduce(function (total, el) {
    return total + Number(el);
  }, 0)
}

//Solution2: Using complex recursion && reduce
function AdditivePersistence(num) {
  var result = 0;
  function recurse(num) {
    if (num < 10) {
      return 0;
    } else {
      result = result + 1;
      recurse(sum(num));
    }
  }
  recurse(num);
  return result;
}

function sum(num) {
  var arr = String(num).split("");
  return arr.reduce(function(total, el) {
    return total + Number(el);
  }, 0)
}
