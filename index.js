const EmployeeGeneric = require("./lib/Employee.js");
const inquirer = require("inquirer");
const { join } = require("path");
const { writeFile } = require("fs/promises");
const fs = require("fs");
console.log(EmployeeGeneric);
inquirer
  .prompt([
    {
      type: "input",
      message: "Enter name",
      name: "name",
    },
    {
      type: "input",
      message: "Enter employee ID",
      name: "id",
    },
    {
      type: "input",
      message: "Enter email address",
      name: "email",
    },
    {
      type: "input",
      message: "Enter Job Title",
      name: "title",
    },
  ])
  .then((response) => {
    const emp = new EmployeeGeneric(response.name, response.id, response.email);
    emp.render();
    console.log(response.name),
      console.log(response.id),
      console.log(response.email),
      console.log(response.title);

    fs.appendFile(
      "index.html",
      `${emp.render()}# ${response.name}  \r\r
\r\r${response.id}\r\r
\r\r${response.email}\r\r
r\r${response.title}\r\r`,
      (err) => (err ? console.error(err) : console.log("Commit logged!"))
    );
  });
