// Using the JavaScript language, have the function MultiplicativePersistence(num) take the num parameter being
// passed which will always be a positive integer and return its multiplicative persistence which is the number of
// times you must multiply the digits in num until you reach a single digit. For example: if num is 39 then your
// program should return 3 because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4.

//Solution1: Using simple recursion && reduce
function MultiplicativePersistence(num) {
  if (num < 10) {
    return 0;
  }
  return 1 + MultiplicativePersistence(productup(num));
}

function productup(num) {
  var arr = String(num).split("");
  return arr.reduce(function(total, el) {
    return total * Number(el);
  }, 1)
}

//Solution2: Using complex recursion && reduce
function MultiplicativePersistence(num) {
  var result = 0;
  function recurse(num) {
    if (num < 10) {
      return 0;
    } else {
      result = result + 1;
      recurse(product(num));
    }
  }
  recurse(num);
  return result;
}

function product(num) {
  var arr = String(num).split("");
  return arr.reduce(function(total, x) {
    return total * Number(x);
  })
}
