// Using the JavaScript language, have the function ArrayMatching(strArr) read the array of strings stored in strArr
// which will contain only two elements, both of which will represent an array of positive integers. For example: if
// strArr is ["[1, 2, 5, 6]", "[5, 2, 8, 11]"], then both elements in the input represent two integer arrays, and
// your goal for this challenge is to add the elements in corresponding locations from both arrays. For the example
// input, your program should do the following additions: [(1 + 5), (2 + 2), (5 + 8), (6 + 11)] which then equals
// [6, 4, 13, 17]. Your program should finally return this resulting array in a string format with each element
// separated by a hyphen: 6-4-13-17.
//
// If the two arrays do not have the same amount of elements, then simply append the remaining elements onto the
// new array (example shown below). Both arrays will be in the format: [e1, e2, e3, ...] where at least one element
// will exist in each array.

function ArrayMatching(strArr) {
  var result = [];
  var arr1 = JSON.parse(strArr[0]);
  var arr2 = JSON.parse(strArr[1]);
  if (arr1.length >= arr2.length) {
    arr1.forEach(function(el, i) {
      if (arr2[i] !== undefined) {
        result.push(el + arr2[i]);
      } else {
        result.push(el);
      }
    });
    return result.join("-");
  } else {
    arr2.forEach(function(el, i) {
      if (arr1[i] !== undefined) {
        result.push(el + arr1[i]);
      } else {
        result.push(el);
      }
    });
    return result.join("-");
  }
}
