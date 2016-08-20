// Using the JavaScript language, have the function SwapCase(str) take the str parameter and swap the case of each
// character. For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and symbols stay
// the way they are.

function SwapCase(str) {
  var result = [];
  var upp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var low = "abcdefghijklmnopqrstuvwxyz";
  var arr = str.split("");
  for (var i = 0; i < arr.length; i++) {
    if (upp.includes(arr[i])) {
      result.push(low[upp.indexOf(arr[i])]);
    } else if (low.includes(arr[i])) {
      result.push(upp[low.indexOf(arr[i])]);
    } else {
      result.push(arr[i]);
    }
  }
  return result.join("");
}
