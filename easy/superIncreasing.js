// Using the JavaScript language, have the function Superincreasing(arr) take the array of numbers stored in arr and
// determine if the array forms a superincreasing sequence where each element in the array is greater than the sum
// of all previous elements. The array will only consist of positive integers. For example: if arr is
// [1, 3, 6, 13, 54] then your program should return the string "true" because it forms a superincreasing sequence.
// If a superincreasing sequence isn't formed, then your program should return the string "false"

function Superincreasing(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length - 1; i++) {
    sum = sum + arr[i];
    if (sum >= arr[i + 1]) {
      return false;
    }
  }
  return true;
}
