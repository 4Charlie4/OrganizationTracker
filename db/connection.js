const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rcP9b1Lw3GnkX&duvF",
    database: "organization",
  },
  console.log("Connected to organization database")
);

module.exports = db;
