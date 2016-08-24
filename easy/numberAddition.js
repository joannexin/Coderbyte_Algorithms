// Using the JavaScript language, have the function NumberSearch(str) take the str parameter, search for all the numbers in the string, add them together, then return that final number. For example: if str is "88Hello 3World!" the output should be 91. You will have to differentiate between single digit numbers and multiple digit numbers like in the example above. So "55Hello" and "5Hello 5" should return two different answers. Each string will contain at least one letter or symbol. 

function NumberAddition(str) {
  var arr = str.split("");
  var result = [];
  var numbers = "0123456789";
  for (var i = 0; i < arr.length; i++) {
    if (numbers.includes(arr[i])) {
      result.push(arr[i]);
    } else {
      result.push(" ");
    }
  }
  var final = result.join("").split(" ");
  return final.reduce(function(acc, el) {
    return acc + Number(el);
  }, 0)
}
