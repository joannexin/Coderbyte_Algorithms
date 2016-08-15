// Using the JavaScript language, have the function LetterCountI(str) take the str parameter being passed and return
// the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should
// return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words
// with repeating letters return -1. Words will be separated by spaces.

//Solution1: Using for loop and uniq method
function LetterCountI(str) {
  var arr = str.split(" ");
  var diff;
  var result;
  for (var i = 0; i < arr.length; i++) {
    if (diff === undefined || arr[i].length - uniq(arr[i]).length > diff) {
      diff = arr[i].length - uniq(arr[i]).length;
      result = arr[i];
    }
  }
  if (diff === 0) {
    return -1;
  }
  return result;
}

function uniq(str) {
  var result = [];
  var answer = {};
  var arr = str.split("");
  for (var i = 0; i < arr.length; i++) {
    if (answer[str[i]]) {
      answer[str[i]] += 1;
    } else {
      answer[str[i]] = 1;
    }
  }
  for (var key in answer) {
    result.push(key);
  }
  return result;
}

//Solution2: USing forEach and uniq method
function LetterCountI2(str) {
  var arr = str.split(" ");
  var diff;
  var result;
  arr.forEach(function(el) {
    if (diff === undefined || el.length - uniq(el).length > diff) {
      diff = el.length - uniq(el).length;
      result = el;
    }
  })
  if (diff === 0) {
    return -1;
  }
  return result;
}

function uniq(str) {
  var arr = str.toLowerCase().split("");
  var result = {};
  var answer = [];
  arr.forEach(function(x) {
    if (result[x]) {
      result[x] += 1;
    } else {
      result[x] = 1;
    }
  })
  for (var key in result) {
    answer.push(key);
  }
  return answer.join("");
}
