// Using the JavaScript language, have the function CountingMinutesI(str) take the str parameter being passed
// which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen and return
// the total number of minutes between the two times. The time will be in a 12 hour clock format. For example: if
// str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output should be 1320.

function CountingMinutesI(str) {
  var arr = str.split("-");
  var start = convert(arr[0]);
  var stop = convert(arr[1]);
  if (start < stop) {
    return stop - start;
  } else if (start > stop) {
    return 1440 - (start - stop);
  } else {
    return 1440;
  }
}

function convert(time) {
  var arr = time.split(":");
  var hour = arr[0];
  if (time.includes("am")) {
    if (hour === "12") {
      hour = 0;
    } else {
      hour = Number(hour) * 60;
    }
  } else {
    if (hour === "12") {
      hour = 12 * 60;
    } else {
      hour = Number(hour) * 60 + 12 * 60;
    }
  }
  var min = Number(arr[1].slice(0, 2));
  //or min = Number(arr[1][0] + arr[1][1]);
  return hour + min;
}

// console.log(CountingMinutesI("12:30pm-12:00am")); ==> 690
