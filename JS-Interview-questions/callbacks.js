setTimeout(function () {
  console.log("setTimeout Called");
}, 6000);

function a(callback) {
  console.log("a called");
  callback();
}

a(function (b) {
  console.log("b called");
});
