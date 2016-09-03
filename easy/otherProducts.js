// Using the JavaScript language, have the function OtherProducts(arr) take the array of numbers stored in arr and return a new list of the products of all 
// he other numbers in the array for each element. For example: if arr is [1, 2, 3, 4, 5] then the new array, where each location in the new array is the 
// product of all other elements, is [120, 60, 40, 30, 24]. The following calculations were performed to get this answer: [(2*3*4*5), (1*3*4*5), (1*2*4*5), 
// 1*2*3*5), (1*2*3*4)]. You should generate this new array and then return the numbers as a string joined by a hyphen: 120-60-40-30-24. The array will 
// contain at most 10 elements and at least 1 element of only positive integers. 

//Solution1: Using for loop
function OtherProducts(arr) { 
  var result = [];
  var totalProduct = 1;
  for (var i = 0; i < arr.length; i++) {
    totalProduct *= arr[i];
  }
  for (var j = 0; j < arr.length; j++) {
    result.push(totalProduct / arr[j]);
  }
  return result.join("-");
}


//Solution2: Using reduce && map
function OtherProducts(arr) { 
  var totalProduct = arr.reduce(function(total, el) {
    return total * el;
  }, 1)
  return arr.map(function(el) {
    return totalProduct / el;
  }).join("-");
}