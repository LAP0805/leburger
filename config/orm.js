const connection = require("./connection");

const orm = {
    selectAll: function(table, callback){
        const queryString = "SELECT * FROM "+ table;
        connection.query(queryString, function(error, result){
if(error) throw error;
callback(result)
        })

    },
    insertOne: function(columnName, itemName, callback){
  const queryString = "INSERT INTO burgers ("+columnName.toString()+ ") VALUES (?)";
  console.log(queryString)
  connection.query(queryString,[itemName], function(error,result){
      if (error) throw error;
      callback(result);

  })

    },
    updateOne: function( columnName, value, condition, callback){
        const queryString = "UPDATE burgers SET "+columnName+" = " + value + " WHERE"+ condition
        connection.query(queryString, function(error, result){
if(error) throw error;
callback(result);
        })

    }
}


module.exports = orm;