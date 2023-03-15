const Component = require("./Employee.js");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.title = "Intern";
  }
  render() {
    return `<div class="card"><h1>Todo Today</h1><p>${this.name}</div>
    <p>${this.id}</p>
    <p>${this.email}</p>
    <p>${this.school}</p>
    <p>${this.title}</p></p>`;
  }
}

module.exports = Intern;
