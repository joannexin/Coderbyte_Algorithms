// Using the JavaScript language, have the function AlphabetSoup(str) take the str
// string parameter being passed and return the string with the letters in alphabetical
// order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not
// be included in the string.

function AlphabetSoup(str) {
  var arr = str.split("");
  return arr.sort().join("");
}


//FYI: sort() method only works for Alphabet sort. If you would like to sort
//number, such as [1,23,4,89], you need to write your own sortNumber().
function sortNumber(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  })
}
