// Using the JavaScript language, have the function OffLineMinimum(strArr) take the strArr parameter being passed
// which will be an array of integers ranging from 1...n and the letter "E" and return the correct subset based on
// the following rules. The input will be in the following format: ["I","I","E","I",...,"E",...,"I"] where the I's
// stand for integers and the E means take out the smallest integer currently in the whole set. When finished, your
// program should return that new set with integers separated by commas. For example: if strArr is
// ["5","4","6","E","1","7","E","E","3","2"] then your program should return 4,1,5.

//Solution1: sort Number as a separated function
function OffLineMinimum(strArr) {
  var result = [];
  var final = [];
  strArr.forEach(function (el) {
    if (el !== "E") {
      result.push(Number(el));
    } else {
      final.push(result.shift(min(result)));
    }
  })
  return final.join(",");
}
function min(arr) {
  arr.sort(function (a, b) {
    return a - b;
  })
  return arr[0];
}

//Solution2: sort function within main function
function OffLineMinimum(strArr) {
  var num = "0123456789";
  var result = [];
  var final = [];
  strArr.forEach(function(el) {
    if (num.includes(el)) {
      result.push(Number(el));
    } else if (el === "E") {
      result.sort(function(a, b) {
        return a - b;
      })
      final.push(result[0]);
      result.shift(result[0]);
    }
  });
  return final.join(",");
}
