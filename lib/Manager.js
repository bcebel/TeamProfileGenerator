const Component = require("./Employee.js");

class Manager extends Component {
  constructor(name, id, email, officeNum) {
    super(name, id, email);
    this.officeNum = officeNum;
    this.title = "Manager";
  }
  render() {
    return `
    <div class="card"><h1>Employee</h1><p>${this.name}</p>
    <p>${this.id}</p>
    <p>${this.email}</p>
    <p>${this.title}</p>
    <p>${this.officeNum}</div>`;
  }
}

module.exports = Manager;
