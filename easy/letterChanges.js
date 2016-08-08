// Using the JavaScript language, have the function LetterChanges(str) take the str
//  parameter being passed and modify it using the following algorithm. Replace
//  every letter in the string with the letter following it in the alphabet
//  (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string
//  (a, e, i, o, u) and finally return this modified string.

//Solution1:
function LetterChanges(str) {
  var arr = str.split("");
  var result = [];
  arr.forEach(function(el) {
    if (el.charCodeAt() >= 97 && el.charCodeAt() < 122) {
      result.push(String.fromCharCode(el.charCodeAt() + 1));
    } else if (el.charCodeAt() === 122) {
      result.push("a");
    } else {
      result.push(el);
    }
  });
  var final = [];
  result.forEach(function(x) {
    if ("aeiou".includes(x)) {
      final.push(x.toUpperCase());
    } else {
      final.push(x);
    }
  });
  return final.join("");
}
