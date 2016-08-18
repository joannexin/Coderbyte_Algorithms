// Using the JavaScript language, have the function MeanMode(arr) take the array of numbers stored in arr and
// return 1 if the mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should return 1
//   because the mode (3) equals the mean (3)). The array will not be empty, will only contain positive integers,
//   and will not contain more than one mode.


function MeanMode(arr) {
  var mean = mean1(arr);
  var mode = mode1(arr);
  if (mean === Number(mode)) {
    return 1;
  }
  return 0;
}

function mode1(arr) {
  var result = {};
  for (var i = 0; i < arr.length; i++) {
    if (result[arr[i]]) {
      result[arr[i]] += 1;
    } else {
      result[arr[i]] = 1;
    }
  }
  var max;
  var maxKey;
  for (var key in result) {
    if (max === undefined || result[key] > max) {
      max = result[key];
      maxKey = key;
    }
  }
  return maxKey;
}

function mean1(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
}

// MeanMode([1,2,3]) ==> 0
// MeanMode([4,4,4,6,2]) ==> 1
