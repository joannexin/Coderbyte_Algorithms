// Using the JavaScript language, have the function VowelCount(str) take the str string
// parameter being passed and return the number of vowels the string contains (ie. "All
// cows eat grass" would return 5). Do not count y as a vowel for this challenge.

//Solution1: Using forEach
function VowelCount(str) {
  var count = 0;
  var vowels = "aeiou";
  var arr = str.split("");
  arr.forEach(function(el) {
    if (vowels.includes(el)) {
      count++;
    }
  });
  return count;
}

//Solution2: Using filter
function VowelCount2(str) {
  var vowel = "aeiou";
  var arr = str.split("");
  return (arr.filter(function(el) {
    if (vowel.includes(el)) {
      return el;
    }
  })).length;
}

//Solution3: Using reduce
function VowelCount3(str) {
  var count = 0;
  var vowels = "aeiou";
  var arr = str.split("");
  return arr.reduce(function(count, el) {
    if (vowels.includes(el)) {
      count++;
    }
    return count;
  }, 0)
}

//Solution4: Using for loop
function VowelCount4(str) {
  var count = 0;
  var vowels = "aeiou";
  var arr = str.split("");
  for (var i = 0; i < arr.length; i++) {
    if (vowels.includes(arr[i])) {
      count++;
    }
  }
  return count;
}
