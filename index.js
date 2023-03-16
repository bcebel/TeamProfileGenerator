const EmployeeGeneric = require("./lib/Employee.js");
const inquirer = require("inquirer");
const { join } = require("path");
const { writeFile } = require("fs/promises");
const fs = require("fs");
console.log(EmployeeGeneric);
const EmployeeEngineer = require("./lib/Engineer");
const EmployeeIntern = require("./lib/Intern");
const EmployeeManager = require("./lib/Manager");
let i = 0;
const teamArray = [];
let wombat = [];
const beginningHTML = [
  `
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./dist/style.css">
    <title>Document</title>
</head>
<body>`,
];
let funct = function () {
  wombat = [];
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
        type: "checkbox",
        message: "Enter Job Title",
        name: "title",
        choices: ["Engineer", "Intern", "Manager"],
      },
    ])
    .then((response) => {
      if (response.title.toString() == "Engineer") {
        const remp = new EmployeeGeneric(
          response.name,
          response.id,
          response.email
        );
        inquirer
          .prompt([
            {
              type: "input",
              message: "Enter GitHub Username",
              name: "GitH",
            },
          ])
          .then((response) => {
            const emp = new EmployeeEngineer(
              remp.name,
              remp.id,
              remp.email,
              response.GitH
            );

            wombat = [emp.render()];
            teamArray.push(wombat);
            //            beginningHTML.push(wombat);
            //            const what = beginningHTML.join("");
            //            fs.appendFile("index.html", `${what.toString()}`, (err) =>
            //              err ? console.error(err) : console.log("Commit logged!1")
            //            );
            nextPerson();
          });
      } else if (response.title.toString() == "Intern") {
        const remp = new EmployeeGeneric(
          response.name,
          response.id,
          response.email
        );
        inquirer
          .prompt([
            {
              type: "input",
              message: "Enter School Name",
              name: "school",
            },
          ])
          .then((response) => {
            const emp = new EmployeeIntern(
              remp.name,
              remp.id,
              remp.email,
              response.school
            );

            let wombat = [emp.render()];
            teamArray.push(wombat);
            //           beginningHTML.push(wombat);
            //           const what = beginningHTML.join("");

            //           fs.appendFile("index.html", `${what.toString()}`, (err) =>
            //             err ? console.error(err) : console.log("Commit logged!2")
            //           );
            nextPerson();
          });
      } else if (response.title.toString() == "Manager") {
        const remp = new EmployeeGeneric(
          response.name,
          response.id,
          response.email
        );
        inquirer
          .prompt([
            {
              type: "input",
              message: "Enter Office Number",
              name: "officeNumber",
            },
          ])
          .then((response) => {
            const emp = new EmployeeManager(
              remp.name,
              remp.id,
              remp.email,
              response.officeNumber
            );

            let wombat = [emp.render()];
            teamArray.push(wombat);
            //            beginningHTML.push(wombat);
            //            const what = beginningHTML.join("");

            //            fs.appendFile("index.html", `${what.toString()}`, (err) =>
            //              err ? console.error(err) : console.log("Commit logged!3")
            //            );
            nextPerson();
          });
      }
    });
};
let nextPerson = function () {
  inquirer
    .prompt([
      {
        type: "checkbox",
        message: "Would you like to enter another employee?",
        name: "additionalEmployee",
        choices: ["Yes", "No"],
      },
    ])
    .then((response) => {
      if (response.additionalEmployee.toString() == "Yes") {
        funct();
      } else {
        fs.appendFile(
          "index.html",
          `${beginningHTML}${teamArray.join("")}</body></html>`,
          (err) => (err ? console.error(err) : console.log("Commit logged!4"))
        );
      }
    });
};

funct();
