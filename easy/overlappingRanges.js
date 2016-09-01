// Using the JavaScript language, have the function OverlappingRanges(arr) take the array of numbers stored in arr
// which will contain 5 positive integers, the first two representing a range of numbers (a to b), the next 2 also
// representing another range of integers (c to d), and a final 5th element (x) which will also be a positive integer,
// and return the string true if both sets of ranges overlap by at least x numbers. For example: if arr is
// [4, 10, 2, 6, 3] then your program should return the string true. The first range of numbers are 4, 5, 6, 7, 8, 9, 10
// and the second range of numbers are 2, 3, 4, 5, 6. The last element in the array is 3, and there are 3 numbers
// that overlap between both ranges: 4, 5, and 6. If both ranges do not overlap by at least x numbers, then your
// program should return the string false.

//Solution1: Using forEach and includes methods
function OverlappingRanges(arr) {
  var arr1 = [];
  var arr2 = [];
  var count = 0;
  for (var i = arr[0]; i <= arr[1]; i++) {
    arr1.push(i);
  }
  for (var j = arr[2]; j <= arr[3]; j++) {
    arr2.push(j);
  }
  arr2.forEach(function(el) {
    if (arr1.includes(el)) {
      count++;
    }
  })
  return count >= arr[4] ? true : false;
}

//Solution2: Using uniq method
function OverlappingRanges2(arr) {
  var first = [];
  var second = [];
  for(var i = arr[0]; i <= arr[1]; i++) {
    first.push(i);
  }
  for(var j = arr[2]; j <= arr[3]; j++) {
    second.push(j);
  }
  second.forEach(function(el) {
    first.push(el);
  });
  return first.length - uniq(first).length >= arr[4] ? true : false;
}

function uniq(arr) {
  var result = [];
  arr.forEach(function(el) {
    if (!result.includes(el)) {
      result.push(el);
    }
  });
  return result;
}
