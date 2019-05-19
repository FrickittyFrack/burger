// Require ORM

var orm = require("../config/orm");

// Call ORM functions

var burgers = {
    selectAll: function(burg) {
        orm.selectAll("burgers", function(res) {
            burg(res);
        });
    },
    insertOne: function(name, burg) {
        orm.insertOne("burgers", [
            "burger_name, devoured"
        ], [
            name, false
        ], burg);
    },
    updateOne: function(id, burg) {
        var condition = "id=" + id;
        orm.updateOne("burgers", {
            devoured: true
        }, condition, burg);
    }
};

// Export

module.exports = burgers;