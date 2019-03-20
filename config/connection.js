const mysql = require("mysql");
const path= require("path");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "hello9",
    database: "leburger_db"
});

connection.connect(function(error){
    if (error){
        throw error;    
    }
    console.log(`connected as id: ${connection.threadId}`);
    
});

module.exports = connection;