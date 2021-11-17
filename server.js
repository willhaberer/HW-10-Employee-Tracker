require("dotenv").config();
const express = require("express");
// const sequelize = require("./config/connection");
// const index = require("./index");
const inquirer = require("inquirer");
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "cityfan14",
    database: "company_db",
  },
  console.log(`Connected to the company_db database.`)
);

// function userInput() {
//   var userTask = index();
//   console.log(userTask);
//   switch (userTask) {
//     case "View All Departments":
//       console.log("about to run view department");
//       viewAllDepartments();
//       break;
//     default:
//       console.log("Unexpected Error Please Try Again");
//   }
// }

inquirer
  .prompt([
    {
      type: "list",
      message: "What would you like to do?",
      name: "task",
      choices: [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "Add a Department",
        "Add a Role",
        "Add an Employee",
        "Update an Employee Role",
      ],
    },
  ])
  .then((res) => {
    const userTask = res.task;
    console.log("user task is" + userTask);
    switch (userTask) {
      case "View All Departments":
        console.log("about to run view department");
        viewAllDepartments();
        break;
      default:
        console.log("Unexpected Error Please Try Again");
    }
  });

function viewAllDepartments() {
  db.query(
    "SELECT departments.id, departments.department_name FROM departments;",
    function (err, res) {
      if (err) throw err;
      console.log(res);
    }
  );
}

app.listen(PORT, () => {
  console.log(`App Listening on port ${PORT}`);
});
