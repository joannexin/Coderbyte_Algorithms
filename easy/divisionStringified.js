// Using the JavaScript language, have the function DivisionStringified(num1,num2) take both parameters being
// passed, divide num1 by num2, and return the result as a string with properly formatted commas. If an answer
// is only 3 digits long, return the number with no commas (ie. 2 / 3 should output "1"). For example: if num1
// is 123456789 and num2 is 10000 the output should be "12,346".

//Solution1: In general, it's the same logic as Solution2, but not as easy to read
function DivisionStringified(num1,num2) {
  var result = String(Math.round(num1 / num2));
  if (result.length < 4) {
    return result;
  } else {
    var arr = result.split("");
    for (var i = arr.length - 3; i > 0; i -= 3) {
      arr.splice(i, 0, ",");
    }
    return arr.join("");
  }
}

//Solution2: Split into two functions, make user easier to read
function DivisionStringified2(num1,num2) {
  var q = Math.round(num1 / num2);
  if (q < 1000) {
    return String(q);
  } else {
    return String(convert(q));
  }
}

function convert(q) {
  var arr = String(q).split("");
  for(var i = arr.length - 3; i > 0; i -= 3) {
    arr.splice(i, 0, ",");
  }
  return arr.join("");
}
