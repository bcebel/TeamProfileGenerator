const Component = require("./Employee.js");

class Engineer extends Component {
  constructor(name, id, email, GitHub) {
    super(name, id, email);
    this.GitHub = GitHub;
    this.title = "Engineer";
  }
  render() {
    return `
    <div class="card"><h1>Employee</h1><p>${this.name}</p>
    <p>${this.id}</p>
    <p>${this.email}</p>
    <p>${this.title}</p>
    <p>${this.GitHub}</div>`;
  }
}

module.exports = Engineer;
