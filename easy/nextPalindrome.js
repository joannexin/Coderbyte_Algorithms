// Using the JavaScript language, have the function NextPalindrome(num) take the num parameter being passed and return
// the next largest palindromic number. The input can be any positive integer. For example: if num is 24, then your
// program should return 33 because that is the next largest number that is a palindrome.

function NextPalindrome(num) {
  var i = num + 1;
  while (true) {
    if (isPalindrome(i)) {
      return i;
    }
    i++;
  }
}

function isPalindrome(num) {
  var arr = String(num).split("");
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
