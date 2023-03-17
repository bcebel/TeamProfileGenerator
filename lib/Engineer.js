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
    <a href="mailto:${this.email}">${this.email}</a>
    <p>Title: ${this.title}</p>
    <a href="https://github.com/${this.GitHub}">Github: ${this.GitHub}</a>
    </div>`;
  }
}

module.exports = Engineer;
