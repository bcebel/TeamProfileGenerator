const Component = require("./Employee.js");

class Manager extends Component {
  constructor(name, id, email, officeNum) {
    super(name, id, email);
    this.officeNum = officeNum;
    this.title = "Manager";
  }
  render() {
    return `
    <div class="card"><h1>${this.name}</h1>
    <p>ID: ${this.id}</p>
        <a href="mailto:${this.email}">${this.email}</a>
    <p>Title: ${this.title}</p>
    <p>Office Number: ${this.officeNum}</div>`;
  }
}

module.exports = Manager;
