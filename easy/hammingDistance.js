// Using the JavaScript language, have the function HammingDistance(strArr) take the array of strings stored in
// strArr, which will only contain two strings of equal length and return the Hamming distance between them. The
// Hamming distance is the number of positions where the corresponding characters are different. For example: if
// strArr is ["coder", "codec"] then your program should return 1. The string will always be of equal length and
// will only contain lowercase characters from the alphabet and numbers.

//Solution1: Sharing index(recommend, faster)
function HammingDistance1(strArr) {
  var count = 0;
  var first = strArr[0].split("");
  var second = strArr[1].split("");
  first.forEach(function(el, i) {
    if (second[i] !== el) {
      count++;
    }
  });
  return count;
}

//Sulotion2: two nested forEach
function HammingDistance2(strArr) {
  var count = 0;
  var first = strArr[0].split("");
  var second = strArr[1].split("");
  first.forEach(function(x, i) {
    second.forEach(function(y, j) {
      if (i === j && x !== y) {
        count++;
      }
    });
  });
  return count;
}
