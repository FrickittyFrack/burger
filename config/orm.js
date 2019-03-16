
// Require connection.js

var connection = require("./connection");

// Create ORM

var orm = {
    selectAll: function() {
        var queryString = "SELECT * FROM;";
        connection.query(queryString, function(err, result) {
            if(err) throw err;
            console.log(result);
        });
    },
    insertOne: function(burgerType) {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (??, 0);";
        connection.query(queryString, [burgerType], function(err, result) {
            if(err) throw err;
            console.log(result);
        });
    },
    updateOne: function(burgerToUpdate, updatedBurger) {
        var queryString = "UPDATE burgers SET ?? WHERE ??;";
        connection.query(queryString, [updatedBurger, burgerToUpdate], function(err, result) {
            if(err) throw err;
            console.log(result);
        });
    }
};

// Export ORM

module.exports = orm;