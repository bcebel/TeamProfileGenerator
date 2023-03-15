const Component = require("./Employee.js");

class Engineer extends Employee {
  constructor(name, id, email, GitHub) {
    super(name, id, email);
    this.GitHub = GitHub;
    this.title = "Engineer";
  }
  render() {
    return `<div class="card"><h1>Todo Today</h1><p>${this.name}</div>
    <p>${this.id}</p>
    <p>${this.email}</p>
    <p>${this.Github}</p>
    <p>${this.title}</p></p>`;
  }
}

module.exports = Engineer;
