var numbersToBeAdded = [1, 2, 4, 67, 23, 12, 73, 94, 43, 62, 8, 54, 23, 28, 11, 33];
function addAsynchronously(a, b, callback) {
  setTimeout(function () {
    return callback(null, a + b);
  }, 10 * Math.random());
}

var sum = 0;
var i = 0;
// flag used to check if all numbers are added
if (numbersToBeAdded.length % 2 != 0) {
  var flag = -1
}
else {
  var flag = 0;
}

//Created callback function which will add the current sum value 
//to the sum two numbers given to parent function
var myCallback = function (x, y) {
  sum += y;
  flag = flag + 2;
  if (flag == Math.ceil(numbersToBeAdded.length)) {
    console.log(sum);
  }
}

// loop itterates taking two values at a time from given arrray
// in case of the length of given array is odd, first number added with 0 and loop itterated once
while (i < numbersToBeAdded.length - 1) {
  if (numbersToBeAdded.length % 2 != 0 && i == 0) {
    addAsynchronously(0, numbersToBeAdded[i], fun);
    i = i + 1;
  }
  else {
    addAsynchronously(numbersToBeAdded[i], numbersToBeAdded[i + 1], myCallback);
    i = i + 2;
  }
}



