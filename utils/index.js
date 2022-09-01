
const inquirer = require("inquirer");

class Organization {
  constructor() {}

  init() {
    inquirer.prompt([
      {
        type: "list",
        name: "userChoice",
        message: "What would you like to do?",
        choices: [
          "View All Employees",
          "Add Employee",
          "Update Employee Role",
          "View All Roles",
          "Add Role",
          "View all Departments",
          "Add Department",
          "Exit",
        ],
      },
    ]);
  }
  viewAllEmployees() {

  }
}

module.exports = Organization;
