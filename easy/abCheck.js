// Using the JavaScript language, have the function ABCheck(str) take the str parameter
// being passed and return the string true if the characters a and b are separated by
// exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would
// result in true because there is exactly three characters between a and b). Otherwise
// return the string false.

// Solution1: affacted by space (not apply to this particular problem, but good to know)
function ABCheck(str) {
  var arr = str.split("");
  arr = arr.filter(function(x) {
    return x !== " ";
  })
  var idx = 0;
  while (idx < arr.length) {
    if (arr[idx] === "a" && arr[idx + 4] === "b") {
      return true;
    } else if (arr[idx] === "b" && arr[idx + 4] === "a") {
      return true;
    }
    idx += 1;
  }
  return false;
}
//ABCheck("Laura sobs") ==> false


//Solution2: not affacted by space
function ABCheck2(str) {
  var arr = str.split("");
  var idx = 0;
  while (idx < arr.length) {
    if (arr[idx] === "a" && arr[idx + 4] === "b") {
      return true;
    } else if (arr[idx] === "b" && arr[idx + 4] === "a") {
      return true;
    }
    idx += 1;
  }
  return false;
}
//ABCheck2("Laura sobs") ==> true
