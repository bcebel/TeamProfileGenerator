const Component = require("./Employee.js");

class Intern extends Component {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.title = "Intern";
  }
  render() {
    return `
    <div class="card"><h1>Employee</h1><p>${this.name}</p>
    <p>${this.id}</p>
    <p>${this.email}</p>
    <p>${this.title}</p>
    <p>${this.school}</div>`;
  }
}

module.exports = Intern;
