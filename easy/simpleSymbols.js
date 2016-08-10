// Using the JavaScript language, have the function SimpleSymbols(str) take the str
// parameter being passed and determine if it is an acceptable sequence by either
// returning the string true or false. The str parameter will be composed of + and
// = symbols with several letters between them (ie. ++d+===+c++==a) and for the
// string to be true each letter must be surrounded by a + symbol. So the string
// to the left would be false. The string will not be empty and will have at least
// one letter.

function SimpleSymbols(str) {
  var arr = str.split("");
  var idx = 0;
  while (idx < arr.length) {
    var current = arr[idx].charCodeAt()
    if (current >= 65 && (current <= 90 || current >= 97) && current <= 122) {
      if (arr[idx - 1] !== "+" || arr[idx + 1] !== "+") {
        return false;
      }
    }
    idx += 1;
  }
  return true;
}
