const inquirer = require("inquirer");
const db = require("../db/connection");
require("console.table");

class Organization {
  constructor() {}
  //initiates program
  async init() {
    await inquirer
      .prompt([
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
      ])
      .then(({ userChoice }) => {
        if (userChoice === "View All Employees") this.viewAllEmployees();
        if (userChoice === "Add Employee") this.addEmployee();
      });
  }
  //displays employees
  viewAllEmployees() {
    const query = `SELECT * FROM employee LEFT JOIN roles ON employee.roles_id = roles.id LEFT JOIN department ON department.id = roles.department_id;`;

    db.query(query, (err, res) => {
      if (err) throw err;
      console.table(res);
      this.init();
    });
  }
  addEmployee() {
    inquirer
      .prompt([
        {
          type: "input",
          name: "first",
          message: "What is the name of the employee?",
        },
        {
          type: "input",
          name: "last",
          message: "What is the last name?",
        },
        {
          type: "number",
          name: "roles_id",
          message: "What is the id of the role?",
        },
      ])
      .then(({ first, last, roles_id }) => {
        const query = `INSERT INTO employee (first_name, last_name, roles_id) VALUES (?,?,?);`;
        const params = [first, last, roles_id];

        db.query(query, params, (err, res) => {
          if (err) throw err;
          this.viewAllEmployees();
          this.init();
        });
      });
  }
}

module.exports = Organization;
