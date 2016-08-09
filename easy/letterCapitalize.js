// Using the JavaScript language, have the function LetterCapitalize(str) take the
// str parameter being passed and capitalize the first letter of each word. Words
// will be separated by only one space.
// Input:"hello world"
// Output:"Hello World"

//Solution1: Using while loop && modified itself
function LetterCapitalize(str) {
  var arr = str.split(" ");
  var idx = 0;
  while (idx < arr.length) {
    arr[idx] = arr[idx][0].toUpperCase() + arr[idx].slice(1);
    idx += 1;
  }
  return arr.join(" ");
}

//Solution2: Usin for loop && without modified itself
function LetterCapitalize2(str) {
  var arr = str.split(" ");
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i][0].toUpperCase() + arr[i].slice(1));
  }
  return result.join(" ");
}

//Solution3: Using each && slice && without modified itself
function LetterCapitalize3(str) {
  var arr = str.split(" ");
  var result = [];
  arr.forEach(function (el) {
    result.push(el[0].toUpperCase() + el.slice(1));
  })
  return result.join(" ");
}
