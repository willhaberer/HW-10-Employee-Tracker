const inquirer = require("inquirer");

const startApp = () => {
  return inquirer
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
    .then((response) => {
      return response;
    });
};

module.exports = startApp;
