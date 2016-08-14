// Using the JavaScript language, have the function Palindrome(str) take the str parameter
// being passed and return the string true if the parameter is a palindrome, (the string is
// the same forward as it is backward) otherwise return the string false. For example:
// "racecar" is also "racecar" backwards. Punctuation and numbers will not be part of the
// string.

//Solution1: Using filter && for loop
function Palindrome(str) {
  var arr = str.toLowerCase().split("");
  arr = arr.filter(function(el) {
    return el !== " ";
  })
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
