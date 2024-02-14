//Creating classes

class Account {
  accName;
  accEmail;
  constructor(name, email) {
    console.log(name, email);
    console.log("i am a account constructor");
  }
}
class savingsAccount extends Account {
  accId;
  accBal = 3000;
  constructor(name, email, id) {
    super(name, email);
    this.accId = id;
    this.accName = name;
    this.accEmail = email;
    console.log("i am savings account constructor");
  }
}
class currentAccount extends Account {}

const savingsAccObj = new savingsAccount("fahad", "f@gmail.com", 101);
console.log(savingsAccObj);
// const currentAccObj = new currentAccount();
