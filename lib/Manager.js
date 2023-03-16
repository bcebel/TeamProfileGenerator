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
    <p>Email: ${this.email}</p>
    <p>Title: ${this.title}</p>
    <p>Office Number: ${this.officeNum}</div>`;
  }
}

module.exports = Manager;
