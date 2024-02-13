class Employee {
  emplName;
  empSal;

  creatingDesigns() {
    this.empSal = 23000;
    console.log(this.empSal);
    console.log("create Wireframes");
  }
  developingCode() {
    this.empSal = 24000;
    console.log(this.empSal);
    console.log("Write code");
  }
  testingCode() {
    this.empSal = 25000;
    console.log(this.empSal);
    console.log("test Code");
  }
  HandlingStage() {
    this.empSal = 26000;
    console.log(this.empSal);
    console.log("push code to stage");
  }
  prodDeployment() {
    this.empSal = 37000;
    console.log(this.empSal);
    console.log("deploy code");
  }
}

const designerEmp = new Employee();
const developerEmp = new Employee();
const testerEmp = new Employee();
const stageEMp = new Employee();
const prodEmp = new Employee();

designerEmp.creatingDesigns();
developerEmp.developingCode();
