// Using the JavaScript language, have the function EvenPairs(str) take the str parameter being passed and determine
// if a pair of adjacent even numbers exists anywhere in the string. If a pair exists, return the string true,
// otherwise return false. For example: if str is "f178svg3k19k46" then there are two even numbers at the end of the
// string, "46" so your program should return the string true. Another example: if str is "7r5gg812" then the pair
// is "812" (8 and 12) so your program should return the string true.

function EvenPairs(str) {
  var temp = [];
  var acc = [];
  var result = false;
  var arr = str.split("");

  for (var i = 0; i < arr.length; i++) {
    if ("0123456789".includes(arr[i]) && Number(arr[i]) % 2 === 0) {
      acc.push(arr[i]);
    }
    for (var j = i + 1; j < arr.length; j++) {
      if ("0123456789".includes(arr[j]) && Number(arr[j]) % 2 === 0) {
        acc.push(arr[j]);
        if (acc.length > 1) {
          result = true;
        }
      } else if ("0123456789".includes(arr[j]) && Number(arr[j]) % 2 === 1) {
        continue;
      } else {
        break;
      }
    }
    i = j;
  }
  return result;
}

// console.log(EvenPairs("f178svg3k19k46")); ==> true
// console.log(EvenPairs("7r5gg812")); ==> true
// console.log(EvenPairs("abc")); ==> false
// console.log(EvenPairs("1111")); ==> false
// console.log(EvenPairs("128fk9846mf78")); ==> true
// console.log(EvenPairs("7r5gg812")); ==> true
// console.log(EvenPairs("5678dddd")); ==> true
// console.log(EvenPairs("106a")); ==> true
// console.log(EvenPairs("f09r27i8e67")); ==> false
