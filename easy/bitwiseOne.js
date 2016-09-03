// Using the JavaScript language, have the function BitwiseOne(strArr) take the array of strings stored in strArr,
// which will only contain two strings of equal length that represent binary numbers, and return a final binary
// string that performed the bitwise OR operation on both strings. A bitwise OR operation places a 0 in the new
// string where there are zeroes in both binary strings, otherwise it places a 1 in that spot. For example: if
// strArr is ["1001", "0100"] then your program should return the string "1101"

//Solution1: sharing index within one loop(faster than Solution2)
function BitwiseOne(strArr) {
  var result = [];
  var first = strArr[0].split("");
  var second = strArr[1].split("");
  first.forEach(function(x, i) {
    if (x === "0" && second[i] === "0") {
      result.push("0");
    } else {
      result.push("1");
    }
  });
  return result.join("");
}

//Solution2: two nested loops
function BitwiseOne2(strArr) {
  var result = [];
  var first = strArr[0].split("");
  var second = strArr[1].split("");
  first.forEach(function(x, i) {
    second.forEach(function(y, j) {
      if (i === j && x === "0" && y === "0") {
        result.push(0);
      } else if (i === j) {
        result.push(1);
      }
    })
  })
  return result.join("");
}
