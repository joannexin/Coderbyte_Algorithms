// Using the JavaScript language, have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
// If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty.

//Solution1:
function LongestWord(sen) {
  var result = [];
  var num = "0123456789"
  var arr = sen.split("");
  arr.forEach(function(el) {
    if (el.charCodeAt() >= 65 && el.charCodeAt() <= 90 || el.charCodeAt() >= 97 && el.charCodeAt() <= 122 || el === " " || num.includes(el)) {
      result.push(el);
    }
  });
  result = result.join("").split(" ");
  var longest;
  result.forEach(function(x) {
    if (longest === undefined || x.length > longest.length) {
      longest = x;
    }
  });
  return longest;
}
