
// Import Express

var express = require("express");

// Create router

var router = express.Router();

// Import burger.js

var burger = require("../models/burger");

// Create router

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});

// Export router

module.exports = router;