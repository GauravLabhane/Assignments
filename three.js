
//Method 1
var myFunc1 = function (value) {
  setTimeout(function () {
    console.log(value);
    if (value == 50) {
      console.log("Bye");
    }
  }, value * 1000);

};

function method1() {
  for (var i = 1; i < 51; i++) {
    myFunc1(i);
  }
}
// method1();





//Method 2
var myFunc2 = function (value) {
  console.log(value);
};
var i = 1;
function method2() {

  if (i < 51) {
    myFunc2(i);
    i += 1;
  }
  if (i == 51) {
    console.log("Bye");
    clearInterval(id);

  }
}

var id = setInterval(method2, 1000);



