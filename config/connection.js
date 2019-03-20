const mysql = require("mysql");
const path= require("path");
if (process.env.JAWSDB) {
    connection = mysql.createConnection(process.env.JAWSDB)
  } else {
connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "hello9",
    database: "leburger_db"
});
  }
connection.connect(function(error){
    if (error){
        throw error;    
    }
    console.log(`connected as id: ${connection.threadId}`);
    
});

module.exports = connection;