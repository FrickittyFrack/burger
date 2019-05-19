// Import Express

var express = require("express");

// Create router

var router = express.Router();

// Import burger.js

var burger = require("../models/burger");

// Create router

router.get("/", function(req, res) {
    res.redirect("/burgers")
});

router.get("/burgers", function(req, res) {
    burger.selectAll(function(data) {
        var burgerObject = {
            burgers: data
        };
        console.log(burgerObject);
        res.render("index", burgerObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger", "devoured"], [req.body.burger, req.body.devoured], function(result) {
        console.log(result);
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    burger.updateOne(
        {
            devoured: req.body.devoured
        },
        condition,
        function(result) {
            if(result.changeRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        }
    );
});

// Export router

module.exports = router;