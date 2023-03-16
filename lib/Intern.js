const Component = require("./Employee.js");

class Intern extends Component {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.title = "Intern";
  }
  render() {
    return `
    <div class="card"><h1>${this.name}</h1>
    <p>ID: ${this.id}</p>
    <p>Email: ${this.email}</p>
    <p>Title: ${this.title}</p>
    <p>School: ${this.school}</div>`;
  }
}

module.exports = Intern;
