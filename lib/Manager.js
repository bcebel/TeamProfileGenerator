const Component = require("./Employee.js");

class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    super(name, id, email);
    this.officeNum = officeNum;
    this.title = "Manager";
  }
  render() {
    return `<div class="card"><h1>Todo Today</h1><p>${this.name}</div>
    <p>${this.id}</p>
    <p>${this.email}</p>
    <p>${this.officeNum}</p>
    <p>${this.title}</p></p>`;
  }
}

module.exports = Manager;
