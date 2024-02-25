const fnOne = (success, failure) => {
  const flag = true;

  if (flag == true) {
    success("hello");
  } else {
    failure("bye");
  }
};

fnOne(
  (pass) => {
    console.log(pass);
  },
  (fail) => {
    console.log(fail);
  }
);
