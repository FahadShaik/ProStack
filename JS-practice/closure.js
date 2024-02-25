function parent() {
  var a = 100;
  function child() {
    console.log(a);
  }
  child();
}
parent();
