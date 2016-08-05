// Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.
// Use the Parameter Testing feature in the box below to test your code with different arguments.
//Solution1:
function FirstReverse(str) {
  var arr = str.split("");
  var result = [];
  for(var i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result.join("");
}

//Solution2:
function FirstReverse2(str) {
  var result = '';
  var idx = 0;
  while (idx < str.length) {
    result = str[idx] + result;
    idx += 1;
  }
  return result;
}
