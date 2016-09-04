// Using the JavaScript language, have the function TwoSum(arr) take the array of integers stored in arr, and
// determine if any two numbers (excluding the first element) in the array can sum up to the first element in the
// array. For example: if arr is [7, 3, 5, 2, -4, 8, 11], then there are actually two pairs that sum to the number
// 7: [5, 2] and [-4, 11]. Your program should return all pairs, with the numbers separated by a comma, in the order
// the first number appears in the array. Pairs should be separated by a space. So for the example above, your
// program would return: 5,2 -4,11

// If there are no two numbers that sum to the first element in the array, return -1
// Use the Parameter Testing feature in the box below to test your code with different arguments.


function TwoSum(arr) {
  var target = arr[0];
  var temp = [];
  var result = [];
  for (var i = 1; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        temp.push(arr[i], arr[j]);
      }
    }
    result.push(temp);
    temp = [];
  }
  var final =  result.filter(function(el) {
    return el.length !== 0;
  });
  return final.length === 0 ? -1 : final.join(" ");
}
