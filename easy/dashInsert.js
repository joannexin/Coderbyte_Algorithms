// Using the JavaScript language, have the function DashInsert(str) insert dashes ('-') between each two odd numbers
// in str. For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an odd number.

//Solution1: Using for loop
function DashInsert(str) {
  var arr = str.split("");
  for (var i = 0; i < arr.length; i++) {
    if (Number(arr[i]) % 2 === 1 && Number(arr[i + 1]) % 2 === 1) {
      arr.splice(i+1, 0, "-");
      i = i + 1;
    }
  }
  return arr.join("");
}
