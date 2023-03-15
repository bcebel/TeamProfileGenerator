const inputs = require("../index.js");

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.title = "Employee";
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return this.title;
  }
  render() {
    return `<div class="card"><h1>Employee</h1><p>${this.name}</p>
    <p>${this.id}</p>
    <p>${this.email}</p>
    <p>${this.title}</p></div>`;
  }
}

module.exports = Employee;
