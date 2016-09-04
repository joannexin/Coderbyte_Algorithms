// Using the JavaScript language, have the function LargestPair(num) take the num parameter being passed and determine
// the largest double digit number within the whole number. For example: if num is 4759472 then your program should
// return 94 because that is the largest double digit number. The input will always contain at least two positive
// digits.

function LargestPair(num) {
  var largest;
  var arr = String(num).split("");
  for (var i = 0; i < arr.length - 1; i++) {
    var current = Number(arr[i] + arr[i + 1]);
    if (largest === undefined || current > largest) {
      largest = current;
    }
  }
  return largest;
}
