const Component = require("./Employee.js");

class Engineer extends Component {
  constructor(name, id, email, GitHub) {
    super(name, id, email);
    this.GitHub = GitHub;
    this.title = "Engineer";
  }
  render() {
    return `
    <div class="card"><h1>${this.name}</h1>
    <p>ID: ${this.id}</p>
    <p>Email: ${this.email}</p>
    <p>Title: ${this.title}</p>
    <p>Github: ${this.GitHub}</div>`;
  }
}

module.exports = Engineer;
