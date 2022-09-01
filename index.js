const db = require("./db/connection");
const cTable = require("console.table");
const inquirer = require("inquirer");
const mysql = require("mysql");

db.connect((err) => {
    if (err) throw err;
    console.log("database connected")
    
})
