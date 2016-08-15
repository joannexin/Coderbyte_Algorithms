// Using the JavaScript language, have the function SecondGreatLow(arr) take the array of numbers stored in arr
// and return the second lowest and second greatest numbers, respectively, separated by a space. For example: if
// arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and will contain at
// least 2 numbers. It can get tricky if there's just two numbers!

function SecondGreatLow(arr) {
  if (arr.length === 2) {
    return arr.join(" ");
  }
  arr = uniq(arr);
  arr.sort(function(a, b) {
    return a - b;
  });

  return String(arr[1]) + " " + String(arr[arr.length - 2]);
}

function uniq(arr) {
  var result = [];
  var answer = {};
  for (var i = 0; i < arr.length; i++) {
    if (answer[arr[i]]) {
      answer[arr[i]] += 1;
    } else {
      answer[arr[i]] = 1;
    }
  }
  for (var key in answer) {
    result.push(key);
  }
  return result;
}
