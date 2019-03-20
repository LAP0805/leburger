const orm = require("./../config/orm")



const burger = {
    selectAll: function(callback){
        orm.selectAll("burgers", function(result){
            callback(result);
        })
       
    },
    insertOne: function(columnName, values, callback){
        orm.insertOne(columnName, values, function(result){
            callback(result)
        })
       
    },
    updateOne: function(columnName,values, condition, callback){
        orm.updateOne( columnName, values, condition, function(result){
            callback(result)
        })
        
    }
}

module.exports=burger;