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
      `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./dist/style.css">
    <title>Document</title>
</head>
<body>
    ${emp.render()}
</body>
</html>`,
      (err) => (err ? console.error(err) : console.log("Commit logged!"))
    );
  });
