
var myFunc = function (value) {
  setTimeout(function () {
    console.log(value);
  }, value * 1000);

};

for (var i = 1; i < 51; i++) {
  myFunc(i);
}
